import Button from '@/components/partials/element/Button';
import Text from '@/components/partials/element/CustomText';
import Form from '@/components/partials/element/form/Form';
import Input from '@/components/partials/element/form/Input';
import ScreenContainer from '@/components/partials/element/ScreenContainer';
import { useAuth } from '@/contexts/hooks/useAuthContext';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      // return toast.error("Please fill all fields");
    }
    const userData = { email, password };
    login(userData);
  };
  return (
    <ScreenContainer>
      <View style={styles.formContainer}>
        <Form>
          {/* <Text style={[{textAlign: "center", fontSize: 24}, fontStyle.customFont]}>Register</Text> */}
          <Text style={{ textAlign: "center", fontSize: 24 }}>Login</Text>
          <Input placeholder="Email" value={email} setValue={setEmail} />
          <Input placeholder="Password" secureTextEntry={true} value={password} setValue={setPassword} />
          <Button onPress={handleLogin} title="Login" textStyle={{}} />
        </Form>
        <Pressable onPress={() => navigation.navigate("RecoverPassword" as never)}>
          <Text style={{ textAlign: "center", marginTop: 10 }}>Forget password?</Text>
        </Pressable>
        <Text style={{ textAlign: "center", marginTop: 10 }}>Don't have account? Sign Up</Text>
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

export default Login;