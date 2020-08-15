import 'react-native-gesture-handler';
//navigation
import {createDrawerNavigator} from 'react-navigation-drawer';
import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
//screens
import Profile from './screens/profileScreen';
import Garden from './screens/gardenScreen';
import Home from './screens/homeScreen';
import Stats from './screens/statsScreen';
import Help from './screens/helpScreen';
import Login from './screens/loginScreen';
import Register from './screens/registerScreen';
import Splash from './screens/splashScreen';
import Survey from './screens/surveyScreen';
import Music from './screens/musicScreen';
//state
import {Provider} from 'react-redux';
import store from './store';


const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Splash: {
      screen: Splash,
    },
    Profile: {
      screen: Profile,
    },
    Garden: {
      screen: Garden,
    },
    Stats: {
      screen: Stats,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen:Register,
    },
    Help: {
      screen: Help,
    },
    Survey: {
      screen: Survey,
    },
    
    Music: {
      screen: Music,
    },
    
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}