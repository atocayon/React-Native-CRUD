import React from 'react';
import {Text, View, Alert, ScrollView, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title, Grid, Col, Row, Card, CardItem} from 'native-base';
import firebase from 'react-native-firebase';

export default class Read extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.fetchData = firebase.firestore().collection('userInfo');
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            userInfo: [],
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const userInfo = [];
        querySnapshot.forEach((doc) => {
            const {name, address, contact, email, gender} = doc.data();
            userInfo.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name,
                address,
                contact,
                email,
                gender,
            });
        });
        this.setState({
            userInfo: userInfo.sort((a,b)=>{
                return (a.name > b.name);
            }),
            isLoading: false,
        });
    };

    componentDidMount() {
        this.unsubscribe = this.fetchData.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
            <ScrollView>
                <Header style={{paddingTop: 10}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeRT')}
                                      style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="arrow-back" style={{color: '#fff'}}/>
                    </TouchableOpacity>
                    <Title>Read</Title>
                    <Right/>
                </Header>
                <FlatList
                    data={this.state.userInfo}
                    renderItem={({item, index}) => {
                        return (

                            <CardItem bordered style={{padding: 20}}>
                                <Text>Name: {item.name} {'\n'}Address: {item.address}{'\n'}Contact
                                    No: {item.contact}{'\n'}Email: {item.email}{'\n'}Gender: {item.gender}</Text>
                            </CardItem>


                        );
                    }}
                    // keyExtractor={(item,index) => item.name}
                >

                </FlatList>
            </ScrollView>

        );
    }

}
