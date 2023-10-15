import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BienvenuNavigat from './BienvenuNavigat';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

const AppNavigat = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <BienvenuNavigat/>
        </NavigationContainer>
      );
}

export default AppNavigat

