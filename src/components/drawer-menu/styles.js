import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    profileContainer:{
        flex: 2,
        padding: '$containerPadding',

    },
    menuContainer:{
        flex: 4
    },
    footer: {
        flex: 1,
        padding: '$containerPadding',
        justifyContent: 'flex-end'
    }
});

export default styles;