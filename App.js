import React, { useState } from 'react';
import TipForm from './components/TipForm';
import TipAmount from './components/TipAmount';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [formData, setFormData] = useState({
    totalTipAmount: 0,
    totalTippableHours: 0,
    hourlyTipRate: 0,
    hoursWorked: 0,
    payOut: 0,
    showPayOut: false,
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Tip Distribution Calculator</Text>
        <TipForm formData={formData} setFormData={setFormData} />
        {formData.showPayOut && (
          <TipAmount
            payOut={formData.payOut}
            hourlyTipRate={formData.hourlyTipRate}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight * 2.5,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
