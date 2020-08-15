import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorAdjuster = (props) => {
  const { color, onIncrease, onDecrease } = props;

  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default ColorAdjuster;

const styles = StyleSheet.create({});
