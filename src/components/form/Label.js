import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Platform, Text as NativeText } from 'react-native';
import Text from '../text/Text';
import styles from './styles';

const Label = props => {
  const {
    labelStyle,
    children,
    fontFamily,
    ...attributes
  } = props;
  return (
      <Text
        style={[
          styles.label,
          labelStyle && labelStyle,
          fontFamily && { fontFamily },
          ...attributes
        ]}
      >
        {children}
      </Text>
  );
};

Label.propTypes = {
  containerStyle: PropTypes.any,
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};


export default Label;