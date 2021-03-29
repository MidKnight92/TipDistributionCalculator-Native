import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const keys = [
  'totalTipAmount',
  'totalTippableHours',
  'hoursWorked',
  'payOut',
  'showPayOut',
];

export default function TipForm({ formData, setFormData }) {
  const calulateTipPayOut = () => {
    if (
      formData.totalTipAmount &&
      formData.totalTippableHours &&
      formData.hoursWorked
    ) {
      let hrTipRate = formData.totalTipAmount / formData.totalTippableHours;
      let tipPayOut = Math.round(hrTipRate * formData.hoursWorked);
      const newFormData = {
        ...formData,
        hourlyTipRate: hrTipRate,
        payOut: tipPayOut,
        showPayOut: true,
      };
      setFormData(newFormData);
    }
  };
  const handlePress = ({ key, value }) => {
    let parsedValue = parseFloat(value);

    let newFormData = {
      ...formData,
      [key]: parsedValue,
      [keys[keys.length - 1]]: false,
    };
    setFormData(newFormData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Tip Amount:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="$000.00"
        onChangeText={(value) => handlePress({ key: [keys[0]], value })}
      />
      <Text style={styles.label}>Total Tippable Hours:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="000.00 hrs"
        onChangeText={(value) => handlePress({ key: keys[1], value })}
      />
      <Text style={styles.label}>Total Hours Worked by Employee:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="000.00 hrs"
        onChangeText={(value) => handlePress({ key: keys[2], value })}
      />
      <Button title="Calculate" onPress={calulateTipPayOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontFamily: 'Arial',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    width: 200,
    backgroundColor: '#fff',
  },
});
