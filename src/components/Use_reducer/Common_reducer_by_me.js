import React from 'react'

export function Common_reducer_by_me(state,action) {
    if(action.type == "INCREMENT"){
        return {
            age: state.age + 1
        };
    }
    if (action.type == "DECREMENT"){
        return{
            age : state.age - 1
        };
    }
}
