import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from '../UI/Button/Button';

export const TodoScreen = ({todo, goBack}) => { 
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Back" event={goBack}/>
    </View>
  )
};

const styles = StyleSheet.create({});

