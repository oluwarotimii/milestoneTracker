// asyncStorageUtils.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const BABY_PROFILES_KEY = 'babyProfiles';
const MILESTONES_KEY = 'milestones';

export const saveBabyProfile = async (babyProfile) => {
  try {
    const storedBabyProfilesJSON = await AsyncStorage.getItem(BABY_PROFILES_KEY);
    const storedBabyProfiles = storedBabyProfilesJSON ? JSON.parse(storedBabyProfilesJSON) : [];
    const updatedBabyProfiles = [...storedBabyProfiles, babyProfile];
    await AsyncStorage.setItem(BABY_PROFILES_KEY, JSON.stringify(updatedBabyProfiles));
    return updatedBabyProfiles;
  } catch (error) {
    console.error('Error saving baby profile:', error);
    throw error;
  }
};

export const getBabyProfiles = async () => {
  try {
    const storedBabyProfilesJSON = await AsyncStorage.getItem(BABY_PROFILES_KEY);
    return storedBabyProfilesJSON ? JSON.parse(storedBabyProfilesJSON) : [];
  } catch (error) {
    console.error('Error loading baby profiles:', error);
    throw error;
  }
};

export const updateBabyProfile = async (babyProfileId, updatedBabyProfile) => {
  try {
    const storedBabyProfilesJSON = await AsyncStorage.getItem(BABY_PROFILES_KEY);
    const storedBabyProfiles = storedBabyProfilesJSON ? JSON.parse(storedBabyProfilesJSON) : [];
    const updatedBabyProfiles = storedBabyProfiles.map((profile) =>
      profile.id === babyProfileId ? { ...profile, ...updatedBabyProfile } : profile
    );
    await AsyncStorage.setItem(BABY_PROFILES_KEY, JSON.stringify(updatedBabyProfiles));
    return updatedBabyProfiles;
  } catch (error) {
    console.error('Error updating baby profile:', error);
    throw error;
  }
};

export const saveMilestone = async (milestone) => {
  try {
    const storedMilestonesJSON = await AsyncStorage.getItem(MILESTONES_KEY);
    const storedMilestones = storedMilestonesJSON ? JSON.parse(storedMilestonesJSON) : [];
    const updatedMilestones = [...storedMilestones, milestone];
    await AsyncStorage.setItem(MILESTONES_KEY, JSON.stringify(updatedMilestones));
    return updatedMilestones;
  } catch (error) {
    console.error('Error saving milestone:', error);
    throw error;
  }
};

export const getMilestones = async () => {
  try {
    const storedMilestonesJSON = await AsyncStorage.getItem(MILESTONES_KEY);
    return storedMilestonesJSON ? JSON.parse(storedMilestonesJSON) : [];
  } catch (error) {
    console.error('Error loading milestones:', error);
    throw error;
  }
};

export const updateMilestone = async (milestoneId, updatedMilestone) => {
  try {
    const storedMilestonesJSON = await AsyncStorage.getItem(MILESTONES_KEY);
    const storedMilestones = storedMilestonesJSON ? JSON.parse(storedMilestonesJSON) : [];
    const updatedMilestones = storedMilestones.map((milestone) =>
      milestone.id === milestoneId ? { ...milestone, ...updatedMilestone } : milestone
    );
    await AsyncStorage.setItem(MILESTONES_KEY, JSON.stringify(updatedMilestones));
    return updatedMilestones;
  } catch (error) {
    console.error('Error updating milestone:', error);
    throw error;
  }
};
