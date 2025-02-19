import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import CourseListScreen from "@/screen/CourseListScreen";
import ProfileScreen from "@/screen/ProfileScreen";
import SettingScreen from "@/screen/SettingScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import indexStack from "@/app/(tabs)/indexStack";

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <SafeAreaProvider>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition : "below-icon",
                tabBarShowLabel : true,
                tabBarActiveTintColor : "purple",
            }}>
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="person" size={20} color={color}/>
                    ),
                    tabBarBadge : 1
                    
                }}/>
                <Tab.Screen name="Setting" component={SettingScreen}/>
                <Tab.Screen name="About Stack" component={indexStack}/>
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}