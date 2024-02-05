import React from "react";
import {Text,StyleSheet,TouchableOpacity, View} from "react-native";
import Colors from "../utils/colors";



const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
            <Text style={styles.headerTxt}> Home</Text>
            </View>
            <View style={styles.welcome}>
                <Text> Good day</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.createTxt}> Create a  baby's Profile</Text>
                <TouchableOpacity style={styles.addProfile}>
                   {Icon.user}
                </TouchableOpacity>
            </View>

            <View style={styles.floaterView}>
                <TouchableOpacity style={styles.floaterBtn}>
                    {/* FlOATING BUTTON FOR ADDING MILESTONES */}
                 {Icon.plus}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{},
    headerView:{
        borderColor: '#ddd',
        borderWidth: 1,
    },
    headerTxt:{},
    welcome:{
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        height: '10%',
    },
    profileContainer:{},
    createTxt:{

    },
    addProfile:{
        broderColor: 'black',
        borderWidth: 1,
        width: '15%',
        height: '30%',
        top: '30%',
        left: '10%',
        backgroundColor: Colors.orange,
        elevation: 5,
    },
    floaterBtn:{
        borderWidth: 2,
        broderColor: 'black',
        position: 'absolute',
        width: '14%',  
        height: '100%',
        top: 400,
        left: 165,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 15,
        elevation: 5,
    },
})

export default Home;