import React, { useEffect, useState } from 'react';
import { Button, Image, PermissionsAndroid, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Cemera = () => {
  const [imageUri, setImageUri] = useState(null);
  useEffect(()=>{
    requestPermissions();
  },[])
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
  
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] == PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] == PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
        // You can now proceed with image picking and cropping
      } else {
        console.log('Permissions denied');
        // Handle permissions denied scenario
      }
    } catch (error) {
      console.warn('Error requesting permissions:', error);
    }
  };

  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true, // Enable cropping
        cropperCircleOverlay: false, // You can set this to true if you want a circular crop
      });

      setImageUri(image.path); // Store the cropped image URI
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick Image" onPress={handleImagePick} />
    </View>
  );
};

export default Cemera;