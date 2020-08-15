import React, { Fragment, useState, useEffect, Component } from "react";
import {Text, TouchableOpacity, Alert,TextInput,View,Button,AsyncStorage, StyleSheet} from 'react-native';
import config, { DEVELOPMENT2 } from '../config';
import {connect} from 'react-redux';
import {login} from '../state/actions/loginA';
import {getUser} from '../state/actions/userAction';
//import {toast} from 'react-toastify';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.devLogin = this.devLogin.bind(this);
    }
    
    async onSubmit(){
        await this.props.login(this.state.email,this.state.password);
        if(this.props.loggedIn){
            await this.props.getUser(this.props.token);
            this.props.navigation.navigate('Home');
        }else{
            //Alert.alert('Password or Email Incorrect');
        }
    }
    async devLogin(){
        await this.setState({email:"test@gmail.com",password:"asdf"});
        this.onSubmit();
    }
    componentDidMount(){

        if(DEVELOPMENT2){
            this.devLogin();
        }
    }
    render(){
        return (
            <View style = {styles.container}>
                
                <Text style = {styles.title}>Login</Text>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Email"
                    onChangeText={text=>{
                    this.setState({email:text});}}
                    autoCompleteType="email"
                    textContentType="username"/>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Password"
                    onChangeText={text=>{
                        this.setState({password:text});
                }}
                secureTextEntry={true}
                autoCompleteType="password"
                textContentType="password"/>
    
                <View>
                    <Button
                        style = {styles.button}
                        title="Submit"
                        color="black"
                        onPress={this.onSubmit}/>
                </View>
                <TouchableOpacity 
                    onPress = {()=>{
                        this.props.navigation.navigate('Register');
                    }}
                    style = {styles.register}>
                        <View>
                    <Text>Don't Have an Account? Sign up</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        backgroundColor:"lightblue",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:"12%"
    },
    text: {
        marginBottom:80,
    },
    //text
    textInput: {
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        borderRadius:10,
        padding:10,
        margin:10,
    },
    title: {
        fontSize:35,
        margin:70,
    },
    register:{
        fontWeight:"600",
        marginTop:40,
    }
});

const mapStateToProps = state =>({
    loggedIn: state.login.loggedIn,
    token: state.login.token
});

export default connect(mapStateToProps,{login,getUser})(Login);