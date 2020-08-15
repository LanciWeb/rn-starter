import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const ImageDetail = ({ title, score, source }) => {
  return (
    <View>
      <Text>
        {title} - score: {score}
      </Text>
      <Image source={source} />
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
