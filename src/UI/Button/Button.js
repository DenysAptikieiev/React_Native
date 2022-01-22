import React, { useState } from "react";
import {Pressable, Text} from "react-native";

export const Button = ({title='', styleButton = {}, styleText = {}, event=null}) => {

  return (
    <Pressable 
        style={styleButton}
        onPress={event}
        >
        <Text style={styleText}>{title}</Text>
      </Pressable>
  )
}


