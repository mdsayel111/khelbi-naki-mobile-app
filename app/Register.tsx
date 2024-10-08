import Button from "@/components/partials/element/Button";
import Text from "@/components/partials/element/CustomText";
import Form from "@/components/partials/element/form/Form";
import Input from "@/components/partials/element/form/Input";
import ScreenContainer from "@/components/partials/element/ScreenContainer";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = () => {
  };

  return (
    <ScreenContainer>
      <View style={styles.formContainer}>
        <Form>
          {/* <Text style={[{textAlign: "center", fontSize: 24}, fontStyle.customFont]}>Register</Text> */}
          <Text style={{ textAlign: "center", fontSize: 24 }}>Register</Text>
          <Text style={{ textAlign: "center", fontSize: 24 }}>Welcome Ant/Guest!</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
          <Input placeholder="Password" secureTextEntry={true} value={password} setValue={setPassword} />
          <Input placeholder="Confirm Password" secureTextEntry={true} value={confirmPassword} setValue={setConfirmPassword} />
          <Button onPress={() => { }} title="Register" textStyle={{}} />
        </Form>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "70%",
    marginHorizontal: "auto",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  }
});

export default RegistrationForm;
