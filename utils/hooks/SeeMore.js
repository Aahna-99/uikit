import PropTypes from 'prop-types';
import React from 'react';
import { Text, PanResponder } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import SeeMoreUtil from 'react-native-see-more-inline/src/SeeMore/SeeMoreUtil';

import { ActivityService } from 'services';

import { NavigationRef } from 'utils/navigation/NavigationRef';

import AppColors from '../../../config/AppColors';

class SeeMore extends React.Component {
    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderTerminationRequest: () => true,
        onPanResponderGrant: () => this.handleLinkPressed(),
        onPanResponderTerminate: () => this.handleLinkTerminated(),
        onPanResponderRelease: () => this.handleLinkReleased(),
    });

    /**
     * Map of containerWidth and truncationIndex so that we don't calculate it each time
     */
    containerWidthToTruncationIndexMap;

    constructor(props) {
        super(props);
        const numberOfLineBreaks = (this.props.children.match(/\n/g) || [])
            .length;
        this.state = {
            isLinkPressed: false,
            isShowingMore: false,
            truncationIndex: undefined,
            numberOfLineBreaks,
        };
    }

    isExpanded = () => {
        const { isShowingMore } = this.state;
        return isShowingMore;
    };

    onLayout = e => {
        // e.persist() keeps the original synthetic event intact
        e.persist();
        this.findAndUpdateTruncationIndex(e.nativeEvent.layout.width);
    };

    findAndUpdateTruncationIndex = async containerWidth => {
        const truncationIndex = await this.findTruncationIndex(containerWidth);
        if (truncationIndex && truncationIndex > 0) {
            this.setState({ truncationIndex });
        }
    };

    findTruncationIndex = async containerWidth => {
        if (
            this.containerWidthToTruncationIndexMap &&
            this.containerWidthToTruncationIndexMap[containerWidth]
        ) {
            return this.containerWidthToTruncationIndexMap[containerWidth];
        }

        const {
            children: text,
            style: { fontSize, fontFamily, fontWeight },
            numberOfLines,
            seeMoreText,
        } = this.props;

        const originalText = text.replace(/"/g, '\\"');

        const truncationIndex = await SeeMoreUtil.getTruncationIndex(
            originalText,
            numberOfLines,
            fontSize,
            fontFamily,
            fontWeight,
            containerWidth,
            seeMoreText,
        );

        this.containerWidthToTruncationIndexMap = {
            ...this.containerWidthToTruncationIndexMap,
            [containerWidth]: truncationIndex,
        };

        return truncationIndex;
    };

    collapse() {
        return new Promise(resolve => {
            this.setState({ isShowingMore: false }, () => resolve());
        });
    }

    handleLinkPressed() {
        this.setState({
            isLinkPressed: true,
        });
    }

    handleLinkTerminated() {
        this.setState({
            isLinkPressed: false,
        });
    }

    handleLinkReleased() {
        const { isShowingMore } = this.state;
        this.setState({
            isLinkPressed: false,
            isShowingMore: !isShowingMore,
        });
    }

    renderSeeMoreSeeLessLink() {
        const {
            isLinkPressed,
            isShowingMore,
            truncationIndex,
            numberOfLineBreaks,
        } = this.state;
        const {
            children: text,
            linkColor,
            linkPressedColor,
            seeMoreText,
            seeLessText,
            style,
            numberOfLines,
        } = this.props;
        const isTruncable = truncationIndex < text.length;
        if (!isTruncable && numberOfLineBreaks < numberOfLines) {
            return null;
        }

        return (
            <Text
                {...this.props}
                {...this.panResponder.panHandlers}
                style={[
                    style,
                    {
                        color: isLinkPressed ? linkPressedColor : linkColor,
                    },
                ]}>
                {isShowingMore ? null : <Text {...this.props}>...</Text>}
                {isShowingMore ? ` ${seeLessText}` : ` ${seeMoreText}`}
            </Text>
        );
    }

    render() {
        const {
            isShowingMore,
            truncationIndex,
            numberOfLineBreaks,
            isLinkPressed,
        } = this.state;
        const {
            children: text,
            linkPressedColor,
            linkColor,
            ...props
        } = this.props;

        let onPressLink = async url => {
            let redirectToSurvey = () => {
                let getSurveyParams = (link: String): any => {
                    return {
                        survey_id: link.match(/.*survey_id=(.*?)&/)[1],
                        assignment_id: link.match(/.*assignment_id=(.*?)&/)[1],
                    };
                };

                let params = getSurveyParams(url);
                NavigationRef.current.navigate('SurveyDetail', {
                    ...params,
                });
            };

            if (
                url.includes('survey_id') &&
                url.split('&').includes('assignment_type=internal_open')
            ) {
                redirectToSurvey();
            } else {
                let { getActivities, getLinkData, markActivityAsRead } =
                    new ActivityService({});

                const { isMobile, section, screen, params } = await getLinkData(
                    url,
                );

                if (!isMobile) {
                    return InAppBrowser.open(section, {
                        modalPresentationStyle: 'fullScreen',
                    });
                } else {
                    return NavigationRef.current.navigate(
                        section,
                        params ? params : { screen },
                    );
                }
            }
        };
        if (isShowingMore || !truncationIndex) {
            return (
                <Hyperlink
                    style={{ marginTop: 8 }}
                    linkDefault={false}
                    onLongPress={url => {
                        Clipboard.setString(url);
                        Snackbar.show({
                            text: 'Copied Successfully',
                            duration: Snackbar.LENGTH_LONG,
                        });
                    }}
                    onPress={url =>
                        this.props?.onPressLink
                            ? this.props?.onPressLink()
                            : !this.props?.disabledLink
                            ? onPressLink(url)
                            : ''
                    }
                    linkStyle={{ color: linkColor || AppColors.Orange }}>
                    <Text
                        onLayout={isShowingMore ? undefined : this.onLayout}
                        numberOfLines={
                            isShowingMore ? undefined : props.numberOfLines
                        }
                        // {...this.panResponder.panHandlers}
                    >
                        <Text {...props}>{text}</Text>
                        {this.renderSeeMoreSeeLessLink()}
                    </Text>
                    {numberOfLineBreaks >= props.numberOfLines &&
                        !isShowingMore && (
                            <Text
                                {...this.props}
                                {...this.panResponder.panHandlers}
                                style={[
                                    props.style,
                                    {
                                        color: isLinkPressed
                                            ? linkPressedColor
                                            : linkColor,
                                    },
                                ]}>
                                ...{props.seeMoreText}
                            </Text>
                        )}
                </Hyperlink>
            );
        }

        return (
            <>
                <Text
                    style={{ marginTop: 8 }}
                    onLayout={isShowingMore ? undefined : this.onLayout}
                    numberOfLines={
                        isShowingMore ? undefined : props.numberOfLines
                    }
                    // {...this.panResponder.panHandlers}
                >
                    <Text {...props}>
                        {text.slice(0, truncationIndex - 16)}
                    </Text>
                    {this.renderSeeMoreSeeLessLink()}
                </Text>
            </>
        );
    }
}

SeeMore.propTypes = {
    children: PropTypes.string.isRequired,
    numberOfLines: PropTypes.number.isRequired,
    linkColor: PropTypes.string,
    linkPressedColor: PropTypes.string,
    seeMoreText: PropTypes.string,
    seeLessText: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SeeMore.defaultProps = {
    linkColor: '#2E75F0',
    linkPressedColor: '#163772',
    seeMoreText: 'see more',
    seeLessText: 'see less',
    style: {
        fontFamily: undefined,
        fontSize: 14,
        fontWeight: '300',
    },
    disabledLink: false,
};

export default SeeMore;
