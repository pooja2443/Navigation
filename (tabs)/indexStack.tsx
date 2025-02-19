import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "@/screen/homeScreen"; 
import AboutScreen from "@/screen/AboutScreen";
import { Pressable, Text } from "react-native";

type RootStackParamList = {
  Home: undefined;
  About: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AboutStack = () => {
  return(
    <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button is pressed!")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen} 
            options={{
              title: "Welcome Home",
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            initialParams={{
              name: "Guest",
            }}
          />
        </Stack.Navigator>
  )

}

export default function App() {
  return (
      <AboutStack />
  );
}
