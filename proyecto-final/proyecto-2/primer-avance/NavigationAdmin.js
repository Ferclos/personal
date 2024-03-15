import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SolicitanteScreen from './view/ScreensAdmin/SolicitanteScreen';
import EditarUsuarioScreen from './view/ScreensAdmin/EditarUsuarioScreen';
import AgregarAdminScreen from './view/ScreensAdmin/AgregarAdminScreen';
import AgregarLockersScreen from './view/ScreensAdmin/AgregarLockersScreen';
import StackScreen from "./view/ScreensAdmin/StackScreen";
import HomeAdmin from "./view/ScreensAdmin/HomeAdmin";
import EditarPrecioScreen from "./view/ScreensAdmin/EditarPrecioScreen";
import HistorialPagoScreen from "./view/ScreensAdmin/HistorialPagoScreen";
import HistorialReservasScreen from "./view/ScreensAdmin/HistorialReservasScreen";
import HistorialRentasScreen from "./view/ScreensAdmin/HistorialRentasScreen";
import AgregarUbicacionScreen from "./view/ScreensAdmin/AgregarUbicacionScreen";
 
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        
            <Stack.Screen name="StackScreen" component={StackScreen}/> 
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { height: 50 }, // Ajusta la altura del tab bar
                labelStyle: { fontSize: 12 }, // Ajusta el tamaño del texto
                tabStyle: { width: 'auto' }, // Ajusta el ancho de cada tab
            }}
        >
            <Tab.Screen name='HomeAdmin' component={HomeAdmin} />
            <Tab.Screen name="Solicitantes" component={SolicitanteScreen}/>
            <Tab.Screen name="Editar usuario" component={EditarUsuarioScreen}/>
            <Tab.Screen name="Agregar administrador" component={AgregarAdminScreen}/>
            <Tab.Screen name="Agregar Lockers" component={AgregarLockersScreen}/>
            <Tab.Screen name="Editar precio" component={EditarPrecioScreen}/>
            <Tab.Screen name="Historial Reservas" component={HistorialReservasScreen}/>
            <Tab.Screen name="Historial Rentas" component={HistorialRentasScreen}/>
            <Tab.Screen name="Historial Pagos" component={HistorialPagoScreen}/>
            <Tab.Screen name="Agregar Ubicacion" component={AgregarUbicacionScreen}/>
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeAdmin" component={MyTabs} />
            <Drawer.Screen name="Solicitantes" component={SolicitanteScreen} />
            <Drawer.Screen name="Editar usuario" component={EditarUsuarioScreen} />
            <Drawer.Screen name="Agregar administrador" component={AgregarAdminScreen} />
            <Drawer.Screen name="Agregar Lockers" component={AgregarLockersScreen} />
            <Drawer.Screen name="Editar precio" component={EditarPrecioScreen} />
            <Drawer.Screen name="Historial Reservas" component={HistorialReservasScreen} />
            <Drawer.Screen name="Historial Rentas" component={HistorialRentasScreen} />
            <Drawer.Screen name="Historial Pagos" component={HistorialPagoScreen} />
            <Drawer.Screen name="Agregar Ubicacion" component={AgregarUbicacionScreen} />
        </Drawer.Navigator>
    );
}

export default function NavigationAdmin() {
    return (
        <NavigationContainer>
            <DrawerGroup />
        </NavigationContainer>
    );
}
