import fontStyle from "@/constants/font";
import React, { Dispatch } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";

type TInputProps = {
  value: string;
  placeholder: string
  setValue: Dispatch<string>;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean
}

export default function Input({
  value,
  setValue,
  placeholder,
  keyboardType="default",
  secureTextEntry=false
}: TInputProps) {


  return (
    <View style={style.input}>
      <TextInput secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholder={placeholder} value={value} onChangeText={setValue} style={[style.input, fontStyle.customFont]} />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderColor: "black",
    borderBottomWidth: 0.5,
    fontSize: 16
  },
});