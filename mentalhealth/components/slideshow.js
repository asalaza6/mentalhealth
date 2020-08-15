import React,{Component} from 'react';
import {View,Image,Text,Button,StyleSheet, TouchableOpacity} from 'react-native';
import test from './images/download.jpg';
const images = [
    'https://reactjs.org/logo-og.png',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
    'https://homepages.cae.wisc.edu/~ece533/images/barbara.bmp',
    'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
    'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'
]
export default class SlideShow extends Component{
    //constructor component
    constructor(){
        super();
        this.state = {
            touchstart:null,
            touchchange:0,
            pos:0,
        }        
        this.updatePos = this.updatePos.bind(this);
        this.storeTouchStart = this.storeTouchStart.bind(this);
        this.endTouch = this.endTouch.bind(this);
    }
    storeTouchStart(evt){
        this.setState({touchstart:evt.nativeEvent.pageX});
        console.log("start");
    }
    updatePos(evt){
        //let newDegree = this.state.touchdegree + (evt.nativeEvent.pageX-this.state.touchstart)/50;
        //newDegree = newDegree<0?newDegree+Math.PI*2:newDegree;
        //let index = Math.floor(.5+newDegree/(2*Math.PI/wedges.length)+wedges.length/2)%wedges.length;
        this.setState({touchchange:(evt.nativeEvent.pageX-this.state.touchstart)});
    }
    endTouch(evt){
        if(this.state.touchchange < -30){
            console.log("left");
            this.setState({touchchange:-400,pos:this.state.pos==0?images.length-1:this.state.pos-1});
            setTimeout(()=>{
                
                this.setState({touchchange:0});
            },100)
        }else if(this.state.touchchange > 30){
            console.log("right");
            this.setState({touchchange:400,pos:this.state.pos==images.length-1?0:this.state.pos+1});
            setTimeout(()=>{
                
                this.setState({touchchange:0});
            },100)
        }else{
            this.setState({touchchange:0});
        }
    }
    render(){
        return(
            <View style = {styles.container}
                onTouchStart = {(evt)=>{this.storeTouchStart(evt)}}
                onTouchMove = {(evt)=>{this.updatePos(evt)}}
                onTouchEnd = {evt=>this.endTouch(evt)}>
                    
                <Image 
                    style = {[styles.image,{left:this.state.touchchange}]}
                    
                    source = {{uri:images[this.state.pos]}}></Image>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: "column",
        backgroundColor:"lightblue",
        alignItems:"center",
        width:"100%"
    },
    image: {
        width:250,
        height:250,
        margin:10,
        backgroundColor:"grey"
    }
});
