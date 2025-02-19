import "react-native-gesture-handler";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator} from "@react-navigation/drawer"
import { SafeAreaProvider } from "react-native-safe-area-context";
import DashBoardScreen from "@/screen/DashBoardScreen";
import SettingScreen from "@/screen/SettingScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <SafeAreaProvider>
            <Drawer.Navigator>
                <Drawer.Screen 
                name="DashBoard" 
                component={DashBoardScreen}
                options={{
                    title: "My DashBoard",
                    drawerLabel: "DashBoard label",
                    drawerActiveTintColor :"#333",
                    drawerActiveBackgroundColor : "lightblue",
                    drawerContentStyle : {
                        backgroundColor : "#c6cbef"
                    }
                }} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
            </Drawer.Navigator>
        </SafeAreaProvider>
    )
}