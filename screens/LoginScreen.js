import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";
import { useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');

  const handleLogin = async () => {
    const url = 'https://nuage-portal-react.sdwan.llama2.cloud/sdwan/authservice/system/v8_0/login';

    const headers = {
      'Content-Type': 'application/json',
      'Client_id': 'sdwanportal',
      'Client_secret': 'vnsclientpassword'
    };

    const body = JSON.stringify({
      username,
      password,
      organization
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers,
        body,
        withCredentials: true,
        credentials: 'include'
      });
      console.log("HEREE"+response);
        if (response.ok) {
          console.log("COOOKIEEEES "+JSON.stringify(response.headers));
          const data = JSON.stringify(response);
          console.log("GETTING HEADERS "+JSON.stringify(response.headers));
          console.log('Second Query Successful', JSON.stringify(data));
          // navigation.navigate('home');
        } else {
          const responseData =  JSON.stringify(response);
          Alert.alert('Second Query Failed', responseData.message || 'Unexpected error occurred');
        }
      } catch (error) {
        console.log("HEREEEE"+ error);
        Alert.alert('Error', 'Failed to perform second query. Please try again later.');
      }
  };

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
            Login here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center"
            }}
          >
            Welcome back you've been missed!</Text>
        </View>
        <View style={{ marginVertical: Spacing}}>
        <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Organization"
        value={organization}
        onChangeText={setOrganization}
      />
        </View>

        <View>
          <Text style={{
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.small,
            color: Colors.primary,
            alignSelf: "flex-end"
          }}>Forgot your password?</Text>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
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
          onPress={() => navigation.navigate("Register")}
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
            Create new account
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
  );
};

export default LoginScreen;

const styles = StyleSheet.create({})