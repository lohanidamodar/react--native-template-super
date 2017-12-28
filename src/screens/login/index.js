import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Card, FormInput, Icon } from '../../components';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { login } from '../../store/actions/authActions'

class LoginScreen extends Component{
    state = {
        username: '',
        password: '',
        error: null,
        loading: false
    }
    
    toSignup = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Signup'})]
    })
    

    handleLoginPress = () => {
        this.setState({loading: true});
        this.setState({loading: false});
        this.props.dispatch(login(true));
    }

    handleRegisterPress = () =>{
        this.props.navigation.dispatch(this.toSignup)
    }
    
    render(){
        return(
                <View style={styles.overlay}>
                    <View style={styles.formContainer}>
                        <Icon style={{alignSelf: 'center'}} color="#ffffff" name="bulb" size={150} />
                        <Card>
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
                        </Card>
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot my password</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.signupContainer}>
                        <Button backgroundColor="#fff" color="#333" onPress={this.handleRegisterPress} rounded  title="Create an Account" />
                    </View>
                </View>
        )
    }
}


const mapStateToProps = (state) => ({
    authState: state.authState
});

export default connect(mapStateToProps)(LoginScreen);