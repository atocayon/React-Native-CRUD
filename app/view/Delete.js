import React from 'react';

import {Alert, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title, Grid, Col, Row, Card} from 'native-base';
import firebase from 'react-native-firebase';

export default class Delete extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userInfo: {},
            key: '',
        };
    }

    componentDidMount() {
        const {navigation} = this.props;
        const ref = firebase.firestore().collection('userInfo').doc(JSON.parse(navigation.getParam('userInfoKey')));
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    userInfo: doc.data(),
                    key: doc.id,
                    isLoading: false,
                });
            } else {
                console.log('Database is Empty...');
            }

        });
    }

    delete = (key) => {
        const {navigation} = this.props;
        this.setState({
            isLoading: true,
        });
        firebase.firestore().collection('userInfo').doc(key).delete().then(() => {
            console.log('Data successfully deleted!!!');
            this.setState({
                isLoading: false,
            });
            this.props.navigation.navigate('ReadRT');
        }).catch((error) => {
            console.log('Error Deleting the data....', error);
            this.setState({
                isLoading: false,
            });
        });
    };

    render() {

        return (
            <ScrollView>
                <Header style={{paddingTop: 10}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeRT')}
                                      style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="arrow-back" style={{color: '#fff'}}/>
                    </TouchableOpacity>
                    <Title>Delete</Title>
                    <Right/>
                </Header>
                <Card style={{marginTop: 30, paddingTop: 20, paddingBottom: 20, marginRight: 20, marginLeft: 20}}>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <View>
                            <Text style={{fontSize: 20}}>Are you sure you want to delete {this.state.userInfo.name}?</Text>
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                                <Button danger onPress={() => this.delete(this.state.key)} style={{padding: 10}}>
                                    <Text style={{color: '#fff'}}>Confirm</Text>
                                </Button>
                            </View>

                        </View>


                    </View>

                </Card>
            </ScrollView>
        );
    }
}
