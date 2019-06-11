import * as types from './mutation-type'


export const initJokes=({commit})=>{
fetch('https://official-joke-api.appspot.com/random_ten',{


method:'GET'
}
).then(response=>response.json())
.then(json=>commit(types.INIT_JOKES,json))


    
}
export const add_Joke=({commit})=>{
    fetch('https://official-joke-api.appspot.com/random_joke',{
           method:'GET'
    }).then(response=>response.json())

      .then(json=>commit(types.ADD_JOKES,json))
}
export const Remove_joke=({commit},index)=>{
    commit(types.REMOVE_JOKE,index)
}