<template>
    <div class="col-md-6">
        <div class="joke-card">

            <div class="card-block">
                <button class="close" @click="Remove_joke(index)"><span>&times;</span></button>
                
<h5><u>{{joke.setup}}</u></h5>
<p><em>{{joke.punchline}}</em></p>

            </div>
             </div>
         </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    props:['joke','index'],
   methods:mapActions([
'Remove_joke'
   ])
       
  
    
}
</script>
<style scoped>
.joke-card{
    border: 2px solid black;
    padding: 5px;
    margin: 5px;
}
</style>
