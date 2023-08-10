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
        console.log("enter");
        
      if (!response.didCancel && !response.errorMessage) {
        console.log('response', response);
        console.log('open gallery');
        setVideoUp(response.assets[0].uri);
        
      }
      else{
        console.log(response.errorMessage)
      }
    });
  };
  return (
    <View>
      <Pressable onPress={()=>addVideo()}>
        <Text>video</Text>
      </Pressable>
      <Video
        source={{uri:videoUP}}
        style={{height: 170, width: 190,flex:1}}
        controls={true}
        fullscreen={true}
      />
    </View>
  );
};

export default video;
