import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bienvenu1 from '../screens/Bienvenu/Bienvenu1';


const Stack = createNativeStackNavigator();

const BienvenuNavigat = () => {
    return (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Bienvenu1" component={Bienvenu1} />
          </Stack.Navigator>
      );
}

export default BienvenuNavigat

