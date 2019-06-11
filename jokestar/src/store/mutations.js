import * as types from './mutation-type'

export const  mutations={
    [types.INIT_JOKES](state,payload){
        state.jokes.push(...payload)
    },
    [types.ADD_JOKES](state,payload){

    state.jokes.push(payload)
},
[types.REMOVE_JOKE](state,index){
    state.jokes.splice(index,1)
}
}
