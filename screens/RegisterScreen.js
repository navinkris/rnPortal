import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ padding: Spacing}}>
        <View style={{ alignItems: "center"}}>
          <Text 
            style={{ 
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing
              }}>
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              maxWidth: "100%",
              textAlign: "center"
            }}
          >
            Create an account so you can explore the awesome features of the app</Text>
        </View>
        <View style={{ marginVertical: Spacing * 3}}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" secureTextEntry />
          <AppTextInput placeholder="Confirm Password" secureTextEntry />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
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
          <Text 
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            padding: Spacing
          }}
        >
          <Text 
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small
            }}
          >
            Already have an account?
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small
            }}
          > Or continue with</Text>

          <View 
            style={{
              marginTop: Spacing,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <TouchableOpacity style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing
            }}>
              <MaterialIcons name="logo-google" size={30} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing
            }}>
              <MaterialIcons name="logo-facebook" size={30} color="#0077B5" />
            </TouchableOpacity>
            <TouchableOpacity style={{
              padding: Spacing,
              backgroundColor: Colors.gray,
              borderRadius: Spacing / 2,
              marginHorizontal: Spacing
            }}>
              <MaterialIcons name="logo-twitter" size={30} color="#0077B5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen;