import { Platform, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
      marginTop: 10,
      ...Platform.select({
        ios: {
          borderBottomColor: '$inputIosBorderBottomColor',
          borderBottomWidth: 1,
          marginLeft: 20,
          marginRight: 20,
        },
      }),
    },
    roundedInput: {
      borderWidth: EStyleSheet.hairlineWidth,
      borderColor: '$primaryColor',
      borderRadius: 23,
      paddingLeft: 16,
      width: '100%',
    },
    input: {
      ...Platform.select({
        android: {
          minHeight: 46,
          width: '100%',
        },
        ios: {
          minHeight: 36,
          width: width,
        },
      }),
      color: '$textColor',
    },
    validationMessage: {
      marginLeft: 4,
      marginRight: 20,
      marginTop: 5,
      marginBottom: 1,
      color: '$errorColor',
      fontSize: '$validationFontSize',
    },
    label: {
      marginLeft: 4,
      marginRight: 20,
      marginTop: 15,
      marginBottom: 1,
      color: '$labelColor',
      fontSize: '$labelFontSize',
      fontWeight: 'bold',
    },
  });

export default styles;