import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { getMilestones, deleteMilestone } from "../utils/storageUtils"; // Import deleteMilestone function

const MilestoneView = ({ route, navigation }) => {
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    const fetchMilestone = async () => {
      try {
        const milestoneId = route.params.milestoneId;
        const storedMilestones = await getMilestones();
        const selectedMilestone = storedMilestones.find((m) => m.id === milestoneId);
        setMilestone(selectedMilestone);
      } catch (error) {
        console.error('Error loading milestone', error);
      }
    };

    fetchMilestone();
  }, [route.params.milestoneId]);

  const handleEdit = () => {

    navigation.navigate('EditMilestone', { milestoneId: milestone.id });
  };
  

  const handleDelete = async () => {
    try {
      await deleteMilestone(milestone.id); // Call deleteMilestone function from storageUtils
      // Navigate back to the previous screen or do something else
    } catch (error) {
      console.error('Error deleting milestone', error);
    }
  };

  // if (!milestone) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Milestone Details</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.editContainer}>
        <View style={styles.welcomeContainer}>
          {/* Display Baby's Name and Milestone */}
          <View style={styles.imageContainer}>
            {/* Display Image if available */}
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.milestoneTxt}>`Baby's Name: ${milestone.babyName}`</Text>
          <Text style={styles.milestoneDate}>{`Milestone: ${milestone.milestoneTxt}`}</Text>
          <Text style={styles.milestoneDate}>{`Date: ${milestone.dateOfMilestone}`}</Text>
        </View>
        <View style={styles.notesContainer}>
          <Text style={styles.notesTxt}>{`Notes: ${milestone.notes}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editContainer: {
    padding: 20,
  },
  infoContainer: {
    marginBottom: 10,
  },
  milestoneTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  milestoneDate: {
    fontSize: 16,
  },
  notesTxt: {
    fontSize: 16,
  },
});

export default MilestoneView;
