<template>
 <div class="item-card" >
   <div class="card-block">
     <div class="card-title">
   <h4><strong>Title:</strong>{{item.name}}</h4>
     <div v-for="(value,key ,index) in item" >
     
         <div v-if="index<5">
         <strong>{{key}}</strong>:{{value}}

         </div>
     </div>  
     <button class="btn btn-info" 
     
      @click="switchItem">Change Option</button>
</div>
   </div>
</div>
   

</template>
<script>

export default {
  props: ['passedItem'],
  data() {
    return {
      item: {},
      type:this.$route.params.type
    }
  },
  methods: {
    switchItem() {
      let random_id = Math.floor(Math.random() * 63) + 1
      fetch(`https://swapi.co/api/${this.type}/${random_id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => this.item = json)
    }
  },
  created() {
    this.item = this.passedItem
  }
}
</script>