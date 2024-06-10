import React, { useReducer } from "react";
import {View, Text, StyleSheet, ScrollView,Button } from "react-native";
import GuageButton from "../../components/GuageButton";
import AttributeDetail from "../../components/AttributeDetail";
import PlayerPointStatus from "../../components/PlayerPointStatus";
import { INCREMENT, STATUS_POWER, STATUS_ZERO } from "@/src/constants/characterScreenConstants";
import { Character } from "@/src/types/Chanacter";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { MainFlowStackParamList } from "@/src/routes/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import reducer from "../../reducers/characterReducer"


type characterScreenRouteTypes = RouteProp<MainFlowStackParamList,"Character">;
type characterScreenNavigationTypes = StackNavigationProp<MainFlowStackParamList,"Character">

const CharacterScreen = () => {
    const {params} = useRoute<characterScreenRouteTypes>();
    const navigation = useNavigation<characterScreenNavigationTypes>();
    //unpack params and get value from prior screen
    const {value} = params


    const playerName = { name: 'Arnold'}

    const player : Character = {
        name : playerName.name,
        special : 0,
        strength : 0,
        health : 0,
        totalPoints : value,
        MAX : value
    }


    
    const [state,dispatch] = useReducer(reducer,player)
    console.log(state);

    return <View style={styles.background}>
        <ScrollView>          
           
                    <PlayerPointStatus text={state.totalPoints === state.MAX ? STATUS_ZERO : STATUS_POWER}/>                    

                    <Text style={styles.textStyle}>Total Points Remaining is {state.totalPoints}</Text>
            <View>
                                                 
                    <AttributeDetail title="health" imageSource={require('../../../assets/icons/fighterHealth.png')} />

                    <GuageButton attribute="health"  value={state.health} increase={() =>{dispatch({type : "health",amount:INCREMENT});}}
                                                                  decrease={() =>{dispatch({type : "health",amount:-1*INCREMENT});}} />
                    <AttributeDetail title="strength" imageSource={require('../../../assets/icons/strength.jpg')} />

                    <GuageButton attribute="strength" value={state.strength} increase={() =>{dispatch({type : "strength",amount:INCREMENT});}}
                                                                  decrease={() =>{dispatch({type : "strength",amount:-1*INCREMENT});}} />                   
                    <AttributeDetail title="specialability" imageSource={require('../../../assets/icons/specialAbility.png')} />

                    <GuageButton attribute="special ability"  value={state.special} increase={() =>{dispatch({type : "special",amount:INCREMENT});}}
                                                                  decrease={() =>{dispatch({type : "special",amount:-1*INCREMENT});}} />

                   <View style={{flex:0.05}}>
                    <Button style={styles.button} title = {state.totalPoints === 0 ? "BEGIN GAME":"USE ALL POINTS"}
                                    onPress = {state.totalPoints === 0 ? () => {navigation.navigate("Stage",state)} : ()=>{} }/>
                                   
                    </View>
              
            </View>

        </ScrollView>


    </View>

}

const styles = StyleSheet.create({

    text: {

        margin: 10,
        borderWidth: 10,
        borderColor: 'green',
        padding: 1

    },
    background:{

        flex:1,
        backgroundColor :'gray',
        textShadowColor : 'green',
        textShadowRadius:20
    },
    button:{
        width:20,
        height:50,
    },
    textStyle:{
        fontSize: 50,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'green',
        textShadowRadius:20   
    },
    textHeader:{
        fontSize: 20,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'green',
        textShadowRadius:20
    }

});

export default CharacterScreen;



/**
 * // An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

// An example of using the `useReducer` hooks with our reducer function and an initial state
const Counter: FunctionComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      {/* Calling our actions on button click */
//       <button
//         onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
//       >
//         -
//       </button>
//       <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}>+</button>
//     </div>
//   );
// };
//  */