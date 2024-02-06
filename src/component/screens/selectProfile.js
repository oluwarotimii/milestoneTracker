import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { getBabyProfiles } from '../utils/storageUtils';

const BabyProfileSelection = ({ navigation }) => {
  const [babyProfiles, setBabyProfiles] = useState([]);
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const storedBabyProfiles = await getBabyProfiles();
        setBabyProfiles(storedBabyProfiles);
        // Trigger fade-in animation when profiles are loaded
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 1000, // Adjust duration as needed
          useNativeDriver: true,
        }).start();
      } catch (error) {
        console.error('Error loading Profiles', error);
      }
    };

    fetchProfiles();
  }, [fadeAnimation]);

  const handleProfileSelect = (babyProfileId) => {
    navigation.navigate('Create-Milestones', { babyProfileId });
  };

  const renderProfileItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProfileSelect(item.id)}>
      <Animated.View style={[styles.cardContainer, { opacity: fadeAnimation }]}>
        <Text style={styles.profileName}>{item.name}</Text>
        <Text>{item.dateOfBirth}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Baby Profile</Text>
      <FlatList
        data={babyProfiles}
        keyExtractor={(item) => item.id}
        renderItem={renderProfileItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default BabyProfileSelection;
