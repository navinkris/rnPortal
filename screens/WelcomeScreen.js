import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={{height: height/2.5}} resizeMode="contain" source={require("../assets/images/Nokia_New_Logo.jpg")} />
      </View>
      <View 
        style={{ 
          paddingHorizontal: Spacing * 4, 
          paddingTop: Spacing * 4
          }}>
        <Text 
          style={{ 
            fontSize: FontSize.xLarge,
            color: Colors.primary,
            fontFamily: Font["poppins-bold"],
            textAlign: "center"
          }}>
            Welcome to Nokia
          </Text>

          <Text 
          style={{ 
            fontSize: FontSize.small,
            color: Colors.text,
            fontFamily: Font["poppins-bold"],
            textAlign: "center",
            marginTop: Spacing * 2
          }}>
            Connecting people
          </Text>
      </View>
      <View 
        style={{
          paddingHorizontal: Spacing * 2,
          paddingTop: Spacing * 6,
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2,
            width: '48%',
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing
          }}
        >
          <Text style={{
            fontFamily: Font["poppins-bold"],
            color: Colors.onPrimary,
            fontSize: FontSize.large,
            textAlign: "center"
          }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2,
            width: '48%',
            borderRadius: Spacing
          }}
        >
          <Text style={{
            fontFamily: Font["poppins-bold"],
            color: Colors.text,
            fontSize: FontSize.large,
            textAlign: "center"
          }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});