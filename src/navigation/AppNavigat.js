import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BienvenuNavigat from './BienvenuNavigat';

const Stack = createNativeStackNavigator();

const AppNavigat = () => {
    return (
        <NavigationContainer>
            <BienvenuNavigat/>
        </NavigationContainer>
      );
}

export default AppNavigat

