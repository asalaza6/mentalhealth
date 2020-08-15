import React,{Component} from 'react';

import {Button,View,Text,StyleSheet, ScrollView} from 'react-native';
import NavBar from '../components/navBar';
import ToDo from '../components/toDo'; 
import BarSlide from '../components/barSlide';
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
                <ScrollView
                    style = {styles.scrollView}
                >
                        <ToDo navigation = {this.props.navigation}/>
                        
                </ScrollView>
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
        justifyContent:"space-between",
        backgroundColor:"lightblue"
        
    },
    scrollView: {
        marginBottom:80,
    },
    //text
    text: {
        fontFamily:'sans-serif',
    },
    title: {
        fontFamily:'sans-serif',
    }
});