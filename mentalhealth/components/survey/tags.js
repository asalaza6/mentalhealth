import {Text, StyleSheet,TouchableOpacity,View,ScrollView} from 'react-native';
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//
const tagColor = "teal";
const selectedColor = "blue";
//these are extra feelings
const feelings = [
    {
        selected: false,
        desc:"yes"
    },
    {
        selected: false,
        desc:"awesome"
    },
    {
        selected: false,
        desc:"annoyed"
    },
    {
        selected: false,
        desc:"happy"
    },
    {
        selected: false,
        desc:"great"
    },
    {
        selected: false,
        desc:"amazing"
    },
    {
        selected: false,
        desc:"fun"
    },
    {
        selected: false,
        desc:"yay"
    },
]
//
export default class wheel extends Component{
    constructor(){
        super();
        this.state = {
            feelings: [
                {
                    selected: false,
                    desc:"sad"
                },
                {
                    selected: false,
                    desc:"groovy"
                },
                {
                    selected: false,
                    desc:"angry"
                },
                {
                    selected: false,
                    desc:"tense"
                },
                {
                    selected: false,
                    desc:"okay"
                },
                {
                    selected: false,
                    desc:"joyfulh"
                },
                {
                    selected: false,
                    desc:"relaxed"
                },
                {
                    selected: false,
                    desc:"full"
                },
            ]
        }   
        this.addNewTags = this.addNewTags.bind(this);
    }
    //add new tags from extra tags
    addNewTags(){
        for(let i = 0; i < (feelings.length>4?4:feelings.length);i++){
            //remove tag from feelings and add it to state
            let tag = feelings.pop();
            this.setState((prevState)=>({
                feelings: [...prevState.feelings,tag]
            }));
        }
    }
    
    render(){
        return(
            <ScrollView style = {styles.container}>
                <Text style = {styles.text}>Choose Tags that resonate with you.</Text>
                <View
                    style = {styles.containerTags}>
                    {
                    this.state.feelings.map((wedge, index)=>{
                        
                        return <TouchableOpacity
                        onPress={()=>{this.setState((prevState)=>({
                            feelings:prevState.feelings.map((el,prevIndex)=>index==prevIndex?{...el,selected: !el.selected}:el)
                        }));}}
                        key = {index}
                        style = {[styles.preview,{backgroundColor:wedge.selected?selectedColor:tagColor}]}
                        >
                            <Text style = {styles.description}>{wedge.desc}</Text>
                        </TouchableOpacity>
                        
                    })}
                </View>
                <TouchableOpacity
                    onPress = {()=>{this.setState({dropdownMenu:!this.state.dropdownMenu});this.addNewTags();}}
                    style = {styles.dropdownMenu}>
                    <Icon style = {{alignSelf:"center",margin:0}}name = "add-circle" size = {50} color = {"blue"} />
                </TouchableOpacity>
                
            </ScrollView>
        )
    }
}

const styles = new StyleSheet.create({
    dropdownMenu:{

    },    
    container:{
        width:"100%",
    },
    containerTags:{
        alignSelf:"center",
        width:"90%",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },
    text: {
        alignSelf:"center",
        fontSize:16,
        padding:10,
    },
    preview: {
        alignSelf:"center",
        padding:10,
        margin:2,
        height:40,
        borderRadius:100,
        justifyContent:"center",
        flexGrow: 1,
    },
    description:{
        textAlign:"center",
        color:"white",
        fontSize:20,
    }
});