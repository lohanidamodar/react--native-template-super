import React, { Component } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Card, FormInput, Icon } from '../../components';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class SignupScreen extends Component{
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        fullName: '',
        error: null,
        loading: false
    }
    inputs = {}

    toHome = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})]
    })
    
    toLogin = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})]
    })
    
    componentDidMount(){
        console.log(this.inputs)
    }

    handleRegisterPress = () => {
        this.setState({loading: true})
        if(this.state.password !== this.state.confirmPassword){
            this.setState({error: {message: "Passwords did not match"}, loading: false})
            return;
        }
        
        let user = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            email: this.state.email
        }
        
        this.setState({loading: false})
    }

    handleLoginPress = () =>{
        this.props.navigation.dispatch(this.toLogin);
    }
    
    render(){
        return(
            <ScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={styles.container}>
                <View style={styles.formContainer}>
                    <Icon style={{alignSelf: 'center'}} color="#ffffff" name="bulb" size={150} />
                    <Card>
                        <FormInput
                            rounded
                            autoCapitalize="words"
                            onChangeText={text=>this.setState({fullName: text})}
                            placeholder="full name"
                            autoCapitalize="words"
                            />
                        <FormInput
                            autoCapitalize="none"
                            rounded
                            onChangeText={text=>this.setState({email: text})}
                            placeholder="email"
                            keyboardType="email-address"
                            />
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
                        <FormInput
                            rounded
                            autoCapitalize="none"
                            onChangeText={text=>this.setState({confirmPassword: text})}
                            placeholder="confirm password"
                            secureTextEntry={true}
                        />
                        {this.state.error && <Text style={styles.error}>{this.state.error.message}</Text> }
                        <Button loading={this.state.loading} containerStyle={{marginTop: 10}}  rounded onPress={this.handleRegisterPress} title="REGISTER" />
                    </Card>
                </View>
                <View style={styles.loginContainer}>
                    <Button backgroundColor="#fff" color="#333" rounded onPress={this.handleLoginPress} title="Existing user Login" />
                </View>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => ({
    authState: state.authState
});

export default connect(mapStateToProps)(SignupScreen);