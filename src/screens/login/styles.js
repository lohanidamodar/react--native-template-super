import EStyleSheet from 'react-native-extended-stylesheet';


export default styles = EStyleSheet.create({
    container: {
        flex: 1,
        
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '$containerPadding'
    },
    error: {
        color: '$errorColor'
    },
    formContainer:{
        marginBottom: 'auto',
        marginTop: 'auto',

    },
    signupContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    forgotPassword:{
        alignItems: 'center',
        paddingTop: 8,
    },
    forgotPasswordText: {
        fontSize: 16,
        color: '$secondaryColor'
    },
    registerText: {
        color: '$accentColor'
    }
})