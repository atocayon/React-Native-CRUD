import React from 'react';
import {Text, View, Alert, TouchableOpacity} from 'react-native';
import {Body, Button, CardItem, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';


export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {
            drop: false,
        };
    }

    _handleClick(e) {
        e.preventDefault();
        this.setState({
            drop: !this.state.drop,
        });
    }

    renderDropdown() {

        return (
            <Container>
                <Content>
                    <CardItem bordered style={{backgroundColor: '#666666'}}><Text onPress={() => {
                        console.log('Create Selected');
                        this.props.navigation.navigate('CreateRT');
                    }} style={{fontSize: 20, color: '#fff'}}>Create</Text></CardItem>
                    <CardItem bordered style={{backgroundColor: '#666666'}}><Text onPress={() => {
                        console.log('Read Selected');
                        this.props.navigation.navigate('ReadRT');
                    }} style={{fontSize: 20, color: '#fff'}}>Read</Text></CardItem>
                    {/*<CardItem bordered style={{backgroundColor: '#666666'}}><Text onPress={() => {*/}
                    {/*    console.log('Update Selected');*/}
                    {/*    this.props.navigation.navigate('UpdateRT');*/}
                    {/*}} style={{fontSize: 20, color: '#fff'}}>Update</Text></CardItem>*/}
                    <CardItem bordered style={{backgroundColor: '#666666'}}><Text onPress={() => {
                        console.log('Delete Selected');
                        this.props.navigation.navigate('DeleteRT');
                    }} style={{fontSize: 20,color: '#fff'}}>Delete</Text></CardItem>
                </Content>
            </Container>
        );
    }

    render() {

        return (
            <View>
                <Header style={{paddingTop: 10}}>

                    <TouchableOpacity onPress={(e) => this._handleClick(e)} style={{paddingLeft: 10, paddingRight: 20}}>
                        <Icon name="menu" style={{color: '#fff'}}/>
                    </TouchableOpacity>

                    <Title>React-Native CRUD</Title>
                    <Right/>
                </Header>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: 200,
                    height: 150,
                }}>

                    {this.state.drop ? this.renderDropdown() : null}
                </View>
            </View>
        );
    }

}
