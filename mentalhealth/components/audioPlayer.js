import React,{Component} from 'react';



import {View,Text,Button,StyleSheet, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

import Icon from 'react-native-vector-icons/Ionicons';

export default class AudioPlayer extends Component{
    //constructor component
    constructor(){
        super();
        this.state = {playing:false,currentTime:0,duration:null}
        SoundPlayer.loadSoundFile('mp3file','mp3');
        this.togglePlay = this.togglePlay.bind(this);
        this.skip = this.skip.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
        this.getProgressWidth = this.getProgressWidth.bind(this);
        this.finishedListener = null;
        this.progressInterval = null;
        this.currentTime = 0;
        this.progressInterval = setInterval(this.updateProgress,1000);
    }

    async componentDidMount(){
        console.log("moutning")
        this.setState({duration:Math.floor(parseFloat((await SoundPlayer.getInfo()).duration))});
        this.finishedListener = SoundPlayer.addEventListener('FinishedPlaying',(evt)=>{this.setState({playing:false,currentTime:0});SoundPlayer.seek(0);});
    }

    componentWillUnmount(){
        this.finishedListener.remove();
    }
    async skip(direction){
        let currentTime = (await SoundPlayer.getInfo()).currentTime;
        console.log(currentTime,this.state.duration);
        let skipTime = 5;
        let newTime = null;

        if(direction == 1){
            let newTime = currentTime+skipTime;
            
            console.log(newTime);
            if(newTime<this.state.duration){
                this.setState({currentTime:Math.floor(newTime)})
                SoundPlayer.seek(newTime);
            }
        }else{
            newTime = (currentTime-skipTime)>0?(currentTime-skipTime):0;
            this.setState({currentTime:Math.floor(newTime)})
            SoundPlayer.seek(newTime);

        }
    }
    updateProgress(){
        if(this.state.playing){
            if(this.state.currentTime+1 <= this.state.duration){
                this.setState({currentTime:this.state.currentTime+1});
            }
        }
    }
    getProgressWidth(){
        if(this.state.duration==null)return;
        
        let width = this.state.currentTime/this.state.duration;
        let percent = parseFloat(Math.floor(width*100))+"%";
        
        console.log(percent);
        return percent;
    }
    async togglePlay(){
        
        let currentTime = (await SoundPlayer.getInfo()).currentTime;
        if(this.state.playing){
            try {
                SoundPlayer.pause();
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        }else{
            try {
                SoundPlayer.play();
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        }
        this.setState({playing:!this.state.playing,currentTime:Math.floor(currentTime)});
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.image}></View>
                <View style = {styles.progressBar}>
                    <View style = {[styles.progressBarLit,{width:this.getProgressWidth()}]}></View>
                    <View style = {[styles.progressBarOff]}></View>
                </View>
                <View style = {styles.progressTime}>
                    <Text>{this.state.currentTime}</Text>
                    <Text>{this.state.duration}</Text>
                </View>
                <View style = {styles.controlContainer}>
                    <TouchableOpacity
                        onPress={()=>{this.skip(-1)}}>
                        <Icon name = "play-skip-back" size = {50} color = "black"></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{this.togglePlay()}}>
                        <Icon name = {this.state.playing?"pause":"play"} size = {50} color = "black"></Icon>
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{this.skip(1)}}>
                        <Icon name = "play-skip-forward" size = {50} color = "black"></Icon>
                    </TouchableOpacity>
                </View>
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
        width:"80%",
    },
    progressBar:{
        width:"100%",
        height:5,
        display:"flex",
        flexDirection:"row"
    },
    progressBarLit:{
        height:"100%",
        backgroundColor:"white"
    },
    progressBarOff:{
        height:"100%",
        backgroundColor:"black",
        flexGrow:1,
    },
    progressTime:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between"
    },
    image: {
        width:"100%",
        margin:10,
        backgroundColor:"grey"
    },
    controlContainer:{
        display:"flex",
        flexDirection:"row",
    }
});
