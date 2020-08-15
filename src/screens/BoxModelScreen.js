import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxModelScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  )
}

export default BoxModelScreen

const styles = StyleSheet.create({
  viewStyle: {borderWidth: 1, borderColor: 'black'},
  textStyle:{borderWidth:1, borderColor: 'red', margin:20}
})
