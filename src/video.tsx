import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
const video = () => {
  const [videoUP, setVideoUp] = useState();
  const addVideo = () => {
    const option = {
      title: 'Select video',
      mediaType: 'video',
      path: 'video',
      quality: 1,
    };
    ImagePicker.launchCamera(option, response => {
      if (!response.didCancel && !response.errorMessage) {
        console.log('open gallery');
        setVideoUp(response);
        console.log('response', response);
      }
    });
  };
  return (
    <View>
      <Pressable onPress={addVideo}>
        <Text>video</Text>
      </Pressable>
      <Video src={videoUP} style={{height: 70, width: 90, flex: 1}} />
    </View>
  );
};

export default video;
