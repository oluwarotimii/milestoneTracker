import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, View, StatusBar, Image } from "react-native";
import Colors from "../utils/colors";
import TimeOfday from "../utils/dayTime";
import { getBabyProfiles } from "../utils/storageUtils";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/AntDesign';


const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
    const [babyProfile, setBabyProfile] = useState([]);


    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const storedBabyProfiles = await getBabyProfiles();
                setBabyProfile(storedBabyProfiles);
            } catch (error) {
                console.error('Error loading Profiles', error);
            }
        };

        fetchProfiles();
    }, []);
    const ListRender = ({ item }) => {
        return (
            <View style={styles.Mscontainer}>
                <View style={styles.profileBox}>
                    <TouchableOpacity style={styles.addProfile} onPress={() => navigation.navigate('Baby-Profile')}>

                        <Image source={item.profileImage} style={styles.profileImage} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    borderWidth: 1,
                    bottom: 160,
                    position: "absolute",
                }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </View>
        );
    };

    const NoListRender = () => {

        return (
            <View style={styles.profileContainer}>
                <Text style={styles.createTxt}> Create a  baby's Profile</Text>
                <TouchableOpacity style={styles.addProfile}
                    onPress={() => navigation.navigate('Baby-Profile')}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Icon name='left' size={20} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    };



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='orange' />
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}> HOME</Text>
            </View>
            <View style={styles.welcome}>
                <TimeOfday />
            </View>
            <View style={{
                flexDirection: 'row',
                borderWidth: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                width,
                // height: 100,
            }}>
                {babyProfile.length > 0 ? (
                    <FlatList
                        // scrollEnabled={false}
                        pagingEnabled
                        horizontal
                        data={babyProfile}
                        keyExtractor={(item) => item.id}
                        renderItem={ListRender} />

                ) : (
                    NoListRender()
                )}

            </View>
            {/* <View>
                <TouchableOpacity style={styles.createIcon} onPress={() => navigation.navigate('Create-baby')}>
                    <Icon name='plus' size={30} />
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height,
        flex: 1,
    },
    headerView: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: Colors.white,
        width,
        height: '4%',
        // marginVertical: '2%',
        // marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    welcome: {
        borderColor: '#ddd',
        // borderWidth: 1,
        width: '100%',
        height: '5%',
        marginVertical: '5%',
        paddingVertical: '2%',
        marginLeft: '5%',
        backgroundColor: Colors.white,
    },
    profileContainer: {
        // borderWidth: 1,
    },
    createIcon: {
        borderColor: Colors.white,
        borderWidth: 2,
        borderRadius: 5,
        width: width * 0.12,
        height: '7%',
        top: '5%',
        // left: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.orange,
        elevation: 5,
        // marginHorizontal: '10',
        bottom: 9,
        right: 17,
    },
    createTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        // borderWidth: 1,
        paddingHorizontal: '2%',
    },
    Mscontainer: {
        borderWidth: 1,
        width,
        height: height * 0.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: 'column',

    },
    // profileBox:{
    //     width: '100%',
    //     height: '25%',
    //     flexDirection: 'column',
    //     // borderWidth: 1,
    //     // justifyContent: 'center',
    //     // position: 'absolute',
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    //     marginHorizontal: 10,
    // },
    addProfile: {
        // borderColor: Colors.white,
        // borderWidth: 2,
        borderRadius: 5,
        width: width,
        // height: '50%',
        height: height * 0.5,
        flexWrap: 'wrap',
        top: '15%',
        // left: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.orange,
        elevation: 5,
        // marginHorizontal: '10',
    },
    floaterBtn: {
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
    itemName: {
        fontSize: 11,
        top: 122,
        fontWeight: '600',
        // borderWidth: 1,
        marginTop: 300,

    },
    profileBox: {
        width: width,
        height: '60%', 
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '70%', 
        marginBottom: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
        // marginBottom: 5,
    },
})

export default Home;