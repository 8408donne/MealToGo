import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

// const TAB_ICON = {
//   Restaurants: "restaurant",
//   Map: "map",
//   Settings: "settings",
//};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

//const createScreenOptions = ({ route }) => {
  //const iconName = TAB_ICON[route.name];
  //return {
    //tabBarIcon: ({ size, color }) => (
      //<Ionicons name={iconName} size={size} color={color} />
    //),
  //};
//};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} 
        options={{
        tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="restaurant" size={size} color={color} />)}}/>
      
      <Tab.Screen name="Map" component={MapScreen}
      options={{
        tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="map" size={size} color={color} />)}}/>
      
      <Tab.Screen name="Settings" component={Settings}
      options={{
        tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="settings" size={size} color={color} />)}}/>
    </Tab.Navigator>
  </NavigationContainer>
);