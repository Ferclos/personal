import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StackScreen(){
    return(
        <View>
            <Text style={styles.text}>Hola Home StackScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignItems: "center",
    },
})