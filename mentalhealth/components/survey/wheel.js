import {Text, StyleSheet,TouchableOpacity,View} from 'react-native';
import React,{Component} from 'react';
import { cos, sin } from 'react-native-reanimated';
import { map } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
//
const radius = 100;
//
const wedges = [
    {
        color: "blue",
        desc:"sad"
    },
    {
        color: "purple",
        desc:"groovy"
    },
    {
        color: "red",
        desc:"angry"
    },
    {
        color: "orangered",
        desc:"tense"
    },
    {
        color: "orange",
        desc:"okay"
    },
    {
        color: "yellow",
        desc:"joyful"
    },
    {
        color: "yellowgreen",
        desc:"relaxed"
    },
    {
        color: "green",
        desc:"full"
    },
]
//
export default class wheel extends Component{
    constructor(){
        super();
        this.state = {
            touchdegree:0,
            degree: 3,
            current: wedges[0]
        }        
        this.updateDegree = this.updateDegree.bind(this);
        this.storeTouchStart = this.storeTouchStart.bind(this);
    }
    storeTouchStart(evt){
        this.setState({touchstart:evt.nativeEvent.pageX,touchdegree:this.state.degree});
    }
    updateDegree(evt){
        let newDegree = this.state.touchdegree + (evt.nativeEvent.pageX-this.state.touchstart)/50;
        newDegree = newDegree<0?newDegree+Math.PI*2:newDegree;
        let index = Math.floor(.5+newDegree/(2*Math.PI/wedges.length)+wedges.length/2)%wedges.length;
        
        this.setState({
            degree: newDegree,
            current: wedges[index]
        })
    }
    render(){
        const degree = 0;
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>I am feeling...</Text>
                <View
                style = {[styles.preview,{backgroundColor:this.state.current.color}]}
                >
                    <Text style = {styles.description}>{this.state.current.desc}</Text>
                </View>
                <Icon style = {{alignSelf:"center",margin:0}}name = "caret-down-sharp" size = {50} />
                <View
                onTouchStart = {(evt)=>{this.storeTouchStart(evt)}}
                onTouchMove = {(evt)=>{this.updateDegree(evt)}}
            
                style = {styles.containerWheel}>
                    {
                    wedges.map((wedge, index)=>{
                        
                        return <View style = {[styles.triangle,
                            {
                                transform: [
                                    {rotate:this.state.degree-(2*index*Math.PI/wedges.length)},
                                    {translateX:Math.sin(this.state.degree-(2*index*Math.PI/wedges.length))*(radius/2)},
                                    {translateY:Math.cos(this.state.degree-(2*index*Math.PI/wedges.length))*(radius/2)+(radius/2)}
                                ],
                                borderBottomColor: wedge.color
                                
                            }]}
                            key = {index}/>;
                    })}
                </View>
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    containerWheel:{
        width:2*radius,
        height:2*radius,
        borderRadius:radius,
        overflow:"hidden",
    },
    text: {
        alignSelf:"center",
        fontSize:16,
        padding:10,
    },
    triangle:{
        alignSelf:"center",
        position:"absolute",
        width: 0,
        height: 0,
        borderLeftWidth: Math.tan((Math.PI+.1)/wedges.length)*radius,
        borderRightWidth: Math.tan((Math.PI+.1)/wedges.length)*radius,
        borderBottomWidth: radius,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    preview: {
        alignSelf:"center",
        width:100,
        height:40,
        borderRadius:100,
        justifyContent:"center"
    },
    description:{
        textAlign:"center",
        color:"white",
        fontSize:20,
    }
});