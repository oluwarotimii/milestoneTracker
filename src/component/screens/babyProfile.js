import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { getBabyProfile, deleteBabyProfile } from "../utils/storageUtils";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

const BabyProfile = ({ route, navigation }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileId = route.params.profileId;
        const storedProfile = await getBabyProfile(profileId);
        setProfile(storedProfile);
      } catch (error) {
        console.error('Error loading Profile', error);
      }
    };

    fetchProfile();
  }, [route.params.profileId]);

  const handleDeleteProfile = async () => {
    try {
      await deleteBabyProfile(profile.id);
      navigation.goBack(); // Navigate back after deletion
    } catch (error) {
      console.error('Error deleting Profile', error);
    }
  };

  const handleEditProfile = () => {
    // Navigate to the edit profile screen, you need to implement the screen and navigation
    // navigation.navigate('EditProfile', { profile });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{profile?.name}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleDeleteProfile} style={styles.icon}>
            <Icon name="delete" size={25} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEditProfile} style={styles.icon}>
            <Icon name="edit" size={25} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.info}>Born on {profile?.birthDate}</Text>
        <Text style={styles.info}>Weight at Birth: {profile?.weight}</Text>
        <Text style={styles.info}>Gender: {profile?.gender}</Text>
        <Text style={styles.info}>Time of Birth: {profile?.birthTime}</Text>
        <Text style={styles.info}>Place of Birth: {profile?.birthPlace}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width,
    height,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
});

export default BabyProfile;
