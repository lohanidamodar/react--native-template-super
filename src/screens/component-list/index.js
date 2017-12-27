import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import { Avatar, Button, Divider, Card, Text, Icon, FormInput } from '../../components';

class ComponentListScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'All Components'
    })

    render(){
        return(
            <ScrollView style={styles.container}>
                <Card title="Avatar">
                    <View style={{flexDirection: 'row'}} >
                        <Avatar
                            large
                            rounded
                            title="MT"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            large
                            rounded
                            source={{uri: "https://i.ytimg.com/vi/uDBtDh9Y2as/maxresdefault.jpg"}}
                            activeOpacity={0.7}
                            containerStyle={{marginRight: 60}}
                        />
                        <Avatar
                            rounded
                            icon={{name: 'home'}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{marginRight: 60}}
                        />
                    </View>
                </Card>
                <Card title="Text Input">
                    <FormInput validationMessage="Validation message" label="Label " placeholder="placeholder text" />
                    <FormInput rounded placeholder="rounded input" />
                    <FormInput label="Label " placeholder="Placeholder" />
                    <FormInput placeholder="Placeholder only" />
                </Card>
                <Card title="Text from h1 to h4">
                    <Text h1> Heading 1 </Text>
                    <Text h2> Heading 2 </Text>
                    <Text h3> Heading 3 </Text>
                    <Text h4> Heading 4 </Text>
                </Card>

            
                <Card title="A card with Image and featured title">
                    <Card
                        featuredTitle='HELLO WORLD'
                        featuredSubtitle='This is hello world featured'
                        image={{uri: 'https://i.ytimg.com/vi/uDBtDh9Y2as/maxresdefault.jpg'}}
                        >
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>
                </Card>

                <Card title="Buttons">
                    <Button onPress={this.generateLuckyNumber} primary title="Primary Button" />
                    <Button onPress={this.generateLuckyNumber} accent title="Accent Button" />
                    <Button icon={{name: "wine"}} onPress={this.generateLuckyNumber} title="Left Icon Button" />
                    <Button icon={{name: "navigate"}} iconRight onPress={this.generateLuckyNumber} title="Right Icon Button" />
                </Card>

                <Card title="Icons">
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                        <Icon name="wine" size={50} />
                        <Icon name="navigate" size={50} />
                        <Icon name="home" size={50} />
                        <Icon name="print" size={50} />    
                    </View>
                    <Text h4>We use react-native-vector-icons to display icons, so view their guide to know more about what icons are supported.</Text>
                </Card>
                <Divider />
                <Divider />

                
            </ScrollView>
        )
    }
}

export default ComponentListScreen;