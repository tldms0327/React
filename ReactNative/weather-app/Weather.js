import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#43C6AC", "#191654"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Cloudy",
        subtitle: "구름 끼는 우중충한 날씨ㅠㅠ"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#141E30", "#243B55"]
    },
    Drizzle: {
        iconName: "weather-lightning-rainy",
        gradient: ["#948E99", "#2E1437"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#1A2980", "#26D0CE"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#2c3e50", "#bdc3c7"]
    },
}

// "Atmosphere",
// "Clear",

export default function Weather({temp,condition}) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°c</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
    
        </View>
    </LinearGradient>
);

}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 40,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 30
    },
    textcontainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

}
    
)