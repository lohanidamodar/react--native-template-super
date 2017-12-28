import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen, ComponentListScreen, LoginScreen, SignupScreen, ProfileScreen, EditProfileScreen }  from '../screens';
import globalStyles from '../styles/GlobalStyles';

const stackNavOptions = {
    navigationOptions: ({navigation})=>({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle
    }),
    headerType: 'screen',
    cardStyle: {
        backgroundColor: '#fff',
    }
};

export const MainStack = DrawerNavigator({
    Components: { 
        screen: StackNavigator({
            First: {screen: ComponentListScreen}
        },stackNavOptions)
    },
    Home: { 
        screen: StackNavigator({
            First: {screen:HomeScreen}
        },stackNavOptions)
    },
    Profile: {
        screen: StackNavigator({
            First: {screen: ProfileScreen}
        }, stackNavOptions)
    },
    EditProfile: {
        screen: StackNavigator({
            First: {screen: EditProfileScreen}
        }, stackNavOptions)
    }
});

const navConfigs = {
    headerMode: 'none'
};
export const LoginStack = StackNavigator({
    Login: {
        screen: LoginScreen
    },
    Signup: {
        screen: SignupScreen
    }
},navConfigs)