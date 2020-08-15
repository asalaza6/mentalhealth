import React,{Component} from 'react';

import {Button,View,Text,StyleSheet, ScrollView} from 'react-native';
import NavBar from '../components/navBar';
import ToDo from '../components/toDo'; 
import BarSlide from '../components/barSlide';
export default class splashScreen extends Component{
    //constructor component
    constructor(){
        super();
        this.authenticateSession();
    }
    authenticateSession(){
        
    }
    //in this function check if they have logged in or not
    //once redux has been integrated
    //if login already detected navigate to home
    //otherwise navigate to the login screen
    componentDidMount(){
        //temporary time out to show splash screen
        setTimeout(
            ()=>{
                
        this.props.navigation.replace('Login');
            },
            500
        )
    }
    //render method
    render(){
        return(
            <View style = {styles.container}>
                <Text>Splash Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        width:"100%",
        height:"100%",
        backgroundColor:"lightblue",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
});