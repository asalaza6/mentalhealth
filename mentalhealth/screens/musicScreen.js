import React,{Component} from 'react';

import {View,Text,Button,StyleSheet, TouchableOpacity} from 'react-native';
import NavBar from '../components/navBar';
import AudioPlayer from '../components/audioPlayer';
import SlideShow from '../components/slideshow';
class musicScreen extends Component{
    //constructor component
    constructor(){
        super();
    }
    //render method
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>music Screen Page</Text>
                <SlideShow/>
                <AudioPlayer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        height:"100%",
        flexDirection: "column",
        backgroundColor:"lightblue",
        alignItems:"center"
    },
    controlContainer:{
        display:"flex",
        flexDirection:"row",
    }
});

export default musicScreen;