import React, { useState } from "react";
import { Text, TextInput, ScrollView, View, StyleSheet, TouchableOpacity, Dimensions, Alert, Image } from "react-native";
import { saveBabyProfile } from "../utils/storageUtils";
import { maleAvatars, femaleAvatars } from "../../avatar/avatar"; // Import avatar images
import Colors from "../utils/colors";
import Icon from 'react-native-vector-icons/AntDesign';



const {width, height} = Dimensions.get('window');
const CreateBaby = ({ navigation }) => {
    const [babyName, setBabyName] = useState('');
    const [date, setDate] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    const [weight, setWeight] = useState('');
    const [babyImage, setBabyImage] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);


    
    const handleSaveBabyProfile = async () => {
        if (!babyName || !date || !timeOfBirth || !weight || !babyImage) {
            Alert.alert('Please fill in all the required fields.');
            return;
        }

        const babyProfile = {
            id: Date.now(),
            name: babyName,
            date,
            weight,
            gender: selectedGender,
            image: babyImage,
        };

        try {
            await saveBabyProfile(babyProfile);
            Alert.alert('Baby Profile created successfully.');
            navigation.navigate('Baby-Profile', { profileId: babyProfile.id });
        } catch (error) {
            console.error('Error saving baby profile', error);
            Alert.alert('Unable to save baby profile.');
        }
    };

    const renderAvatars = () => {
        const avatars = selectedGender === 'male' ? maleAvatars : femaleAvatars;
    
        return avatars.map((avatar, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => handleAvatarPress(avatar)}
                style={styles.avatarItem}
            >
                <Image source={avatar} style={styles.avatar} />
            </TouchableOpacity>
        ));
    };
    
    const handleAvatarPress = (avatar) => {
        setBabyImage(avatar);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Dashboard')}>
                    <Icon name='left' size={30}/>
                </TouchableOpacity>
                <View style={styles.header}>   
                    <View style={{ width: '10%' }}/> 
                    <Text style={styles.headerTxt}> Create Profile</Text>
                    <View style={{ width: '10%' }}/> 
                </View>
            </View>
            <View style={styles.createContainer}>
                {/* <View style={styles.imageContainer}> */}
                  
                    {/* <TouchableOpacity
                        style={styles.addPicture}
                        onPress={() => Alert.alert('Handle picking image')}
                    > 
                        <Icon name='plus' size={60}/>
                        <Text style={styles.addPictureText}> Add Picture</Text>
                    </TouchableOpacity> */}
                 
                {/* </View> */}
                <View style={{
                    borderWidth: 1,
                    marginVertical: 20,
                  }}>
                  {babyImage ? (
                        <Image source={babyImage} style={styles.image} />
                    ) : (
                        <View style={styles.avatarContainer}>{renderAvatars()}</View>
                    )}
                  </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.inputTxt}>Name</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Baby name"
                        value={babyName}
                        onChangeText={setBabyName}
                    />
                    <Text style={styles.inputTxt}>Date of Birth</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="DD/MM/YY"
                        value={date}
                        onChangeText={setDate}
                    />
                    <Text style={styles.inputTxt}>Time of Birth</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Time of Birth"
                        value={timeOfBirth}
                        onChangeText={setTimeOfBirth}
                    />
                    <Text style={styles.inputTxt}>Weight</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Weight"
                        value={weight}
                        onChangeText={setWeight}
                    />
                    <View style={styles.genderButtons}>
                        <TouchableOpacity
                            style={[styles.genderButton, selectedGender === 'male' && { backgroundColor: Colors.orange }]}
                            onPress={() => setSelectedGender('male')}
                        >
                            <Text style={styles.genderButtonText}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.genderButton, selectedGender === 'female' && { backgroundColor: Colors.orange }]}
                            onPress={() => setSelectedGender('female')}
                        >
                            <Text style={styles.genderButtonText}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.submitBtn} onPress={handleSaveBabyProfile}>
                        <Text style={styles.submitTxt}> SAVE </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-evenly',
        marginBottom: '10%',
    },
    backBtn: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 1,
        height: '30%',
        width: '10%',
        marginVertical: '0.1%',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 5,
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    createContainer: {},
    imageContainer: {
        borderWidth: 2,
        height: 250,
        width: 250,
        alignSelf: 'center',
        borderRadius: 500,
        marginBottom: 50,
        backgroundColor: Colors.gray,
    },
    addPicture: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 220,
    },
    addPictureText: {
        fontSize: 20,
        fontWeight: '600',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    avatarItem: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 125,
    },
    infoContainer: {
        borderWidth: 2,
        height,
    },
    inputTxt: {
        marginLeft: 15,
        marginHorizontal: 40, 
        fontWeight: '500',
        fontSize: 18,
    },
    inputField: {
        borderWidth: 1,
        borderColor: Colors.black,
        marginHorizontal: 20,
    },
    genderButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        
    },
    genderButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.blue,
    },
    genderButtonText: {
        color: Colors.black,
        fontWeight: 'bold',
    },
    submitBtn: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        width: 100,
        height: 50,
        backgroundColor: Colors.orange,
        borderRadius: 10,
        elevation: 5,
    },
    submitTxt: {
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CreateBaby;
