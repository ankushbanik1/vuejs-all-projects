<template>
<div >
   
<h1>{{msgg}}</h1>
 <hr class="my-4">
        <hr class="my-4">
 <div class="container">
      <h3><label >Title:</label></h3>
 <input  v-model="note.title" class="form-control">
<br><br>
       <h3><label >Note:</label></h3>
<br><br>
 <textarea  v-model="note.text" class="form-control"></textarea>
<br><br>
<button v-on:click="createnote" class="btn btn-success btn-lg"  type="submit">Submit</button>
  </div>
 <br>
 <br>
<div class="row">
 <div v-for="(note,index) in notes " :key="index" >
  <div class="col-sm-4">
    <div class="card1">
      <div class="card-body">
        <h3 class="card-title">
          {{note.title}}
        </h3>
        <h5 class="card-text">
          {{note.text}}
        </h5>
          <div class="card-footer bg-transparent border-success">{{note.date}}</div>
                  <button @click="remove(index)" class="btn btn-primary">Delete</button>

      </div>
    </div>
  </div>
</div>
 </div>
</div>




</template>

<script>


export default {
  name: 'app',
  data () {
    return { 
      msgg:" Heartiest WellCome   To  Our NoteMaster",
     note: {
      title:"",
      text:"",
     

   
      },
      notes:[{ title:"Darjeeling hill ride",
          text:"Darjeeling hill ride, is the most best beautiful place in the west bengal, i like that place most, i want to go there with my family",
      date:Date(Date.now().toLocaleString())
         
      }]
      
      
     
}
  },
  methods:{
    createnote(){
      let{text,title}=this.note
      this.notes.push({
        title,
        text,
        date:Date(Date.now().toLocaleString())

        
        
      })
    },
    remove(index){
      this.notes.splice(index,1);
    }
  },
 

}
</script>

<style >
body{
  background: rgb(45, 45, 85);
}
label{
    color: rgb(163, 247, 151);
    font-size: 20px;
}
.row{
  padding: 5px;
  background: #d2dfdb;
  color: black;
}
.card1{
   background: #d2dfdb;

  border: 1px solid white;

}
.row h3{
  background-color: rgb(73, 200, 231);
}
.h1{
  color: greenyellow;
}
</style>
