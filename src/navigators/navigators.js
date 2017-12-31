import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen, ComponentListScreen, LoginScreen, SignupScreen, ProfileScreen, EditProfileScreen }  from '../screens';
import { DrawerMenu } from '../components'
import { Icon } from '../components'
import globalStyles from '../styles/GlobalStyles';

const handleMenuPress = (navigation) => {
    navigation.navigate('DrawerToggle')
}

const stackNavOptions = {
    navigationOptions: ({navigation})=>({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle,
        headerLeft: <Icon style={{marginLeft: 20}} size={27} onPress={()=>handleMenuPress(navigation)} color="#fff" name="menu" />,
    }),
    headerType: 'screen',
    cardStyle: {
        backgroundColor: '#fff',
    },
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