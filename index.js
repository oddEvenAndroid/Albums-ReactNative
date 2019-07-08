import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//Import Header from header.js
const App = () =>(
  <Header />
);

AppRegistry.registerComponent('albums',()=> App);