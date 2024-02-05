import React, { useSyncExternalStore } from "react";
import { useState } from "react";
import {Text,TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import  { saveMilestone } from "../utils/milestones";
import { Icon } from "../utils/icon";

const CreateMilestone = () => {
    const [milestoneTxt, setMilestoneTxt] = useState('');
    const [dateOfMilestone, setDateOfMilestone] = useState();
    const [notes, setNotes] = useState();
    const [milestoneImage, setMilestoneImage] = useState(null);
    

    const handleSaveMilestone = async () => {
        const milestone =  {
            id : Date.now().toString(),
            dateOfMilestone,
            milestoneTxt,
        };

        try{
            const updatedMilestones = await saveMilestone(milestone);
        }catch (error) {
            console.error('Error saving milestone: ',  error);
        }
    };

    return (
        <View style={styles.container}>
           <View style={styles.header}>
           <TouchableOpacity style={styles.backBtn}>
                {Icon.left}
             </TouchableOpacity>    
             <Text style={styles.headerTxt}> Create Milestone</Text>
           </View>
            <View style={styles.createContainer}>
                <View style={styles.imageContainer}>
                    <Image />
                </View>
                <View style={styles.infoContainer}>
                    <TextInput style={styles.milestoneTxt}
                    placeholder="Milestone"
                    onChangeText={(text) => milestoneTxt }  />
                    <TextInput style={styles.milestoneDate}
                    placeholder="Date of Milestone"
                    onChangeText={(text) => dateOfMilestone } />
                </View>
                <View style={styles.notesContainer}>
                    <TextInput styles={styles.notesTxt}
                    placeholder=" Add more notes"
                    onChangeText={(text) => setNotes(text) }  />
                </View>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitTxt}> Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
    },
    header:{
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
    headerTxt: {},
    createContainer: {},
    imageContainer:{
        borderWidth: 2,
        height: '40%',
        width: '80%',
        alignSelf: 'center',
    },
    infoContainer: {
        // flex: 1,
        // margin: 20,
    },
    milestoneTxt:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    milestoneDate:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesContainer: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesTxt:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: '100%',
        height: '70%',
    },
    submitBtn:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        width: '25%',
        height: '10%',
    },
    submitTxt:{
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        color: 'black',
    },
})
export default CreateMilestone;