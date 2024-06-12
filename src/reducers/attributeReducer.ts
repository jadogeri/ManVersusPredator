import { AttributeDispatch } from "../actionTypes/AttributDispatch"
import { Character } from "../types/Chanacter"
const reducer = (state : Character, action : AttributeDispatch  ) => {

    switch(action.type){

        case "SPECIAL":    
            if(state.totalPoints - action.payload < 0){
                return state
            }else{

                return (state.special + action.payload > 100 ||state.special + action.payload < 0 ) ?
                 state :   {...state,special : state.special + action.payload,totalPoints:state.totalPoints - action.payload}        
            }

        case "HEALTH":  
            
            if(state.totalPoints - action.payload < 0){
                return state

            }else{
                return (state.health + action.payload > 100 || state.health + action.payload < 0 ) ?
                    state : {...state,health : state.health + action.payload,totalPoints:state.totalPoints - action.payload}    

            }            

    case "STRENGTH":  
    
            if(state.totalPoints - action.payload < 0){

                return state;
            }else{
                return (state.strength + action.payload > 100 ||state.strength + action.payload < 0 )?
                    state : {...state,strength : state.strength + action.payload,totalPoints:state.totalPoints - action.payload}        

            }
        
    default:
        return state

    }

}

export default reducer;