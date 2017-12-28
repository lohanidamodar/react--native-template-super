import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Text, Card, Avatar, Icon, FormInput, Button } from '../../../components';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { updateUser } from '../../../store/actions/authActions';
// import Api from '../../../utils/Api';

class EditProfileScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Edit Profile'
    })

    componentWillMount(){
        this.setState({
            ...this.props.user
        })
    }

    updateDetails = () => {
        this.setState({updatingDetails: true});
        var user = {
            ...this.props.user,
            fullName: this.state.fullName,
            email: this.state.email,
            username: this.state.username
        }
        this.props.dispatch(updateUser(user));
        this.setState({updatingDetails: false});
    }

    render(){
        const { fullName } = this.props.user;
        return(
            <ScrollView contentContainerStyle={{paddingBottom: 20}} style={styles.container}>
                <Card title="Edit Profile Details">
                    <View style={{alignItems: 'center'}}>
                        <Avatar rounded title={fullName.replace(/[^A-Z]/g, '')} xlarge />
                    </View>
                    <FormInput
                        rounded
                        placeholder="full name"
                        onChangeText={text=>this.setState({fullName: text})}
                        value={this.state.fullName}
                    />
                    <FormInput
                        rounded
                        placeholder="email"
                        onChangeText={text=>this.setState({email: text})}
                        value={this.state.email}
                    />
                    <FormInput
                        rounded
                        placeholder="username"
                        onChangeText={text=>this.setState({username: text})}
                        value={this.state.username}
                    />
                    <Button
                        loading={this.state.updatingDetails}
                        onPress={this.updateDetails}
                        containerStyle={{marginTop: 10}} rounded title="update" />
                </Card>
                <Card title="Change password">
                    <FormInput
                        rounded
                        placeholder="old password"
                        secureTextEntry={true}
                        onChangeText={text=>this.setState({oldPassword: text})}
                        />
                    <FormInput
                        rounded
                        secureTextEntry={true}
                        placeholder="new password"
                        onChangeText={text=>this.setState({newPassword: text})}
                        />
                    <FormInput
                        rounded
                        secureTextEntry={true}
                        placeholder="confirm new password"
                        onChangeText={text=>this.setState({confirmPassword: text})}
                    />
                    <Button containerStyle={{marginTop: 10}} rounded title="Save" />
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.authState.user
});

export default connect(mapStateToProps)(EditProfileScreen);