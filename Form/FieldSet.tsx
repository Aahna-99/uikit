import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'uikit';
import Field from './Field';

import { NavigationRef } from 'utils/navigation/NavigationRef';

import constColors from 'utils/constants/constColors';

const FieldSet = (props: any) => {
    let fieldSets = (fieldSet: { fields: any[] }) => (
        <View>
            {fieldSet.fields.map((_field: any) => {
                let _props = { ...props, field: _field };

                if (_field.filter_type) {
                    _props = {
                        ...props,
                        field: _field,
                        selectedOptions: props.route.params.selectedOptions[
                            _field.filter_type
                        ]?.length
                            ? props.route.params.selectedOptions[
                                  _field.filter_type
                              ]
                            : _field.question_type == 'single_choice'
                            ? [_field.selected]
                            : props.route.params.selectedOptions[
                                  _field.filter_type
                              ],
                    };
                }

                return <Field {..._props} key={Math.random()} />;
            })}
        </View>
    );

    return (
        <View key={Math.random()} style={{}}>
            {fieldSets(props.fieldSet)}
        </View>
    );
};

export { FieldSet };
