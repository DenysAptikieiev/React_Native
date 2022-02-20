import React, {useState} from 'react';

import { View, StyleSheet, Text, TextInput, Modal, Alert } from 'react-native';
import { Button } from '../UI/Button/Button';
import { THEME } from '../UI/theme';

export const ModalScreen = ({visible, closeModal, value, onSave}) => {

  const [title, setTitle] = useState(value);

  

  const saveHandler = () => {
    if(title.trim().length < 3) {
      Alert.alert('Error', `Your todo - ${title} must have at least three letters!`)
    } else {
      onSave(title);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your task" 
          value={title} onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button 
            title="Cancel" 
            event={() => closeModal(false)} 
            styleText={{color:THEME.DANGER_COLOR}}
          />
          <Button 
            title="Save" 
            event={() => saveHandler()}
          />
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2, 
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})