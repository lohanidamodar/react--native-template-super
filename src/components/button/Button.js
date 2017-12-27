import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  Text as NativeText,
} from 'react-native';
import Text from '../text/Text';
import styles from './styles';
import  Icon  from '../icon/Icon';


const log = () => {
    console.log('please attach method to this component');
};

const Button = props => {
  const {
    disabled,
    loading,
    loadingRight,
    activityIndicatorStyle,
    buttonStyle,
    borderRadius,
    title,
    onPress,
    accent,
    icon,
    iconComponent,
    iconRight,
    backgroundColor,
    color,
    fontSize,
    underlayColor,
    raised,
    textStyle,
    large,
    fontWeight,
    disabledStyle,
    fontFamily,
    containerViewStyle,
    rounded,
    outline,
    transparent,
    textNumberOfLines,
    textEllipsizeMode,
    allowFontScaling,
    ...attributes
  } = props;
  let { Component } = props;

  let IconComponent;

  if(icon){
    let IconElement;
    IconElement = (iconComponent)?iconComponent:Icon;
    IconComponent = (
      <IconElement
        {...icon}
        color={icon.color || styles.$iconColor}
        size={icon.size || styles._text.fontSize}
        style={[(iconRight)?styles.iconRight:styles.icon, icon.style && icon.style]}
      />
    )
  }

  
  
  let loadingElement;
  if (loading) {
    loadingElement = (
      <ActivityIndicator
        animating={true}
        style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
        color={color || 'white'}
        size={(large && 'large') || 'small'}
      />
    );
  }
  if (!Component && Platform.OS === 'ios') {
    Component = TouchableHighlight;
  }
  if (!Component && Platform.OS === 'android') {
    Component = TouchableNativeFeedback;
  }
  if (!Component) {
    Component = TouchableHighlight;
  }

  if (Platform.OS === 'android' && (borderRadius && !attributes.background)) {
    if (Platform.Version >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple(
        'ThemeAttrAndroid',
        true
      );
    } else {
      attributes.background = TouchableNativeFeedback.SelectableBackground();
    }
  }

  const baseFont = {
    color: (textStyle && textStyle.color) || color || styles._text.color,
    size:
      (textStyle && textStyle.fontSize) ||
      fontSize ||
      (!large && styles._smallFont.fontSize) ||
      styles._text.fontSize,
  };

  let textOptions = {};
  if (textNumberOfLines) {
    textOptions.numberOfLines = textNumberOfLines;
    if (textEllipsizeMode) {
      textOptions.ellipsizeMode = textEllipsizeMode;
    }
  }

  return (
    <View
      style={[
        styles.container,
        raised && styles.raised,
        containerViewStyle,
        borderRadius && { borderRadius },
      ]}
    >
      <Component
        {...attributes}
        underlayColor={underlayColor || 'transparent'}
        onPress={onPress || log}
        disabled={disabled || false}
      >
        <View
          pointerEvents="box-only"
          style={[
            styles.button,
            accent && styles.accent,
            backgroundColor && { backgroundColor: backgroundColor },
            borderRadius && { borderRadius },
            !large && styles.small,
            rounded && {
              borderRadius: baseFont.size * 3.8,
              paddingHorizontal: !large
                ? styles._small.padding * 1.5
                : styles._button.padding * 1.5,
            },
            outline && {
              borderWidth: 1,
              backgroundColor: 'transparent',
              borderColor: baseFont.color,
            },
            transparent && {
              borderWidth: 0,
              backgroundColor: 'transparent',
            },
            buttonStyle && buttonStyle,
            disabled && { backgroundColor: colors.disabled },
            disabled && disabledStyle && disabledStyle,
          ]}
        >
          {(icon && !iconRight) && IconComponent}
          {loading && !loadingRight && loadingElement}
          <Text
            style={[
              styles.text,
              color && { color },
              !large && styles.smallFont,
              fontSize && { fontSize },
              textStyle && textStyle,
              fontWeight && { fontWeight },
              fontFamily && { fontFamily },
            ]}
            {...textOptions}
            allowFontScaling={allowFontScaling}
          >
            {title}
          </Text>
          {loading && loadingRight && loadingElement}
          {(icon && iconRight) && IconComponent}
        </View>
      </Component>
    </View>
  );
};

Button.propTypes = {
  buttonStyle: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.any,
  icon: PropTypes.object,
  iconRight: PropTypes.bool,
  iconComponent: PropTypes.any,
  accent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  textStyle: NativeText.propTypes.style,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  activityIndicatorStyle: PropTypes.any,
  loadingRight: PropTypes.bool,
  Component: PropTypes.any,
  borderRadius: PropTypes.number,
  large: PropTypes.bool,
  fontWeight: PropTypes.string,
  disabledStyle: PropTypes.any,
  fontFamily: PropTypes.string,
  containerViewStyle: PropTypes.any,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  textNumberOfLines: PropTypes.number,
  textEllipsizeMode: PropTypes.string,
};

export default Button;