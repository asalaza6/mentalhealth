import React,{Component} from 'react';

import {View,Text,Button,StyleSheet} from 'react-native';
import NavBar from '../components/navBar';

export default class homeScreen extends Component{
    //constructor component
    constructor(){
        super();
        this.state = {}
    }

    
    //render method
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Stats Screen Page</Text>
                <NavBar navigation = {this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        height:"100%",
        flexDirection: "column",
        justifyContent:"space-between"
    },
    text: {

    }
});