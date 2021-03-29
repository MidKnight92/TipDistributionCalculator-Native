import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TipAmount({ payOut, hourlyTipRate }) {
  return (
    <View>
      <Text style={styles.text}>Employee Tip Pay Out: ${payOut}</Text>
      <Text style={styles.text}>{`Tip Rate Per Hour: $${hourlyTipRate.toFixed(
        2
      )}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Arial',
    marginBottom: 10,
  },
});
