import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen(){
    return(
        <View>
            <Text style={styles.text}>Hola ProfileScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignItems: "center",
    },
})