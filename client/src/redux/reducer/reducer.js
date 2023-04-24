import { ADD_FAVS, DELETE_FAVS, FILTER,ORDER, RESET } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};



function rootReducer (state = initialState, action) {
    switch(action.type) {
        // case ADD_FAVS:
        //     return {
        //        ...state,
        //        allCharacters: [...state.allCharacters, action.payload], 
        //        myFavorites: [...state.allCharacters, action.payload],
        //     }
        // case DELETE_FAVS: 
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter (
        //             (char) => char.id !== action.payload
        //         ),
        //     };

        case ADD_FAVS:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };

        case DELETE_FAVS: 
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload),
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
            };
                    
        case FILTER: 
        const filterByGender = [...state.allCharacters].filter((char) => char.gender === action.payload
        )
            return {
                ...state,
                myFavorites: filterByGender,
            };
      
        case ORDER:
            let orderFavorites;
            
            if (action.payload === "Lowest to highest") {
              orderFavorites = state.myFavorites.sort((a, b) =>
                a.id > b.id ? 1 : -1
              );
            } else {
              orderFavorites = state.myFavorites.sort((a, b) =>
                a.id < b.id ? 1 : -1
              );
            
            }
                return {
                  ...state,
                  myFavorites: [...orderFavorites],
                };
        case RESET:
          return {
            ...state,
            myFavorites: state.allCharacters,
          }
              
                
        default: return {...state};
    }
}

export default rootReducer;