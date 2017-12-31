import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
      paddingTop: '$avatarContainerPadding',
      paddingRight: '$avatarContainerPadding',
      paddingBottom: '$avatarContainerPadding',
      backgroundColor: 'transparent',
      width: '$avatarSize',
      height: '$avatarSize'
    },
    avatar: {
      width: '$avatarSize',
      height: '$avatarSize',
    },
    large: {
        width: '$largeAvatarSize',
        height: '$largeAvatarSize'
    },
    xlarge: {
        width: '$xlargeAvatarSize',
        height: '$xlargeAvatarSize'
    },
    medium: {
      width: '$mediumAvatarSize',
      height: '$mediumAvatarSize'
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '$primaryColor',
      alignSelf: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    title: {
      color: '$avatarForegroundColor',
      fontSize: 17,
      backgroundColor: 'rgba(0,0,0,0)',
      textAlign: 'center',
    },
    icon: {
      color: '$avatarForegroundColor'
    },
  });

  export default styles;