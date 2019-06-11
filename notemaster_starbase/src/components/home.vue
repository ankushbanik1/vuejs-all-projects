
<template>
    <div>
   
      <router-view/>
      <h2>
  <router-link to="/data/people">Explore People ||</router-link>
  <router-link to="/data/planets">Explore Planets ||</router-link>
  <router-link to="/notemaster">Explore NoteMaster </router-link>

</h2>
 
 <br>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

 <style scoped>
 h1{
   color: yellow;
 }
 </style>
