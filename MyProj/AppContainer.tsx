
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screens
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
