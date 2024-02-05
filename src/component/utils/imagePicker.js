// imagePickerUtils.js

import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';

export const pickImage = (options, callback) => {
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error:', response.error);
    } else {
      const source = { uri: response.uri };
      callback(source);
    }
  });
};

export const saveImage = async (source, folderName, fileName) => {
  const path = `${RNFS.DocumentDirectoryPath}/${folderName}/${fileName}.png`;

  try {
    await RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/${folderName}`);
    await RNFS.copyFile(source.uri, path);
    return path;
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
};
