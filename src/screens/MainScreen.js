import React from 'react';
import {View, StyleSheet, FlatList} from 'react=native';
import {AppTodo} from '../components/AppTodo';
import {Todo} from '../components/Todo';

export const TodoScreen = ({addTodo, todos}) => { 
  return (
    <View>
      <AppTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => <Todo title={item.title}/>}
        />
    </View>
  )
};

const styles = StyleSheet.create({

})

