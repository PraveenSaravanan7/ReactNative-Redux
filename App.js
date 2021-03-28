import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {configureFonts, DefaultTheme as PaperTheme,  Provider as PaperProvider} from 'react-native-paper';
import { useFonts } from 'expo-font';
import {loginPage} from './screens/loginPage';
import {homePage} from './screens/homePage';
import { useState } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function App() {

const Stack = createStackNavigator();
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};


const theme = {
  ...PaperTheme,
  roundness: 8,
  colors: {
    ...PaperTheme.colors,
    primary: '#ff124d',
    accent: '#f1c40f',
  },
};


const store = createStore(rootReducer, applyMiddleware(thunk));


  return (
    <Provider store={store}>
    <PaperProvider theme={theme} >
  <NavigationContainer theme ={NavigationTheme}>
    <Stack.Navigator initialRouteName="homePage" screenOptions={{headerShown:false}}>
    
      <Stack.Screen name="loginPage" component={loginPage} />
      <Stack.Screen name="homePage" component={homePage} />
      {/* <Stack.Screen name="screen_two" component={screen_two} />
      <Stack.Screen name="screen_three" component={screen_three} />
      <Stack.Screen name="screen_four" component={screen_four} /> */}

    </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
    </Provider>
  );
}

