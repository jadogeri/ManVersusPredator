import { Character } from "../types/Chanacter"
const reducer = (state : Character, action ) => {

    switch(action.type){

        case "special":    
            if(state.totalPoints - action.amount < 0){
                return state
            }else{

                return (state.special + action.amount > 100 ||state.special + action.amount < 0 ) ?
                 state :   {...state,special : state.special + action.amount,totalPoints:state.totalPoints - action.amount}        
            }

        case "health":  
            
            if(state.totalPoints - action.amount < 0){
                return state

            }else{
                return (state.health + action.amount > 100 || state.health + action.amount < 0 ) ?
                    state : {...state,health : state.health + action.amount,totalPoints:state.totalPoints - action.amount}    

            }            

    case "strength":  
    
            if(state.totalPoints - action.amount < 0){

                return state;
            }else{
                return (state.strength + action.amount > 100 ||state.strength + action.amount < 0 )?
                    state : {...state,strength : state.strength + action.amount,totalPoints:state.totalPoints - action.amount}        

            }
        
    default:
        return state

    }

}

export default reducer;