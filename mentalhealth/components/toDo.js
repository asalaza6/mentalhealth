import React,{Component} from 'react';

import {Button,View,Text,StyleSheet,TouchableOpacity,Modal, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Survey from './survey';
export default class Todo extends Component{
    //constructor component
    constructor(){
        super();
        /*click status
         0 = none, 1 home, 2 stats, 3 plant, 4 health, 5 settings*/
        this.state = {
            tasks: [
                {
                    iconName: "book-outline",
                    link: "Survey",
                    description: "survey",
                    finished: false,
                },
                {
                    iconName: "game-controller-outline",
                    description: "activity-game",
                    finished: false,
                },
                {
                    iconName: "cash-outline",
                    description: "activity2",
                    finished: true
                },
                {
                    iconName: "musical-notes",
                    link: 'Music',
                    description: "audio recording",
                    finished: true
                }
            ],
            modalVisible:false,
            currentTask:{}
        }
    }
    //render method
    render(){
        return(
            <View style = {styles.container}
                onPress = {this.props.onPress}
            >
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    visible = {this.state.modalVisible}
                    onRequestClose={()=>{
                        this.setState({modalVisible:false});
                    }}
                >
                    <View style = {styles.modal}>
                        <TouchableOpacity
                            onPress = {()=>{
                                this.setState({modalVisible:false,currentTask:{}});
                            }}
                            style = {styles.modalClose}
                        >
                            <Icon name = "close-outline" size = {50} color = "#e6adbc"/>
                        </TouchableOpacity>
                        <Icon name = {this.state.currentTask.iconName} size = {120} color = "#e6d8ad"/>
                        <Text style = {styles.modalText}>{this.state.currentTask.description}</Text>
                        <Text style = {styles.modalText}>{this.state.currentTask.finished?"It seems like you already completed this task. Would you like to do it again?":"Would you like to start this task?"}</Text>
                        <View style = {styles.modalButtons}>
                            <TouchableOpacity 
                                style = {styles.modalButton1}
                                onPress = {()=>{
                                    this.setState({modalVisible:false});
                                    this.props.navigation.navigate(this.state.currentTask.link);
                                }}>
                                    <Text style = {styles.centeredText}>Sure!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style = {styles.modalButton2}
                                onPress = {()=>{
                                    this.setState({modalVisible:false,currentTask:{}});
                                }}>
                                <Text style = {styles.centeredText}>No thanks.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </Modal>
                <Text style = {styles.title}>To-do List</Text>
                {this.state.tasks.map(task=>{
                    return  <TouchableOpacity style = {styles.task}
                                onPress = {()=>{
                                    this.setState({modalVisible:true,currentTask:task});
                                }}
                                key = {task.description}
                            >
                                <Icon name = {task.iconName} size={35} color="#4F8EF7"/>
                                <Text style = {styles.description}>{task.description}</Text>
                                <Icon name = {task.finished?"checkmark-outline":"close-outline"} size={25} color={task.finished?"#32CD32":"#8B0000"}/>
                            </TouchableOpacity>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        width:"100%",
        display: "flex",
        alignItems:"center",
        flexDirection: "column",
    },
    task: {
        flexDirection:"row",
        width:"100%",
        paddingLeft:5,
        padding:5,
        alignItems:"center",
        borderBottomColor:"#808080",
        borderBottomWidth:1,
    },
    description: {
        flexGrow:1,
        marginLeft:15,
        color:"black",
        fontSize:20,
    },
    taskStatus:{
        
    },
    title: {
        fontSize: 25,
        padding:30,
        color:"black",
    },
    modal: {
        backgroundColor:"white",
        height:"100%",
        flexDirection:"column",
        alignItems:"center"
    },
    modalClose:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    modalButtons:{
        flexDirection:"row",
        width:"60%",
        height:50,
        textAlign:"center"
    },
    modalButton1:{
        justifyContent:"center",
        flex:1,
        backgroundColor:"#add8e6"
        
    },modalButton2:{
        justifyContent:"center",
        flex:1,
        backgroundColor:"#e6adbc"

    },
    modalText:{
        textAlign:"center",
        margin:10,
        fontSize:20,
        padding:10,
    },
    centeredText:{
        textAlign:"center",
    }
});
