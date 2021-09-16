import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShopping from './src/screens/OnlineShopping';
import AddToCart from "./src/screens/AddToCart";
import PaymentSuccessful from "./src/screens/PaymentSuccessful";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Online" component = {OnlineShopping}/>
        <Stack.Screen name = "Cart" component = {AddToCart}/>
        <Stack.Screen name ="Payment" component = {PaymentSuccessful}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

