import React from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "./styles";

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <TextInput
      {...rest}
      placeholderTextColor='#F0F0F0'
      multiline
    />
  )
}

export default Input