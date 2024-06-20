import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { Icon, Screen, Text, Button } from 'uikit';

import { NavigationRef } from 'utils/navigation/NavigationRef';
import { ICONS } from 'utils/models/IconsType';
import constColors from 'utils/constants/constColors';

import { FieldSet } from './FieldSet';

import { fieldSetStyles as styles } from './styles';

import store from 'processors/store';

class Form extends React.Component {
    openModal = () => {
        this.setState({ isModalVisible: true });
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };

    renderContent = () => {
        let fields = this.props.route.params.layout;

        let renderApply = () => {
            let handleApply = () => {
                let filters = store?.getState()?.filters?.filters;
                this.props?.route?.params?.onSubmit(filters);
                NavigationRef.current.goBack();
            };

            return (
                <View style={{ margin: 16 }}>
                    <Button onPress={handleApply}>
                        <Text
                            color={constColors.bgWhite}
                            headingType={'h5'}
                            fontWeight={'semibold'}>
                            {'Apply'}
                        </Text>
                    </Button>
                </View>
            );
        };

        return (
            <View style={styles.container}>
                {fields.map((fieldSet: any) => {
                    let props = {
                        ...this.props,
                        fieldSet: fieldSet,
                        route: {
                            ...this.props.route,
                            params: {
                                ...this.props.route.params,
                                selectedOptions:
                                    this.state?.selectedOptions ||
                                    this.props.route.params.selectedOptions,
                            },
                        },
                    };

                    return <FieldSet {...props} key={Math.random()} />;
                })}
                {renderApply()}
            </View>
        );
    };

    render() {
        let { CHEVRON_LEFT, RESET } = ICONS;

        let actionButtons = [
            <Icon
                icon={RESET}
                size={16}
                color={constColors.bgWhite}
                onPress={() => {
                    this.setState({ selectedOptions: [] });
                }}
            />,
        ];

        let navigationAction = [
            <Icon
                icon={CHEVRON_LEFT}
                size={16}
                color={constColors.bgWhite}
                onPress={() => {
                    NavigationRef.current.goBack();
                }}
            />,
        ];

        return (
            <Screen
                mode={2}
                title={'Filters'}
                renderContent={this.renderContent}
                actionButtons={actionButtons}
                navigationAction={navigationAction}
            />
        );
    }
}

export default Form;
