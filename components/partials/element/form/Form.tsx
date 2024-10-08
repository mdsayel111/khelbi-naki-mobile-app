import React from "react";
import { KeyboardAvoidingView, View } from "react-native";

type TFormProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children }: { children: React.ReactNode }) {
  return <View style={{ display: "flex", gap: 20 }}>{children}</View>;
}
