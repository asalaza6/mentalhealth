import React,{Component} from 'react';

import {View,Text,Button,StyleSheet,TouchableOpacity,Modal,TextInput, Alert} from 'react-native';
import NavBar from '../components/navBar';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView,  } from 'react-native-gesture-handler';
import {logout} from '../state/actions/loginA';
import {changePassword} from '../state/actions/userAction';

class profileScreen extends Component{
    //constructor component
    constructor(){
        super();
        this.state = {
            name:"",
            settingsModal: false,
            passwordSettings: false
        }
    }
    
    //render method
    render(){
        return(
            <View style = {styles.container}>
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    visible = {this.state.settingsModal}
                    onRequestClose={()=>{
                        this.setState({settingsModal:false,passwordSettings:false});
                    }}
                >
                    <View style = {styles.settingsModal}>
                        <TouchableOpacity
                            onPress = {()=>{
                                this.setState({settingsModal:false,passwordSettings:false});
                            }}
                            style = {styles.modalClose}
                        >
                            <Icon name = "close-outline" size = {50} color = "#e6adbc"/>
                        </TouchableOpacity>
                        {this.state.passwordSettings?
                                <View>
                                    <TextInput 
                                        style = {styles.textInput}
                                        placeholder = "New Password"
                                        onChangeText={text=>{this.setState({newPassword:text});}}
                                        secureTextEntry={true}/>
                                    <TextInput 
                                        style = {styles.textInput}
                                        placeholder = "Confirm new Password"
                                        onChangeText={text=>{this.setState({confirmPassword:text});}}
                                        secureTextEntry={true}/>
                                    <TextInput 
                                        style = {styles.textInput}
                                        placeholder = "Current Password"
                                        onChangeText={text=>{this.setState({currentPassword:text});}}
                                        secureTextEntry={true}/>
                                </View>
                            :
                            null
                        }
                        <TouchableOpacity 
                        onPress = {async()=>{
                            if(this.state.passwordSettings){
                                if(this.state.newPassword != this.state.confirmPassword || this.state.newPassword == null){
                                    Alert.alert('Passwords not matching');
                                }else{
                                    let user = {
                                        email: this.props.email,
                                        currentPassword: this.state.currentPassword,
                                        newPassword: this.state.newPassword
                                    }
                                    console.log(user);
                                    let res = await this.props.changePassword(user,this.props.token);
                                    if(res == 401){
                                        Alert.alert('Incorrect Password');
                                    }else if(res == 200){
                                        Alert.alert('Password Successfully Changed');
                                        this.setState({passwordSettings:false});
                                    }else{
                                        console.log(res);
                                    }
                                }
                            }else{
                                this.setState({passwordSettings:true});   
                            }
                        }}
                        style = {styles.button}><Text style = {styles.buttonText}>Change Password</Text>
                    </TouchableOpacity>
                    </View>
                    
                </Modal>
                <ScrollView style = {styles.scroll}>
                    <Text style = {styles.title}></Text>
                    <View style = {styles.icon}><Icon name = "person-circle-outline" size={70} color="#4F8EF7"/></View>
                    <Text style = {styles.name}>{this.props.username}</Text>
                    <Text style = {styles.name}>{this.props.email}</Text>
                    <TouchableOpacity 
                        onPress = {()=>{this.setState({settingsModal:true})}}
                        style = {styles.button}><Text style = {styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress={()=>{this.props.logout();this.props.navigation.navigate('Login')}}><Text style = {styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
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
    settingsModal:{
        backgroundColor:"white",
        height:"100%",
        flexDirection:"column",
        backgroundColor:"lightblue"
    },
    modalClose:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    name: {
        fontSize:30,
        alignSelf:"center"
    },
    scroll: {
        padding:10,
        paddingTop:40,
        marginBottom:50,
    },
    icon:{
        alignSelf:"center"
    },
    button:{
        margin:5,
        width:"100%",
        alignSelf: "center",
        textAlign:"center",
        justifyContent:"center",
        padding:10,
        borderRadius:15,
        backgroundColor:"white"
    },
    buttonText:{
        fontSize:20,
        alignSelf:"center"
    }

});

const mapStateToProps = state =>({
    username: state.user.user.user_name,
    email: state.user.user.user_email,
    token: state.login.token
});

export default connect(mapStateToProps,{logout,changePassword})(profileScreen);