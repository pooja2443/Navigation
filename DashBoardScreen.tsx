import { View, Text,StyleSheet, Button } from "react-native";
import { text } from "stream/consumers";

type Props = {
    navigation: {
      toggleDrawer: () => void;
    };
  };


const DashBoardScreen : React.FC<Props> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>DashBoard Screen</Text>
            <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()}/>
        </View>
    )
}

export default DashBoardScreen;

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