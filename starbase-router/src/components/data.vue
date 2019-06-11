<template>
<div class="col-md-12"  >
  <div>
   <item v-for="(item,index) in items" :passedItem='item' :key="index">

   </item>
  </div>
</div>


</template>

<script>
import  item from './item'

export default {
  name: 'app',
  data () {
    return {
      type: this.$route.params.type,
      items:[]
    }
  },
   watch:{
    '$route':"fetchItems"
  },
 methods: {
    fetchItems() {
      this.items = []
      this.type = this.$route.params.type
      let initial_ids = [1, 13, 14]
      for (let i in initial_ids) {
        let id = initial_ids[i]
        console.log('id', id)
        fetch(`https://swapi.co/api/${this.type}/${id}`, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.items.push(json))
      }
    }
  },
  created(){
    this.fetchItems()
  },
  components:{
    item
  }

}


</script>

<style>
.item-card{
  border: 2px solid #4FC08D;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}


</style>
