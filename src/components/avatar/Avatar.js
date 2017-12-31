import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Text as NativeText,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from '../icon/Icon';
import Text from '../text/Text';

import styles from './styles';


const Avatar = props => {
  const {
    component,
    onPress,
    onLongPress,
    containerStyle,
    icon,
    iconStyle,
    source,
    medium,
    large,
    xlarge,
    avatarStyle,
    rounded,
    title,
    titleStyle,
    overlayContainerStyle,
    activeOpacity,
    imageProps,
    ...attributes
  } = props;

  let { size } = props;
  
  if (medium) {
    size = styles._medium.width;
  } else if (large) {
    size = styles._large.width;
  } else if (xlarge) {
    size = styles._xlarge.width;
  } else if (!size) {
    size = styles._avatar.width;
  }

  let width = height = size;

  let titleSize = width / 2;
  let iconSize = width / 2;

  let Component = onPress || onLongPress ? TouchableOpacity : View;
  if (component) {
    Component = component;
  }

  
  const renderContent = () => {
    if (source) {
      return (
        <Image
          style={[
            styles.avatar,
            large && styles.large,
            xlarge && styles.xlarge,
            rounded && { borderRadius: width / 2 },
            avatarStyle && avatarStyle,
          ]}
          source={source}
          {...imageProps}
        />
      );
    } else if (title) {
      return (
        <Text style={[styles.title, titleStyle && titleStyle]}>
          {title}
        </Text>
      );
    } else if (icon) {
      return (
        <Icon
          style={iconStyle && iconStyle}
          color={icon.color || styles._icon.color}
          name={icon.name || 'user'}
          size={icon.size || iconSize}
          type={icon.type && icon.type}
        />
      );
    }
  };

  return (
    <Component
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        rounded && { borderRadius: width / 2 },
        large && styles.large,
        xlarge && styles.xlarge,
        containerStyle && containerStyle,
      ]}
    >
      <View
        style={[
          styles.overlayContainer,
          rounded && { borderRadius: width / 2 },
          overlayContainerStyle && overlayContainerStyle,
        ]}
      >
        {renderContent()}
      </View>
    </Component>
  );
};


Avatar.propTypes = {
  component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  size: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: PropTypes.any,
  source: Image.propTypes.source,
  avatarStyle: PropTypes.any,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: NativeText.propTypes.style,
  overlayContainerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
  icon: PropTypes.object,
  iconStyle: NativeText.propTypes.style,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  imageProps: PropTypes.object,
};

export default Avatar;