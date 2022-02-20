import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbarBlock}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbarBlock: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: '#3949ab',
  },
  text: {
    color: '#fff',
  },
});

