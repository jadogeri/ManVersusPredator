import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MainFlowStackParamList } from "@/src/routes/navigation";
//import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type gameNavigationType = StackNavigationProp<MainFlowStackParamList,"Game">

const GameScreen = () => {
  //const navigation: NavigationProp<ParamListBase> = useNavigation(); default
  const navigation = useNavigation<gameNavigationType>();



  return <View style={{ backgroundColor: 'black', flex: 1 }}>
    <StatusBar/>

    <View style={{ flex: 3 }}>

      <Text style={styles.text}> MAN </Text>
      <Text style={styles.text}> Versus
      </Text>
      <Text style={styles.text}> The Predator
      </Text>
      <Image
        style={{
          alignSelf: 'center',
          height: 150,
          width: 150,
          marginTop: 30
        }}
        source={require('../../../assets/villainImages/PredatorHome.jpg')} />

    </View>

    <View style={{ flex: 1.25, alignItems: 'center' }}>
      <TouchableOpacity onPress={() =>{ navigation.navigate("Difficulty") }}
    >
        <Image source={require('../../../assets/icons/start.jpg')} />
      </TouchableOpacity>
    </View>

  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }

});

export default GameScreen;
 