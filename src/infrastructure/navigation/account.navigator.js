import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../../features/account/screens/main.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();


export const AccountNavigator = () => (
    <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)