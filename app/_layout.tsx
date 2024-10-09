import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { Dimensions } from "react-native";
import { AuthProvider } from "@/contexts/hooks/useAuthContext";
import Toast from "react-native-toast-message";
import Footer from "@/components/partials/layout/footer/Footer";
import Navbar from "@/components/partials/layout/nav-bar/Navbar";
import Text from "@/components/partials/element/CustomText";
import * as Linking from 'expo-linking';


// get screen size
const screenHeight = Dimensions.get('window').height;

// const linking = {
//   prefixes: ['exp://', 'yourapp://', "http://khelbinaki.antopolis.xyz"],  // Add 'exp://' for development URLs
//   config: {
//     screens: {
//       Register: 'register/:token',  // Handles the path `/register/:token`
//       Home: '',  // Handles the path `/register/:token`
//     },
//   },
// };


export default function Layout() {

  const navigation = useNavigation();
  const [state, setState] = useState("")

  useEffect(() => {
    // Retrieve the initial URL if the app was opened with a deep link
    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        console.log('App opened with URL:', initialUrl);
        handleUrl(initialUrl);
      }
    };

    // Call the function to get the initial URL
    getInitialUrl();

    // Add an event listener to listen for incoming URLs when the app is already open
    // const handleDeepLink = (event: { url: string }) => {
    //   console.log('New URL received:', event.url);
    //   handleUrl(event.url);
    // };

    // const urlSubscription = Linking.addEventListener('url', handleDeepLink);

    // Cleanup event listener on component unmount
    return () => {
      // urlSubscription.remove();
    };
  }, []);

  // // Parse the URL and navigate to the right screen
  const handleUrl = (url: string) => {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;  // Get the path
    const segments = path.split('/').filter(Boolean);  // Split and filter empty values

    setState(path)
    // // Check for '/register/jwt-token' pattern
    // if (segments[0] === 'register' && segments[1]) {
    //   const token = segments[1];
    //   // Navigate to Register screen with the token
    //   navigation.navigate('Register', { token });
    // }
    // // Check for '/:id' pattern (MongoDB ID)
    // else if (segments[0]) {
    //   const id = segments[0];
    //   // Navigate to RecordDetails screen with the MongoDB ID
    //   navigation.navigate('RecordDetails', { id });
    // }
  };

  // handle deep link
  // In your component or app entry point


  // useEffect(() => {
  //   const handleDeepLink = (event: { url: string }) => {
  //     const url = event.url;
  //     const parsedUrl = new URL(url);
  //     const path = parsedUrl.pathname.split('/').filter(Boolean);

  //     if (path[0] === 'register' && path[1]) {
  //       const token = path[1];
  //       // navigation.navigate('Register', { token });
  //       console.log(path[0])
  //     }
  //   };

  //   const getInitialUrl = async () => {
  //     const initialUrl = await Linking.getInitialURL();
  //     if (initialUrl) handleDeepLink({ url: initialUrl });
  //   };

  //   getInitialUrl();
  //   const urlListener = Linking.addEventListener('url', handleDeepLink);

  //   return () => urlListener.remove();
  // }, [navigation]);

  // console.log("first")


  // useEffect(() => {
  //   const handleDeepLink = (event: any) => {
  //     const url = event.url;
  //     // Handle the URL appropriately
  //     console.log('Received URL:', url);
  //   };

  //   const unsubscribe = Linking.addEventListener('url', handleDeepLink);

  //   // Check if app was opened by a deep link
  //   Linking.getInitialURL().then((url) => {
  //     if (url) {
  //       handleDeepLink({ url });
  //     }
  //   });

  //   return () => {
  //     unsubscribe.remove();
  //   };
  // }, []);

  // load AnnieUseYourTelescope font
  const [loaded] = useFonts({
    AnnieUseYourTelescope: require("../assets/fonts/AnnieUseYourTelescope-Regular.ttf"), // Load the correct font name here
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <AuthProvider>
    //   <SafeAreaView style={[styles.container]}>
    //     {/* statusbar style */}
    //     <StatusBar backgroundColor="black" barStyle="light-content" />

    //     {/* drawer navbar */}
    //     <Navbar />

    //     {/* footer */}
    //     <Footer />

    //     {/* toast */}
    //     <Toast />
    //   </SafeAreaView>
    // </AuthProvider>
    <Text>{""}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    display: "flex",
  },
});
