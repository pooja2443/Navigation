import { View, Text,StyleSheet } from "react-native";
import { text } from "stream/consumers";

const CourseListScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Setting Screen</Text>
        </View>
    )
}

export default CourseListScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        fontSize : 24,
        fontWeight: "bold",
        marginBottom : 16
    }
})