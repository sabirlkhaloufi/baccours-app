import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigat = () => {
    return (
        
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        
      );
}

export default HomeNavigat

