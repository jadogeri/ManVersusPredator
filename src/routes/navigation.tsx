import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CharacterScreen from "../screens/Character/CharacterScreen";
import GameScreen from "../screens/Game/GameScreen";
import DifficultyScreen from "../screens/Difficulty/DifficultyScreen";
import StageScreen from "../screens/Stage/StageScreen";
import { Character } from "../types/Chanacter";

export type MainFlowStackParamList = {
  "Game" : undefined,
  "Character" : {value : number},
  "Difficulty" : undefined,
  "Stage": Character
}

const Stack = createNativeStackNavigator<MainFlowStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Game">
            <Stack.Screen name="Game" component={GameScreen}  options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Character" component={CharacterScreen} />
            <Stack.Screen name="Difficulty" component={DifficultyScreen} />
            <Stack.Screen name="Stage" component={StageScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({})

