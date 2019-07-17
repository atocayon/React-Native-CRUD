import React from 'react';
import {Alert, Text, View, TouchableOpacity} from 'react-native';
import {
    Body,
    Button,
    Header,
    Icon,
    Left,
    Right,
    Title,
    Form,
    Item,
    Input,
    Label,
    Card,
    CardItem,
    Picker,
    Grid,
    Col,
    Row,
} from 'native-base';
import firebase from 'react-native-firebase';

export default class Create extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            contact: '',
            email: '',
            gender: undefined,
            loading: false,
        };

        this.userInfo = firebase.firestore().collection('userInfo');
    }

    create = () => {
        if (
            (this.state.name.trim() === '' ||
            this.state.address.trim() === '' ||
            this.state.contact.trim() === '' ||
            this.state.email.trim() === '',
            this.state.gender.trim() === '')
        ) {
            alert('All Field is Required');
            return;
        }
        this.userInfo
            .add({
                name: this.state.name,
                address: this.state.address,
                contact: this.state.contact,
                email: this.state.email,
                gender: this.state.gender,
            })
            .then(() => {
                console.log('Data Inserted Successfully!!!');
                this.setState({
                    name: '',
                    address: '',
                    contact: '',
                    email: '',
                    gender: undefined,
                    loading: true,
                });

            })
            .catch(() => {
                console.log('Data Insertion Error!!!');
                this.setState({
                    name: '',
                    address: '',
                    contact: '',
                    email: '',
                    gender: undefined,
                    loading: true,
                });
            });
    };

    render() {
        return (
            <View>
                <Header style={
                    {paddingTop: 10}
                }>

                    <TouchableOpacity onPress={
                        () => this.props.navigation.navigate('HomeRT')
                    } style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="arrow-back" style={{color: '#fff'}}/>
                    </TouchableOpacity>


                    <Title> Create </Title>

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
                                SUBMIT
                            </Text>
                        </Button>
                    </CardItem>
                </View>
            </View>
        );
    }
}
