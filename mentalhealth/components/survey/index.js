import React,{Component} from 'react';

import {Button,View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import NavBar from '../navBar';
import Tags from './tags';
import Dial from './dial';
import BarSlide from '../barSlide';

import Wheel from './wheel.js'
export default class Survey extends Component{
    //constructor component
    constructor(){
        super();
        this.state = {
            itinerary: [
                "wheel",
                "tags",
                "dial",
                "questionaire"
            ],
            current:0,
            answers:{

            }
        }
    }
    renderSwitch(){
        switch(this.state.itinerary[this.state.current]){
            case "welcome":
                return (
                    <Text>Welcome to the Survey</Text>
                );
            case "wheel": 
                return (
                    <Wheel></Wheel>
                );
            case "tags": 
                return (
                    <Tags></Tags>
                );
            case "dial":
                return (
                    <Dial></Dial>
                );
            case "questionaire": 
                return (
                    <Text>Welcome to the Questions</Text>
                );
            default:
                return (
                    <Dial></Dial>
                );
        }
    }

    //render method
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Survey</Text>
                {this.renderSwitch()}
                <Button
                title = "next"
                onPress = {()=>{
                    this.setState({current:this.state.current+1})
                }}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        height:"100%",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        height:"100%",
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
        fontSize:35,
    },
});