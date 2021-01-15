import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>날씨를 알아보쟈!</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 150, 
        backgroundColor: "#FDF6AA"
    },
    text: {
        fontSize: 40 //px를 쓸때는 "40px"
    }

});
