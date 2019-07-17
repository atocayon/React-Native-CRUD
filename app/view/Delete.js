import React from 'react';

import {Alert, Text, View, TouchableOpacity} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';


export default class Delete extends React.Component {
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


                    <Title>Delete</Title>

                    <Right/>
                </Header>
            </View>
        );
    }
}
