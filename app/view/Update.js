import React from 'react';
import {Text, View, Alert, TouchableOpacity} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';


export default class Update extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Header style={{paddingTop: 10}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeRT')} style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="arrow-back" style={{color: '#fff'}}/>
                    </TouchableOpacity>


                    <Title>Update</Title>

                    <Right/>
                </Header>
            </View>
        );
    }

}
