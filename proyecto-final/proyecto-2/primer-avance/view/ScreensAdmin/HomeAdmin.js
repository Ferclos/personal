import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function HomeAdmin(){
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.text}>Hola Home Admin</Text>
            {/* <TouchableOpacity 
            style={styles.buttonOp}
            onPress={() => navigation.navigate("StackScreen")}>
                <Text style={styles.textTouch}>Go to Stack Screen</Text>
            </TouchableOpacity>  */}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignItems: "center",
    },
    textTouch: {
        fontSize: 16,
        color: "white",
        alignItems: "center",
    },
    buttonOp: {
        backgroundColor: "purple",
        padding: 10,
        margin: 10
    },
})