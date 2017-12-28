import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Label from './Label';
import ValidationMessage from './ValidationMessage';
import styles from './styles';


class FormInput extends Component{

    render() {
        const { label, containerStyle, validationMessage, validationProps, placeholder, labelProps, inputProps, rounded, textInputRef, ...attributes } = this.props;
        return(
            <View 
                style={[styles.container, containerStyle && containerStyle ]}
            >
                {label && <Label {...labelProps}>{label}</Label>}
                <Input
                    ref={textInputRef}
                    rounded={rounded}
                    {...inputProps} placeholder={placeholder} {...attributes} />
                {validationMessage && <ValidationMessage {...validationProps}>{validationMessage}</ValidationMessage>}
            </View>
        );
    }

}


FormInput.propTypes = {
    containerStyle: PropTypes.any,
    placeholder: PropTypes.string,
    validationMessage: PropTypes.string,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
    validationProps: PropTypes.object,
    rounded: PropTypes.bool
}

export default FormInput;