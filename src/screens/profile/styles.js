import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    fixedHeader: {
        paddingLeft: '$containerPadding',
        paddingRight: '$containerPadding',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        left: 0
    },
    headerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '$primaryColor'
    },
    stickyHeader: {
        padding: '$containerPadding',
        height: 100,
    },
    avatarContainer: {
        paddingTop: 50,
        height: 220
    },
    headerText: {
        color: '$inverseTextColor'
    },
    avatar: {
        backgroundColor: '$secondaryColor'
    }
});