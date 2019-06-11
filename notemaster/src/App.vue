<template>
    <div id="app">
     
    <notes/>
    </div>
    
 </template>
<script>
import note from './components/note'
export default {
  name: 'app',
  components: {
    "notes":note,
  }
}
</script>
