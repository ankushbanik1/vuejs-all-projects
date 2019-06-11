<template>
  <div >
<nav class="nav-extended indigo darken-2">
<div class="nav-content">
<router-link :to="{name: 'index'}">
  <span class="nav-title">
    NinJa-Smothies
  </span>
</router-link>
<a href="" class="btn-floating btn-large halfway-fab pink">

  <i><router-link :to="{name:'Addsmothie'}" class="material-icons">add</router-link></i>
</a>

</div>

</nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
navbar .nav-title{
  text-align: left;
}
</style>
