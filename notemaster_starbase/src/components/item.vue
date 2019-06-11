<template>

  <div class="col-sm-4">
    <div class="card1">
      <div class="card-body">
        <h3 class="card-title">
   <strong>Title:</strong>{{item.name}}
        </h3>
        <h5 class="card-text">
          <div v-for="(value,key ,index) in item" :key="index" >
     
         <div v-if="index<5">
         <strong>{{key}}</strong>:{{value}}

         </div>
          </div></h5>
     </div> 
   
     <button class="btn btn-success" 
     
      @click="switchItem">Next </button>
</div>
   </div>
   

   
</template>
<script>
export default {
    props:[
'passedItem'
    ] 
    ,
    data(){
        return{
        item: {},
      type:this.$route.params.type            
           
        }
    },
    methods:{
         switchItem() {
      let random_id = Math.floor(Math.random() * 63) + 1
      fetch(`https://swapi.co/api/${this.type}/${random_id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => this.item = json)
    },
    },
    created(){
        this.item=this.passedItem
    }
        


  
  
}
</script>
<style scoped>
.row{
  padding: 5px;
  
  color: black;
}
.h1{
color: darkorange;
}
.card1{
  border: 1px solid white;
      background-color: rgb(94, 117, 179);

}
.row h3{
  background-color: rgb(249, 254, 255);
  color: black;
}
body{
   
  background: rgb(45, 45, 85);

}
</style>

