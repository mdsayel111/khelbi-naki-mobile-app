import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAxiosAuthInstance from "../../utils/hooks/useAxiosAuthInstance";
import { LOGIN_API } from "@/utils/Apis/auth-apis";
import Toast from "react-native-toast-message";
import { useNavigation } from "expo-router";
// import toast from "react-hot-toast";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const navigation = useNavigation()

    const axiosAuthInstance = useAxiosAuthInstance();
    // const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const [user, setUser] = useState(null);

    // get user from storage and set it to user
    async function getUserAndSet() {
        const storedUser = await AsyncStorage.getItem(
            "user"
        );
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }

    useEffect(() => {
        getUserAndSet()
    }, []);

    // handle protected route
    useEffect(() => {
        if (!user) {
            navigation.navigate("Login" as never)
        } else {
            navigation.navigate("index" as never)
        }
    }, [user]);

    // const register = async (userData) => {
    //     try {
    //         const response = await axiosAuthInstance.post(REGISTER_API, userData);

    //         if (response.data) {
    //             localStorage.setItem("registeredUser", JSON.stringify(response.data));
    //             setErrorMessage("");
    //         }
    //     } catch (error) {
    //         setErrorMessage(error.response.data.message);
    //     }
    // };

    const login = async (userData: { email: string, password: string }) => {
        try {
            const response = await axiosAuthInstance.post(LOGIN_API, userData);

            if (response.data) {
                setUser(response.data);
                if (response.data.isVerified) {
                    Toast.show({
                        type: 'success',
                        text1: 'Login successful!',
                    })
                    await AsyncStorage.setItem("user", JSON.stringify(response.data))
                    setErrorMessage("");
                    navigation.navigate("index" as never)
                } else {
                    // toast.error("Invalid email or password", {
                    //     zIndex: 1000,
                    // });
                    setErrorMessage("Please verify your email first!");
                }
            }
        } catch (error: any) {

            Toast.show({
                type: 'error',
                text1: error.response.data.message,
            })
            setErrorMessage(error.response.data.message);
        }
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.setItem("user", "")
        navigation.navigate("Login" as never)
    };

    const clearErrorMessage = () => {
        setErrorMessage("");
    };

    const values = {
        login,
        logout,
        user,
        setUser,
        // register,
        errorMessage,
        clearErrorMessage,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
