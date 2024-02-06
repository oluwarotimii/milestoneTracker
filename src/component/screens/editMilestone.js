// EDIT MILETONES


import React, { useEffect, useState } from "react";
import {Text,TextInput,Button, View, StyleSheet, Image } from "react-native";
import { getMilestones, updateMilestone } from "../utils/storageUtils";
import Icon from 'react-native-vector-icons/AntDesign';

const EditMilestone = ({route, navigation}) => {
    const {milestoneId } = route.params
    const [milestone, setMilestone] = useState({});

    useEffect(() => {
        const loadMilestone = async () => {
            try {
                const milestones = await getMilestones();
                const selectedMilestone = milestones.find((item) => item.id === milestoneId);
                setMilestone(selectedMilestone || {} );
            } catch (error) {
                console.error('Error loading milestone:', error);
            }

        };
    }, [milestoneId]);

    const handleUpdateMilestone = async () => {
        try {
            const updateMilestones = await updateMilestone(milestoneId, milestone);
            console.log('updated Milestones', updateMilestones)
            navigation.navigate('Milestone-View', { milestoneId: milestone.id });
         }
         catch (error) {
            console.error('Error updating Milestone:', error);

         }
    };
     


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn}  onPress={() => navigation.goBack()}>
                <Icon name='left' size={20} />
             </TouchableOpacity>    
             <Text style={styles.headerTxt}>Edit Milestone</Text>  
            </View>
            <View style={styles.editContainer}>
                {/* <View style={styles.imageContainer}>
                    <Image />
                </View> */}
                <View style={styles.infoContainer}>
                    <TextInput 
                    placeholder="milestone"
                    value={milestone.date}
                    // onChangeText={(text) => setMilestone((prevMilestone) => {...prevMilestone, date : text})}
                     /> 
                    <TextInput
                    placeholder="Date of Milestone" style={styles.milestoneDate} /> 
                </View>
                <View style={styles.notesContainer}>
                    <TextInput
                    placeholder="Add notes" 
                    styles={styles.notesTxt} /> 
                </View>
            </View>

            <Button  title="Update" onPress={handleUpdateMilestone} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header:{
        flexDirection:'row',
        // justifyContent: 'center',
        width: '100%',
        height: '10%',
    },
    headerTxt: {
        paddingLeft: 10,
    },
    backBtn: {
        borderColor: "#ddd",
        borderWidth: 1,
        elevation: 3,
        backgroundColor: 'white',
        width: "10%",
        height: '10%',
    },
    editContainer: {},
    imageContainer:{},
    infoContainer: {},
    milestoneTxt:{},
    milestoneDate:{},
    notesContainer: {},
    notesTxt:{},
})
export default EditMilestone;