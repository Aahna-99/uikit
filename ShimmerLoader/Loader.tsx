import React from 'react';
import { View as RNView } from 'react-native';

import { Separator, Avatar, Media, Card } from 'uikit';

import constColors from 'utils/constants/constColors';
import { loaderStyles as styles } from './LoaderStyles';

function ShimmerLoader(props: any) {
    let { type } = props;

    const renderMedia = () => {
        return (
            <Media
                wrapperStyle={styles.media}
                loading={true}
                avatar={
                    props.media === false ? (
                        <></>
                    ) : (
                        <Avatar avatarSize={42} userName={''} />
                    )
                }
                title={'example'}
                subtitle={'example'}
            />
        );
    };

    const renderLoaderCard = () => {
        const renderCard = (
            <Card
                style={{
                    containerStyle: styles.cardContainerStyle,
                }}
                shadow={true}
                header={renderMedia()}
            />
        );
        return (
            <RNView>
                {renderCard}
                {renderCard}
                {renderCard}
                {renderCard}
            </RNView>
        );
    };

    const renderLoader = () => {
        const renderSeparator = (
            <Separator
                style={styles.mediaSeparator}
                type={'hyphen'}
                color={constColors.bgBorder}
            />
        );
        return (
            <RNView>
                {renderMedia()}
                {renderSeparator}
                {renderMedia()}
                {renderSeparator}
                {renderMedia()}
                {renderSeparator}
                {renderMedia()}
                {renderSeparator}
            </RNView>
        );
    };

    return type === 'card' ? renderLoaderCard() : renderLoader();
}
export default ShimmerLoader;
