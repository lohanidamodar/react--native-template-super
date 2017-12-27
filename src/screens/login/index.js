import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Card, FormInput } from '../../components';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
// import { login, updateUser } from '../../state/actions';

class LoginScreen extends Component{
    state = {
        username: '',
        password: '',
        error: null,
        loading: false
    }

    toHome = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})]
    })
    
    toSignup = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Signup'})]
    })
    

    handleLoginPress = () => {
        // this.setState({loading: true});
        // Api.login(this.state.username, this.state.password).then(user=>{
        //     this.setState({loading: false});
        //     this.props.dispatch(login(true));
        //     user = {
        //         id: user.id,
        //         username: user.get('username'),
        //         email: user.get('email'),
        //         fullName: user.get('fullName')
        //     }
        //     this.props.dispatch(updateUser(user));
        //     this.props.navigation.dispatch(this.toHome);
        // }).catch(error=>{
        //     console.log('Login error', error);
        //     this.setState({error: error, loading: false});
        // })
    }

    handleRegisterPress = () =>{
        // this.props.navigation.dispatch(this.toSignup);
    }
    
    render(){
        return(
            // <ImageBackground source={require('../../assets/login_background.jpg')} style={styles.container}>
                <View style={styles.overlay}>
                    <View style={styles.formContainer}>
                        <Card title="LOGIN">
                            <FormInput
                                rounded
                                autoCapitalize="none"
                                onChangeText={text=>this.setState({username: text})}
                                placeholder="username"
                                />
                            <FormInput
                                rounded
                                autoCapitalize="none"
                                onChangeText={text=>this.setState({password: text})}
                                placeholder="password"
                                secureTextEntry={true}
                            />
                            {this.state.error && <Text style={styles.error}>{this.state.error.message}</Text> }
                            <Button loading={this.state.loading} containerStyle={{marginTop: 10}} rounded onPress={this.handleLoginPress} title="LOGIN" />
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot my password</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View style={styles.signupContainer}>
                        <Button onPress={this.handleRegisterPress} rounded secondary title="Create an Account" />
                    </View>
                </View>
            // </ImageBackground>
        )
    }
}


const mapStateToProps = (state) => ({
    authState: state.authState
});

export default connect(mapStateToProps)(LoginScreen);