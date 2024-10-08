import Button from '@/components/partials/element/Button';
import Text from '@/components/partials/element/CustomText';
import Divider from '@/components/partials/element/Divider';
import Form from '@/components/partials/element/form/Form';
import Input from '@/components/partials/element/form/Input';
import ScreenContainer from '@/components/partials/element/ScreenContainer';
import { FORGET_PASSWORD_API } from '@/utils/Apis/auth-apis';
import useAxiosAuthInstance from '@/utils/hooks/useAxiosAuthInstance';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const axiosInstance = useAxiosAuthInstance()

    const handleRecoverPassword = async () => {
        const res = await axiosInstance.post(FORGET_PASSWORD_API, { email })
        Toast.show({
            type: "success",
            text1: res?.data?.message
        })

    };
    return (
        <ScreenContainer>
            <View style={styles.formContainer}>
                <Form>
                    {/* <Text style={[{textAlign: "center", fontSize: 24}, fontStyle.customFont]}>Register</Text> */}
                    <Text style={{ textAlign: "center", fontSize: 24 }}>Recover Password</Text>
                    <Input placeholder="Email" value={email} setValue={setEmail} />
                    <Button onPress={handleRecoverPassword} title="Login" textStyle={{}} />
                </Form>
                <Text style={{ textAlign: "center", marginTop: 10 }}>We’ll email you a link that will let you change your password</Text>
                <Divider style={{ marginVertical: 10 }} />
                <Text style={{ textAlign: "center", marginTop: 10 }}>We’ll email you a link that will let you change your password? Login</Text>
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

export default RecoverPassword;