import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import Text  from '../text/Text';
import Avatar from '../avatar/Avatar';
import { DrawerItems, NavigationActions } from 'react-navigation';
import styles from './styles';


class DrawerMenu extends React.Component{
  showProfile = () => {
    this.props.navigation.navigate('Profile');
  }

  render(){
    const { user } = this.props.authState;
    return(
      <ScrollView alwaysBounceVertical={false} style={styles.container}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <TouchableOpacity onPress={this.showProfile} style={styles.profileContainer}>
                  {(this.props.authState.user)?<View><Avatar large rounded title={user.fullName.replace(/[^A-Z]/g, '')}  /><Text style={styles.title}>{this.props.authState.user.fullName}</Text><Text>See profile</Text></View>:
                    <Text style={styles.title}>GrabOn: Exclusive Deals</Text>}
              </TouchableOpacity>
              <View style={styles.menuContainer}>
                <DrawerItems
                  {...this.props}
                  items = {this.props.items.filter(item=>{
                    return (item.key != 'Profile');
                  })}
                 />
              </View>
              <View style={styles.footer}>
                <Text>Help</Text>
              </View>
          </SafeAreaView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  authState: state.authState
})

export default connect(mapStateToProps)(DrawerMenu);