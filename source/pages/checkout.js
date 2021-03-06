import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, List, ListItem, Left,Title, Right, Body, Icon, Separator, Item, Form, Label, Radio, Button } from 'native-base';
import { CreditCardInput, LitecreditCardInput} from "react-native-credit-card-input";
import { Input } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
const { width: WIDTH } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold: 'Helvetica-Bold'
};

export default class Checkout extends Component {
    render() {
        _onChange => form => console.log(form);
        return (
            <Container>
                <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
                <Header style={{ backgroundColor: '#85414d' }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" type="MaterialIcons" style={{ color: "white" }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 25 }}>Checkout</Title>
                    </Body>
                    
                </Header>
                <ScrollView>
                    <List>
                        <Separator bordered>
                            <Text>LOCATION *required filed</Text>
                        </Separator>
                    </List>
                    <Form>
                        <Item stackedLabel>
                            <Label style={{ fontSize: 20, color:"black" }}>Area *</Label>
                            <Input placeholder='e.g.Business Bay' placeholderTextColor="grey"></Input>
                        </Item>
                        <Item stackedLabel>
                            <Label style={{ fontSize: 20, color:"black" }}>Delivery Address *</Label>
                            <Input placeholder='e.g.Building name/Street' placeholderTextColor="grey"></Input>
                        </Item>
                        <Item stackedLabel>
                            <Label style={{ fontSize: 20, color:"black" }}>Apartment# / Villa#</Label>
                            <Input placeholder='e.g.Apartment 2101' placeholderTextColor="grey"></Input>
                        </Item>
                    </Form>
                    <List>
                        <Separator bordered>
                            <Text>HOW CAN WE CONTACT YOU</Text>
                        </Separator>
                    </List>
                    <View >
                        <Input placeholder='First Name' placeholderTextColor="grey"></Input>
                        <Input placeholder='Last Name' placeholderTextColor="grey"></Input>   
                        <Input placeholder='Email*' placeholderTextColor="grey"></Input>
                        <Input placeholder='Phone Number*' placeholderTextColor="grey"></Input>
                        
                    </View>
                    <List>
                        <Separator bordered>
                            <Text>ADD CARD</Text>
                        </Separator>
                        <CreditCardInput onchange={this._onChange} />
                        
                        <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button block success style={{ width: '95%', backgroundColor: "#85414d" }} onPress={()=>this.props.navigation.navigate("Checkout")}>
                                <Text style={{ color: 'white', fontSize: moderateScale(14) }}>PAY AND CONTINUE</Text>
                            </Button>
                        </ListItem>
                    </List>


                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item_style: {
        width: '100%'
    }
});