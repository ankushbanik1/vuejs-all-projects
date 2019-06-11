<template>
    <div class="add-smothie container">
        <h2>Add a  New Smothie Recipie</h2>
       <form @submit.prevent="AddSmothie">
        <div class="field title">
       <label for="add-smothie">Add a New Smothie:</label>
            <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ing,index) in ingredients" :key="index">
            <label for="add-ingredients">Add Ingredients:

            </label>
            <input type="text" name="add-ingredients" v-model="ingredients[index]">
        </div>
 <div class="field ingredients">
           <h2> <label for="add-smothie">Add New Ingredients:</label></h2>
            <input type="text" name="ingredients" v-model="another" @keydown.enter.prevent="adding">
        </div>
        <div>
             
        <p class="red-text" v-if="feedback">{{feedback}}</p>
        <button class="btn pink">Add Smothie</button>
       </div>
       </form>
    </div>
</template>

<script>
export default {
    name:'',
    data(){
        return{
title:null,
another:null,
ingredients:[],
feedback:null

        }
    },
    methods:{
AddSmothie(){
  
    console.log(this.ingredients)
    
},
adding(){
    if(this.another){
        this.ingredients.push(this.another)
        this.another=null
        this.feedback=null
    }else{
        this.feedback='You have to add some ingredients atfirst'
    }
}
    }
}
</script>

<style scoped>
.add-smothie{
    font-size: 2em;
    max-width: 800px;
    padding: 20px;
    margin-top: 60px;
    color:chocolate;
}
label{
    font-size: 1rem;
}
</style>

