import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard = ({ children, style }) => {
  return (
    <View style={{...styles.default, ...style}}>{children}</View>
  )
};

const styles = StyleSheet.create({
  default: {
    position: 'relative',
    marginTop: '50%',
    marginBottom: 20,
    paddingTop: 40,
    padding: 20,
    minHeight: 150,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: 'yellow',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    elevation: 8,
  },
})