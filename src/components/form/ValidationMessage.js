import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import Text from '../text/Text';
import styles from './styles';

const ValidationMessage = props => {
  const {
    validationStyle,
    children,
    fontFamily,
    ...attributes
  } = props;
  return (
      <Text
        style={[
          styles.validationMessage,
          validationStyle && validationStyle,
          fontFamily && { fontFamily },
        ]}
      >
        {children}
      </Text>
  );
};

ValidationMessage.propTypes = {
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};


export default ValidationMessage;