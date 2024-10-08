// CustomText.tsx
import fontStyle from "@/constants/font";
import React from "react";
import { Text as NativeText, TextStyle } from "react-native";

interface CustomTextProps {
  style?: TextStyle; // Allow additional styles
  children: React.ReactNode;
}

const Text: React.FC<CustomTextProps> = ({ style, children }) => {
  return <NativeText style={[fontStyle.customFont, style]}>{children}</NativeText>;
};

export default Text;
