import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Text, Card, Avatar, Icon } from '../../components';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { login } from '../../store/actions/authActions';

class ProfileScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerMode: 'none',
        header: null
    })
    logout = () => {
        this.props.dispatch(login(false));
    }

    render(){
        const { fullName, username, email } = this.props.user;
        return(
            <View style={styles.container}>
                <ScrollView 
                    style={styles.content}
                    stickyHeaderIndices={[1]}
                >
                    <View style={[ styles.headerContainer, styles.avatarContainer]}>
                        <Avatar overlayContainerStyle={styles.avatar} rounded title={fullName.replace(/[^A-Z]/g, '')} xlarge />
                    </View>
                    <View style={ [styles.headerContainer, styles.stickyHeader] }>
                        <Text h3 style={styles.headerText}>
                            {fullName}
                        </Text>
                        <Text h4 style={styles.headerText}>
                            {email}
                        </Text>
                    </View>
                    <View style={{height: 1000}}>
                    </View>
                </ScrollView>
                <View style={styles.fixedHeader}>
                    <View>
                        <Icon color="#fff" onPress={()=>this.props.navigation.navigate('DrawerToggle')} name="menu" />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon onPress={()=>this.props.navigation.navigate('EditProfile')} style={{marginRight: 16}} size={27} color="#fff" name="create" />
                        <Icon color="#fff" onPress={this.logout} name="exit" />
                    </View>

                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.authState.user
});

export default connect(mapStateToProps)(ProfileScreen);