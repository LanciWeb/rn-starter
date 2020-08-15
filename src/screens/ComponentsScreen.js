import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//# STYLE
const styles = StyleSheet.create({
  textStyle: { fontSize: 45 },
  smallTextStyle: { fontSize: 20 },
});

//# COMPONENT
const ComponentsScreen = () => {
  const name = 'Marco';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.smallTextStyle}>My name is {name}</Text>
    </View>
  );
};

export default ComponentsScreen;
