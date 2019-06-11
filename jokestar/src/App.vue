<template>
  <div id="app">
  <h2>Get Jokes...</h2>
  <div>
<button class="btn btn-success" @click="initJokes"> Add Ten Jokes</button>
<button class="btn btn-success" @click="add_Joke"> Add a Joke</button>
  </div>
  <span v-for="(box,index) in boxes" :key="index">
    
      <input type="checkbox" 
      :value="box" 
      v-model="checkedTypes"
      checked 
       >
    <label>{{box}}</label>
    </span>

  
  <div  id="joke" class="row">
    <joke v-for="(joke ,index) in $store.state.jokes"
    :key="index"
    :joke="joke"
    :index='index'
    >
    </joke> 
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import joke from './components/joke'
export default {
  name: 'app',
  data () {
    return {
boxes:['General','knock-knock','programming'],
checkedTypes:['General','knock-knock','programming']
}
  },
  methods:
    mapActions([
      'initJokes',
      'add_Joke'
    ]),
    components:{
      joke
    }

    }
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
#joke{
text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
