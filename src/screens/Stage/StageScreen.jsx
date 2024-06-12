import React, { useReducer } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GameBoard from "../../components/GameBoard";
import ButtonController from "../../components/ButtonController"
import GameStatusText from "../../components/GameStatusText";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { MainFlowStackParamList } from "@/src/routes/navigation";
import {battleReducer} from "../../reducers/battleReducer"
import {gameOverPrompt} from "../../utils/gameOverPrompt"
import {buttonPressed} from "../../constants/buttonPressed"
import { styles } from "./StageStyles"


//type characterScreenRouteTypesa = RouteProp<MainFlowStackParamList,"Character">;


/**
 * 
import { MainFlowStackParamList } from "@/src/routes/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import attributeReducer from "../../reducers/attributeReducer"

type characterScreenRouteTypes = RouteProp<MainFlowStackParamList,"Character">;
type characterScreenNavigationTypes = StackNavigationProp<MainFlowStackParamList,"Character">

const CharacterScreen = () => {
    const {params} = useRoute<characterScreenRouteTypes>();
    const navigation = useNavigation<characterScreenNavigationTypes>();
    //unpack params and get value from prior screen
    const {value} = params} health 

 */


////////////////////monster data//////////////

//level of Predato strength and health will
// be dependent on the user game level

let monsterHealRate;
let monsterStrengthRate;
let monsterAbilityRate;
let monsterMessage = ``;
let randomAttackValue = 0;
let monsterAbilityUsed = 0;

let randomAttack = {
    bite: 9,
    punch: 5,
    ricochet: 3,
    graze: 1,
    miss: 0,
    laser: 15,
    spear: 7,
}

function gameSetting(state) {

    //setting the rate based on game difficulty
    if (state.level === 250) {
        monsterHealRate = 4
        monsterStrengthRate = 2
        monsterAbilityRate = 3

    }
    else if (state.level === 200) {
        monsterHealRate = 7
        monsterStrengthRate = 6
        monsterAbilityRate = 7

    }
    else {
        monsterHealRate = 9
        monsterStrengthRate = 9
        monsterAbilityRate = 9

    }

    let attack = Object.keys(randomAttack)
    const damage = attack[Math.floor(Math.random() * attack.length)]
    //assign the value for the random hit
    randomAttackValue = randomAttack[damage]

    //assigning new rate for the monster
    // to keep attributes <= 100
    if (state.monsterHealth === 100) {
        monsterHealRate = 0;
    } else {
        if (monsterHealRate + state.monsterHealth >= 100)
            monsterHealRate = 100 - state.monsterHealth
    }

    if (state.monsterStrength === 100) {
        monsterStrengthRate = 0;
    } else {
        if (monsterStrengthRate + state.monsterStrength >= 100)
            monsterStrengthRate = 100 - state.monsterStrength
    }

    if (state.monsterAbility === 100) {
        monsterAbilityRate = 0;
    } else {
        if (monsterAbilityRate + state.monsterAbility >= 100)
            monsterAbilityRate = 100 - state.monsterAbility
    }
    //random messages displayed on phone

    if (randomAttackValue === 0) {
        monsterAbilityUsed = 0

        monsterMessage = `${state.monsterName}  missed you , the\n ${state.monsterName}
    healed by ${monsterHealRate}  `
    }
    else if (randomAttackValue === 1) {
        monsterAbilityUsed = 0

        monsterMessage = `${state.monsterName}  ${damage} you , taking ${randomAttackValue} points the\n ${state.monsterName}
   healed by ${monsterHealRate}  `
    }
    else if (randomAttackValue === 3)
        monsterMessage = `${state.monsterName}  ${damage} you , taking ${randomAttackValue} points the\n ${state.monsterName}
    healed by ${monsterHealRate}  `

    else if (randomAttackValue === 5) {
        monsterAbilityUsed = 0

        monsterMessage = `${state.monsterName}  ${damage} you , taking ${randomAttackValue} points the\n ${state.monsterName}
    healed by ${monsterHealRate}  `
    }

    else if (randomAttackValue === 7) {
        monsterAbilityUsed = 0

        monsterMessage = `${state.monsterName}  ${damage} you , taking ${randomAttackValue} points the\n ${state.monsterName}
    healed by ${monsterHealRate}  `
    }

    else if (randomAttackValue === 9) {
        monsterAbilityUsed = 0

        monsterMessage = `${state.monsterName}  ${damage} you , taking ${randomAttackValue} points the\n ${state.monsterName}
    healed by ${monsterHealRate}  `
    }
    else {
        if (state.monsterAbility < randomAttack.laser) {
            monsterAbilityUsed = 0
            monsterMessage = `${state.monsterName} cause 0 damage using ${damage} on ${state.fighterName} 
        `

        } else {
            monsterAbilityUsed = randomAttack.laser
            monsterMessage = `${state.monsterName} used special ability ${damage} on ${state.fighterName} , taking ${randomAttackValue} points the\n ${state.monsterName}
    healed by ${monsterHealRate}  `
        }
    }

}


const StageScreen = (props) => {
    //props.navigation.getParam('value'),MAX:props.navigation.getParam('value')
    const [state, dispatch] = useReducer(battleReducer, {
        fighterPrompt: 'fight in commence what would you like to do',
        monsterPrompt: 'Predator is ready for battle',
        fighterHealth: props.navigation.getParam('health'),
        fighterAbility: props.navigation.getParam('special'),
        fighterStrength: props.navigation.getParam('strength'),
        monsterName: "Predator",
        monsterHealth: 50,
        monsterAbility: 50,
        monsterStrength: 50,
        fighterName: props.navigation.getParam('name'),
        level: props.navigation.getParam('MAX')
    });

    return <View style={styles.gameScreenStyle}>

        <View style={styles.statsBoard}>
            <GameBoard contestantName={state.fighterName} contestantHealth={state.fighterHealth}
                contestantStrength={state.fighterStrength} contestantSpecial={state.fighterAbility} />
            <GameBoard contestantName={state.monsterName} contestantHealth={state.monsterHealth}
                contestantStrength={state.monsterStrength} contestantSpecial={state.monsterAbility} />

        </View>

        <View style={styles.fighterImageStyle}>
            <Image source={(state.fighterHealth > 0) ?
                require('../../../assets/villainImages/arnold.jpg') :
                require('../../../assets/villainImages/arnold2.jpg')}

                style={styles.image} />
            <Image source={(state.monsterHealth > 0) ?
                require('../../../assets/villainImages/Predator.jpg') :
                require('../../../assets/villainImages/Predator2.jpg')}
                style={styles.image} />
        </View>
        <View style={{ borderColor: 'black', flex: 0.75 }}>

            <GameStatusText textOnScreen={(state.monsterHealth > 0 && state.fighterHealth > 0) ?
                state.fighterPrompt : gameOverPrompt(state.fighterHealth, state.fighterName)} />
            <GameStatusText textOnScreen={(state.monsterHealth > 0 && state.fighterHealth > 0) ?
                state.monsterPrompt : gameOverPrompt(state.monsterHealth, state.monsterName)} />
        </View>

        <View style={{ flex: 0.5, backgroundColor: 'black', margin: 1, alignItems: 'center', paddingBottom: 1 }}>
            <View style={styles.buttons} >
                <ButtonController imageSource={require('../../../assets/weaponImages/grenade.png')} buttonHandler={() => { dispatch({ attributeToUse: "grenade", amount: buttonPressed.GRENADE }); }} />

                <ButtonController imageSource={require('../../../assets/weaponImages/Fireball.jpg')} buttonHandler={() => { dispatch({ attributeToUse: "fire", amount: buttonPressed.FIRE }); }} />

                <ButtonController imageSource={require('../../../assets/weaponImages/gun.jpg')} buttonHandler={() => { dispatch({ attributeToUse: "gun", amount: buttonPressed.MACHINEGUN }); }} />

                <ButtonController imageSource={require('../../../assets/weaponImages/fight.jpg')} buttonHandler={() => { dispatch({ attributeToUse: "punch", amount: buttonPressed.PUNCH }) }} />

            </View>
            <View style={styles.buttons} >
                <ButtonController imageSource={require('../../../assets/weaponImages/healthPack.png')} buttonHandler={() => { dispatch({ attributeToUse: "health", amount: buttonPressed.HEAL }); }
                } />

                <ButtonController imageSource={require('../../../assets/weaponImages/grenadeLauncher.jpg')} buttonHandler={() => { dispatch({ attributeToUse: "launcher", amount: buttonPressed.LAUNCHER }); }} />

                <ButtonController imageSource={require('../../../assets/weaponImages/knife.jpg')} buttonHandler={() => { dispatch({ attributeToUse: "knife", amount: buttonPressed.KNIFE }); }} />

                <ButtonController imageSource={require('../../../assets/weaponImages/specialAbility.png')} buttonHandler={() => { dispatch({ attributeToUse: "special", amount: buttonPressed.SPECIAL }) }} />

            </View>

        </View>

    </View>
};

