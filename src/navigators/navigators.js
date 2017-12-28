import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen, ComponentListScreen, LoginScreen, SignupScreen, ProfileScreen, EditProfileScreen }  from '../screens';
import { DrawerMenu } from '../components'
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
            First: {screen: ProfileScreen},
            EditProfile: {screen: EditProfileScreen}
        }, stackNavOptions)
    }
},{
    contentComponent: props => <DrawerMenu {...props} />
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