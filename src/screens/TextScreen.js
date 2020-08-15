import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(text) => setValue(text)}
      />
      <Text>
        {!value || value.length > 4
          ? null
          : 'Password must be longer than 5 characters'}
      </Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});
