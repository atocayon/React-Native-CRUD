import React from 'react';
import {Text, View, Alert, TouchableOpacity} from 'react-native';
import {Body, Button, CardItem, Header, Icon, Input, Item, Label, Left, Picker, Right, Title} from 'native-base';
import firebase from 'react-native-firebase';

export default class Update extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            isLoading: true,
            name: '',
            address: '',
            contact: '',
            email: '',
            gender: undefined,
        };

    }

    componentDidMount() {
        const { navigation } = this.props;
        const ref = firebase.firestore().collection('userInfo').doc(JSON.parse(navigation.getParam('userInfoKey')));
        console.log(ref);
        ref.get().then((doc) => {
            if (doc.exists) {
                const userInfo = doc.data();
                this.setState({
                    key: doc.id,
                    name: userInfo.name,
                    address: userInfo.address,
                    contact: userInfo.contact,
                    email: userInfo.email,
                    gender: userInfo.gender,
                    isLoading: false,
                });
                console.log(userInfo);
            } else {
                console.log('No such Document!');
            }
        });
    }


    render() {
        return (
            <View>
                <Header style={{paddingTop: 10}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeRT')}
                                      style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="arrow-back" style={{color: '#fff'}}/>
                    </TouchableOpacity>


                    <Title>Update</Title>

                    <Right/>
                </Header>

                <View style={
                    {marginTop: 20}
                }>
                    <CardItem>
                        <Item floatingLabel>
                            <Label> Name </Label>
                            <Input value={this.state.name}
                                   onChangeText={
                                       name => {
                                           {
                                               console.log(`Name: ${name}`);
                                               this.setState({name: name});
                                           }
                                       }
                                   }
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item floatingLabel>
                            <Label> Address </Label>
                            <Input value={this.state.address}
                                   onChangeText={
                                       address => {
                                           {
                                               console.log(`Address: ${address}`);
                                               this.setState({address: address});
                                           }
                                       }
                                   }
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item floatingLabel>
                            <Label> Contact No. </Label>
                            <Input value={this.state.contact}
                                   onChangeText={
                                       contact => {
                                           {
                                               console.log(`Contact: ${contact}`);
                                               this.setState({contact: contact});
                                           }
                                       }
                                   }
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item floatingLabel>
                            <Label> Email </Label>
                            <Input value={this.state.email}
                                   onChangeText={
                                       email => {
                                           {
                                               console.log(`Email: ${email}`);
                                               this.setState({email: email});
                                           }
                                       }
                                   }
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item picker>
                            <Picker mode="dropdown"
                                    iosIcon={<Icon name="arrow-down"/>}
                                    style={
                                        {width: undefined}
                                    }
                                    placeholder="Gender"
                                    placeholderStyle={
                                        {color: '#bfc6ea'}
                                    }
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.gender}
                                    onValueChange={
                                        text => {
                                            console.log(`Gender: ${text}`);
                                            this.setState({gender: text});
                                        }
                                    }>
                                <Picker.Item label="Gender"
                                             value=""/>
                                <Picker.Item label="Male"
                                             value="Male"/>
                                <Picker.Item label="Female"
                                             value="Female"/>
                                <Picker.Item label="Others..."
                                             value="Others..."/>
                            </Picker>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Button style={
                            {
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }
                        }
                                onPress={this.create}>
                            <Text style={
                                {fontWeight: 'bold', color: 'white'}
                            }>
                                UPDATE
                            </Text>
                        </Button>
                    </CardItem>
                </View>

            </View>
        );
    }

}
