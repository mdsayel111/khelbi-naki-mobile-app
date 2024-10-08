import React from 'react'
import { Drawer } from "expo-router/drawer";
import commonStyles from '@/styles';
import Text from '../../element/CustomText';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../drawer/Drawer';
import { useAuth } from '@/contexts/hooks/useAuthContext';

export default function Navbar() {
    const navigation = useNavigation();
    const { user } = useAuth()
    return (
        // {/* drawer navbar */ }
        < Drawer
            screenOptions={{
                headerTitle: "",
                headerStyle: commonStyles.border,
                headerLeft: () => (
                    <Text
                        style={{ marginLeft: 20, fontSize: 18 }}
                    >
                        Logo
                    </Text>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.dispatch(DrawerActions.toggleDrawer());
                        }}
                        style={[{ marginRight: 20 }]}
                    >
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                ),
            }
            }
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            {/* <Drawer.Screen
                name="Register"
                options={{
                    drawerLabel: "Register",
                    title: "Register",
                }}
            />
            <Drawer.Screen
                name="Login"
                options={{
                    drawerLabel: "Login",
                }}
            />
            <Drawer.Screen
                name="RecoverPassword"
                options={{
                    drawerLabel: "RecoverPassword",
                }}
            />

            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                }}
            /> */}
        </Drawer >
    )
}