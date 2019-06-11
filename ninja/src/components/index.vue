<template>
<div class="container">
    <div class="index " >
        <div class="card" v-for="smothie in smothies" :key="smothie.id">
<div class="card-content">
    <i class="material-icons delete" @click="deletesmothie(smothie.id)">delete</i>
    <h2><div class="indigo-text">

        {{smothie.title}}
        
    </div></h2>
    <ul class="ingredients">
        <li v-for="(ing,index) in smothie.ingredients " :key="index">
<span class="chip">{{ ing }}</span>
</li>
       </ul> </div>
</div>
        </div>
</div>
    
</template>
<script>
import db from '@/firebase/init'
export default {
    data(){
        return{
            smothies:[]
        }
    },
    
    methods:{
        deletesmothie(id){
db.collection('smothie').doc(id).delete()
.then(()=>{
    this.smothies=this.smothies.filter(smothie=>{
return  smothie.id!=id
})
}
)
        }
    },
    created(){
        db.collection('smothie').get()
        .then(snappshot=>{

              snappshot.forEach(docc=>{
let smoo =docc.data()
smoo.id=docc.id
this.smothies.push(smoo)
              }
              )
        })
        

        
    }

}











</script>
<style scoped>
.index{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px;
margin-top: 60px;
margin: 0%;
padding-top: 40px;
}
.index h2{
    font-size: 1.8em;
margin: 0;
}
.index .ingredients  li {
    display: inline-block;
    


}
.index .delete{
    position: absolute;
    cursor: pointer;
    right: 4px;
    top: 4px;
    color: #aaa;
    font-size: 1.4em;
}
</style>
