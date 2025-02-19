import { View, Text, StyleSheet, Button } from "react-native";
import { text } from "stream/consumers";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

type RootStackParamList = {
    Home : {result ?: string};
    About: { name: string };
  };

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, "About">;

export default function AboutScreen({route, navigation}: AboutScreenProps) {
    const {name} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title : name
        })
    },[navigation, name]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button 
                title="Update the name" 
                onPress={() => navigation.setParams({
                    name : "code"
                })
                }
             />
             <Button title="Go back with data"
             onPress={() => navigation.navigate("Home",{ result : "Data from about" })}/>
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