import React,{Component} from 'react';

import {Button,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class SideScreen extends Component{
    
    //constructor component
    constructor(){
        super();
        /*click status
         0 = none, 1 home, 2 stats, 3 plant, 4 health, 5 settings*/
        this.state = {
            plantButton:false,
        }
    }
    //render method
    render(){
        return(
            <View style = {styles.container}
                onPress = {this.props.onPress}
            >
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        width:"100%",
        minHeight:400,
        display: "flex",
        flexDirection: "column",
        borderBottomWidth:1,
        borderColor:'black'
    },
});
