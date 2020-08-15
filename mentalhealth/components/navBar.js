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
            plantButton:false
        }
    }
    componentDidMount(){
        console.log('mounting nav bar');
    }
    //render method
    render(){
        return(
            <View style = {styles.container}
                onPress = {() => {
                    
                }}
            >
                <View style = {styles.left}>
                    <TouchableOpacity
                        style = {styles.touchable}
                        onPress = {() => {
                            this.props.navigation.navigate('Home');
                        }}
                    >
                        <Icon name ="home-outline" size={30} color="#4F8EF7"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.touchable}
                        onPress = {() => {
                            this.props.navigation.navigate('Stats');
                        }}
                    >
                        <Icon name ="stats-chart-outline" size={30} color="#4F8EF7"/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.center}>
                    <TouchableOpacity
                        style = {this.state.plantButton?styles.greenCircle:styles.touchableCircle}
                        onPressIn = {() => {
                            this.setState({plantButton:true});
                        }}
                        onPressOut = {()=>{
                            this.setState({plantButton:false});
                        }}
                        onPress = {() => {
                            this.props.navigation.navigate('Garden');
                        }}
                    >
                        <Icon name ="leaf-outline" size={50} color="#4F8EF7"/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.right}>
                    <TouchableOpacity
                        style = {styles.touchable}
                        onPress = {() => {
                            this.props.navigation.navigate('Help');
                        }}
                    >
                        <Icon name ="medkit-outline" size={30} color="#4F8EF7"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.touchable}
                        onPress = {() => {
                            this.props.navigation.navigate('Profile');
                        }}
                    >
                        <Icon name ="settings-outline" size={30} color="#4F8EF7"/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        flexGrow:1,
    },
    greenCircle: {
        height:"100%",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center",
        aspectRatio:1,
        marginTop:33,
        backgroundColor: "green"
    },
    touchableCircle: {
        height:"100%",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center",
        aspectRatio:1,
        marginTop:33,
        backgroundColor:"white",
    },
    container: {
        width:"100%",
        zIndex:22,
        height:80,
        display: "flex",
        justifyContent: "space-between",
        alignItems:"flex-end",
        flexDirection: "row",
    },
    left: {
        
        flexGrow:1,
        
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height:"100%"
    },
    center: {
        height:"182%",
        
    },
    right: {
        flexGrow:1,
        
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height:"100%"
    },
    button: {
    },
    div:{
        flexGrow:1,
    }
});
