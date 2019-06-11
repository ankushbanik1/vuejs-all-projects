<template>
  <div>
    <spinner/>
 
    <h1>{{msg}}</h1>
    
     
       <nav>
         <h4>
           <router-link to="/data/people" >Meet The People</router-link> |
    <router-link  to="/data/planets" >Explore The planet</router-link>
 </h4> 
       </nav>
   
 <br>
 <br>
 <router-view/>
 
<br><br>
<character/>
  </div>
</template>

<script>
import character from './components/character'
import spinner from './components/spinner'
//  import { mdbSpinner } from 'mdbvue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Create Your Team At StarBase'
    }
  },
  components:{
    character,
    spinner,
  },
  
}
 
</script>

<style>
body{
align-content: center;
  background:#263238;
  font: bold;
  color:white;
  text-align: center;

  }

</style>
