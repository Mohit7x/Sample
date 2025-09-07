import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/Splash";
import IntroScreen from "./src/screens/Intro";
import FaceUploadScreen from "./src/screens/FaceUpload";
import PreviewScreen from "./src/screens/Preview";
import SuccessScreen from "./src/screens/Success";
import { FACE_UPLOAD, INTRO, PREVIEW, PRODUCT_LANDING, PRODUCT_LISTING, PRODUCT_TYPES, SPLASH, SUCCESS } from "./src/navigation/navigationConstants";
import ProductLandingScreen from "./src/screens/ProductLanding";
import ProductTypesScreen from "./src/screens/ProductTypes";
import ProductListingScreen from "./src/screens/ProductListing";


export type RootStackParamList = {
  SPLASH: undefined;
  INTRO: undefined;
  FACE_UPLOAD: undefined;
  PREVIEW: { image: string };
  SUCCESS: undefined;
  PRODUCT_LANDING: undefined;
  PRODUCT_TYPES: undefined;
  PRODUCT_LISTING: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASH} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SPLASH} component={SplashScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={INTRO} component={IntroScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={FACE_UPLOAD} component={FaceUploadScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={PREVIEW} component={PreviewScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={SUCCESS} component={SuccessScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={PRODUCT_LANDING} component={ProductLandingScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={PRODUCT_TYPES} component={ProductTypesScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name={PRODUCT_LISTING} component={ProductListingScreen} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}