import React, { useSyncExternalStore } from "react";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { saveMilestone } from "../utils/milestones";
import Colors from "../utils/colors";
import Icon from 'react-native-vector-icons/AntDesign';

const CreateMilestone = ({ route, navigation }) => {
    const [milestoneTxt, setMilestoneTxt] = useState('');
    const [dateOfMilestone, setDateOfMilestone] = useState();
    const [notes, setNotes] = useState();
    const [milestoneImage, setMilestoneImage] = useState(null);


    const handleSaveMilestone = async () => {
        // if (!milestoneTxt || !dateOfMilestone) {
        //     Alert.alert('Please fill in all the required fields.');
        //     return;
        // }
        const milestone = {
            id: Date.now().toString(),
            dateOfMilestone,
            milestoneTxt,
        };
        try {
            const updatedMilestones = await saveMilestone(milestone);
            console.log('Milestone created successfully:', updatedMilestones);
            Alert.alert('Milestone created successfully.');

            // Navigate to the  Milestone-View screen 
            navigation.navigate('Milestone-View', { milestoneId: milestone.id });
        } catch (error) {
            Alert.alert('Error unable to create milestone ')
            console.error('Error saving milestone:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Icon name='left' size={20} />
                </TouchableOpacity>
                <View style={{
                    width: '10%',
                    //    borderWidth: 1,
                }} />
                <Text style={styles.headerTxt}> CREATE MILESTONE</Text>
                <View style={{
                    width: '10%',
                    //  borderWidth: 1,
                }} />
            </View>
            <View style={styles.createContainer}>
                {/* <View style={styles.imageContainer}>
                    <Image />
                </View> */}
                <View style={styles.infoContainer}>
                    <TextInput style={styles.milestoneTxt}
                        placeholder="Milestone"
                        onChangeText={(text) => milestoneTxt} />
                    <TextInput style={styles.milestoneDate}
                        placeholder="Date of Milestone"
                        onChangeText={(text) => dateOfMilestone} />
                </View>
                <View style={styles.notesContainer}>
                    <TextInput styles={styles.notesTxt}
                        placeholder=" Add more notes"
                        onChangeText={(text) => setNotes(text)} />
                </View>
                <TouchableOpacity style={styles.submitBtn} onPress={handleSaveMilestone}>
                    <Text style={styles.submitTxt}> CREATE </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        backgroundColor: Colors.white,
    },
    header: {
        borderWidth: 2,
        flexDirection: 'row',
        // alignContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        // justifyContent: 'space-evenly',
        marginBottom: '10%',
    },
    backBtn: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 1,
        width: '10%',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black,
        alignSelf: 'center',
        marginHorizontal: '2%',
    },
    createContainer: {},
    imageContainer: {
        borderWidth: 2,
        height: '40%',
        width: '80%',
        alignSelf: 'center',
    },
    infoContainer: {
        // flex: 1,
        // margin: 20,
    },
    milestoneTxt: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    milestoneDate: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesContainer: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesTxt: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: '100%',
        height: '70%',
    },
    submitBtn: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        // borderWidth: 2,
        elevation: 5,
        borderRadius: 10,
        width: '25%',
        height: '12%',
        backgroundColor: Colors.orange,
    },
    submitTxt: {
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        color: Colors.white,
    },
})
export default CreateMilestone;