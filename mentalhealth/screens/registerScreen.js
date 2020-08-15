import React, { Fragment, useState, useEffect } from "react";
import {StyleSheet,TouchableOpacity,Text, Alert,TextInput,View,Button, AsyncStorage} from 'react-native';
import {useForm} from 'react-hook-form';
import { NavigationEvents } from "react-navigation";
import config from '../config';
//import {toast} from 'react-toastify';

const Register = ({setAuth,navigation})=>{
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [name,setName] = useState("");
    

    const onSubmit = async ({setAuth}) =>{
        try{
            const body = {email:email,password:password,name:name};
            
            const response = await fetch(`http://${config.api.url}:${config.api.port}/auth/register`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(`http://${config.api.url}:${config.api.port}/auth/register`);
            const parseRes = await response.json();
            if(parseRes.token){
                //AsyncAsyncStorage.setItem("token", parseRes.token);

                
                //AsyncStorage.setItem("auth", "true");
                Alert.alert("register successful");
                navigation.navigate('Home');
            }else{
                Alert.alert(parseRes);
            }
                    
        }catch(err){
            Alert.alert(err.message);
            console.error(err.message);
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Register</Text>
            <TextInput 
                style = {styles.textInput}
                placeholder = "Name"
                onChangeText={text=>{
                setName(text);}}
                autoCompleteType="name"
                textContentType="name"/>
            <TextInput 
                style = {styles.textInput}
                placeholder = "Email"
                onChangeText={text=>{
                setEmail(text);}}
                autoCompleteType="email"
                textContentType="username"/>
            <TextInput 
                style = {styles.textInput}
                placeholder = "Password"
                onChangeText={text=>{
                setPass(text);
            }}
            secureTextEntry={true}
            autoCompleteType="password"
            textContentType="password"/>

            <View>
                <Button
                    style = {styles.button}
                    title="Submit"
                    color="black"
                    onPress={onSubmit}/>
            </View>
            <TouchableOpacity 
                onPress = {()=>{
                    navigation.navigate('Login');
                }}
                style = {styles.register}>
                    <View>
                <Text>Already Have an Account? Log in</Text></View>
            </TouchableOpacity>
        </View>
    )
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
export default Register;