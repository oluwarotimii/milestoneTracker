import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const TimeOfday = () => {
    const [greetings, setGreetings] = useState(' ');

    useEffect(() => {
        const getCurrentTime = () => {
            const currentHour = new Date().getHours();  // Corrected: Added parentheses to getHours()
            if (currentHour >= 0 && currentHour <= 12) {
                setGreetings('Good Morning');
            } else if (currentHour >= 12 && currentHour < 17) {
                setGreetings('Good Afternoon');
            } else {
                setGreetings('Good Evening');
            }
        };

        getCurrentTime();
    }, []);

    return (
        <View>
            <Text style={styles.greetings}> <Icon name='user' size={20}/> {greetings}, </Text>
        </View>
    );
};

const styles  = StyleSheet.create({
    greetings:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        marginLeft: 5,
    },
});

export default TimeOfday;
