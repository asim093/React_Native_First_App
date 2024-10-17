import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Index = () => {
  return (
    <View style={styles.container}>
      <Icon name="gift-outline" size={50} color="#4CAF50" /> 
      <Text style={styles.text}>Hello React Native 🎁🎉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',       
    backgroundColor: '#F5F5F5', 
  },
  text: {
    fontSize: 24,
    color: '#333',
    marginTop: 10,
  },
});

export default Index;
