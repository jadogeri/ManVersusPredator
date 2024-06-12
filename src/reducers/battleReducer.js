export const battleReducer = (state, action) => {

    gameSetting(state);

    switch (action.attributeToUse) {

        case "health":

            if (state.fighterHealth === 100) {
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} is at full health`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    monsterPrompt: monsterMessage,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed
                }

            } else {
                if (state.fighterHealth + action.amount > 100 && state.fighterStrength >= action.amount)
                    return {
                        ...state,
                        fighterPrompt: ` ${state.fighterName} is at full health  invincible`,
                        fighterStrength: state.fighterStrength,
                        fighterAbility: state.fighterAbility,
                        monsterPrompt: monsterMessage,
                        monsterHealth: state.monsterHealth + monsterHealRate,
                        fighterHealth: 100 - randomAttackValue,
                        monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                        monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                    }
                else if (state.fighterHealth + action.amount < 100 && state.fighterStrength >= action.amount)
                    return {
                        ...state,
                        fighterPrompt: ` ${state.fighterName} increased health by ${action.amount}`,
                        fighterStrength: state.fighterStrength,
                        fighterAbility: state.fighterAbility,
                        monsterPrompt: monsterMessage,
                        monsterHealth: state.monsterHealth + monsterHealRate,
                        fighterHealth: state.fighterHealth - randomAttackValue + action.amount,
                        monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                        monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                    }
                else
                    return {
                        ...state,
                        fighterPrompt: ` ${state.fighterName} not enough strength to heal `,
                        fighterStrength: state.fighterStrength + 10,
                        fighterAbility: state.fighterAbility,
                        monsterPrompt: monsterMessage,
                        monsterHealth: state.monsterHealth + monsterHealRate,
                        fighterHealth: state.fighterHealth - randomAttackValue + action.amount,
                        monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                        monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                    }
            }

        case "fire":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} lacks the fire to burn the Predator`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }
            else
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} points of fire to burn the Predator`,
                    fighterStrength: state.fighterStrength - action.amount,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate - action.amount,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }
        case "gun":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} lacks the ammo to hurt the Predator`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }
            else
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} points of bullets hurt the Predator`,
                    fighterStrength: state.fighterStrength - action.amount,
                    monsterHealth: state.monsterHealth - action.amount + monsterHealRate,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate,

                }
        case "grenade":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} lacks strength to use a grenade`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate
                }
            else
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} points to blow up the Predator`,
                    fighterStrength: state.fighterStrength - action.amount,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate - action.amount,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }
        case "punch":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} lacks strength to fight the Predator`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate
                }
            else
                return {
                    ...state,
                    monsterHealth: state.monsterHealth - action.amount,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} points of punching the Predator`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }
        case "knife":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} is weak to use a knife`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate
                }
            else
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} sharp knife to slash the Predator`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate - action.amount,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate


                }
        case "launcher":
            if (state.fighterStrength < action.amount)
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} is out of grenade lauchers ammo`,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue + action.amount,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate
                }
            else
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} points of grenades propelled against the Predator`,
                    fighterStrength: state.fighterStrength - action.amount,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate - action.amount,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate

                }

        case "special":
            if (state.fighterAbility < action.amount) {
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} not enough strength to use special `,
                    fighterStrength: state.fighterStrength,
                    fighterAbility: state.fighterAbility,
                    monsterPrompt: monsterMessage,
                    monsterHealth: state.monsterHealth + monsterHealRate,
                    fighterHealth: state.fighterHealth - randomAttackValue,
                    monsterStrength: state.monsterStrength - randomAttackValue + monsterStrengthRate,
                    monsterAbility: state.monsterAbility - monsterAbilityUsed + monsterAbilityRate
                }

            } else {
                return {
                    ...state,
                    fighterPrompt: ` ${state.fighterName} used ${action.amount} volts against the predator`,
                    fighterAbility: state.fighterAbility - action.amount,
                    fighterHealth: state.fighterHealth + action.amount,
                    fighterStrength: state.fighterStrength,
                    monsterHealth: state.monsterHealth - action.amount,
                    monsterPrompt: `the predator is hurt bad by ${state.fighterName}`

                }
            }

        default:

            return state
    }
}
