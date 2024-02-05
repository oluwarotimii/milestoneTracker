import React from "react";
import {Text, View, StyleSheet, Image } from "react-native";

const BabyProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}> Baby Name</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image />
                <Text style={styles.date}> Born of DD/MM/YY</Text>
                <Text style={styles.weight}> Weight at Birth </Text>
                <Text style={styles.gender}> Gender</Text>
                <Text style={styles.time}> Time of Birth</Text>
                <Text style={styles.place}>Place of Birth</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{},
    header:{},
    headerTxt:{},
    profileContainer:{},
    date:{},
    weight:{},
    gender:{},
    time:{},
    place:{},
})
export default BabyProfile;