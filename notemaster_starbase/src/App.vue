<template> 
  <div>
  <home/>
  </div>
</template>

<script>
import note from './components/notemaster'
import home from './components/home'
import data from './components/data'

export default {
  name: 'app',
  data () {
    return {
      msg: 'WellCome You  to'
    }
  },
  
  components:{
   home,
  
}
}
</script>

<style >
body{
  color: aliceblue;
  text-align: center;

}
h2{
  color: aqua;
}
</style>
