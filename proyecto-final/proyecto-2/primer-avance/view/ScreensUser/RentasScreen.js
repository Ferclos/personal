import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen(){
    return(
        <View>
            <Text style={styles.text}>Rentas lockers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignItems: "center",
    },
})