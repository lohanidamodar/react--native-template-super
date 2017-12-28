import EStyleSheet from 'react-native-extended-stylesheet';


export default styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$primaryColor',
        padding: '$containerPadding'
    },
    error: {
        color: '$errorColor'
    },
    formContainer:{
        marginBottom: 'auto',
        marginTop: 'auto',

    },
    loginContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    loginText: {
        color: '$accentColor'
    }
})