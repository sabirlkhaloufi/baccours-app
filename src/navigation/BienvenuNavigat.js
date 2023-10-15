import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcom1 from "../screens/Bienvenu/Welcom1";
import Welcom2 from "../screens/Bienvenu/Welcom2";
import HomeNavigat from "./HomeNavigat";

const Stack = createNativeStackNavigator();
const BienvenuNavigat = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcom1" component={Welcom1} />
      <Stack.Screen name="Welcom2" component={Welcom2} />
      <Stack.Screen name="Home" component={HomeNavigat} />
    </Stack.Navigator>
  );
};

export default BienvenuNavigat;
