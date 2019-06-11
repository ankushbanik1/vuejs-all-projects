<template>
<div>
    <h1>{{msg}}: {{type}}</h1>
 <hr class="my-4">
        <hr class="my-4">
 <div class="row"  >
  <item v-for="(item,index) in items" :passedItem='item' :key="index">
  </item>
</div>
</div>
</template>
<script>
import item from './item.vue'
export default {
    data(){
        return{
            type:this.$route.params.type,
            items:[],
            msg:'Heartiest WellCome   To  OurStarBase '
         
        }
    },
    watch:{
    '$route':'fetchitem'
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
  

    
    fetchitem(){
        this.items=[],
     this.type = this.$route.params.type
     let initial_id=[1,2,3,4,5,6,7,8,9]
     for( let i in initial_id){

        let id =initial_id[i]
     console.log('id',id)
     fetch(`https://swapi.co/api/${this.type}/${id}`,
     {
         method:'GET'
     }).then(response=> response.json())
     .then(json=>this.items.push(json))
}
  
    
  }
  
},
  created(){
    this.fetchitem()
  },
components:{
    item,
}
  
}
</script>
<style scoped>
body{
   
  background: rgb(10, 10, 54);

}
</style>
