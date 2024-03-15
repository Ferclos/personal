import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import StackScreen from "./screens/StackScreen";

const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="StackScreen" component={StackScreen}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name='Home' component={MyStack} />
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}