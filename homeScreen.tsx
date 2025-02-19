import { NativeStackNavigationConfig, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/commonjs/src/types";
import { View, Text, StyleSheet, Button } from "react-native";

type RootStackParamList = {
    Home : {result ?: string};
    About: { name: string };
  };

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({navigation,route}:  HomeScreenProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button 
            title="Go to About" 
            onPress={() => navigation.navigate("About",{
                name: "Pooja"
            })}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})