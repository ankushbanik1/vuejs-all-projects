<template>
  <div id="app"> 
<div id="note" class="carousel-caption" >
    <h2 class="display-3">NoteMaster</h2>

    <label>Title</label>
<input type="text" v-model="note.title" class="form-control">
<label>Text</label>
<textarea v-model="note.text" class="form-control"></textarea>

 <br><br>

 <button class="btn btn-primary btn-lg" @click="submit" >Create Note</button>
  <br><br>
  
  <div class="col-md-12">
    <div class="col-md-4">
      <div class="card" v-for="(note,index) in notes" :key="index">
       <div class="card-title">

     <h3>{{note.title}}</h3>
   <button class="close"  @click="removenote(index)">&times;</button>

     <div class="card-subtitle">
       <p>{{ note.date }}</p>
           <div class="card-text">
            <p>{{ note.text}}
 </p> 
  </div>
     </div>
       </div>
   </div>
    </div>
     
  </div>
</div>
  
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >

      </vue-particles>
  </div>
 
 
  
</template>

<script>

export default {

 data(){
   return{
    note:{
        title:"",
        text:""
      },
       notes:[
         {
         text:"Hawai Beach is a best beach i have seen ever, its so beautifull",
         title:" Hawai Sea Beach",
         date: new Date(Date.now()).toLocaleString()

         }],
   }
 },
     methods:{
   submit(){
 let {text,title}=this.note
     
     this.notes.push({
       title,
       text,
       date:new Date(Date.now()).toLocaleString()
     })
   },
    removenote(index){
this.notes.splice(index,1)
     },
 }
     }    
  

</script>

<style>
#app{
  background-color: rgb(5, 4, 4);
}
body{
  padding: 0%;
  margin: 0%;

}
h1{
  font-family: fantasy;
  color: aliceblue;
  text-align: center;
}
#main{
  text-align: center;
  text-shadow: 11em;
  font-style: initial;
  font-size: 20px;
  color: aliceblue;
  align-content: center;
}
label{
  color: aqua;
  font-size:30px;
}

.carousel-caption button{

text-shadow:1px 1px 10px #222;
text-height: 100%;
padding-bottom: 1rem;


}
.card h3{

background-color: aqua;
color: black;

}
.card p{
color: black;
}

.carousel-caption {

text-height: 50%;
padding-bottom: 1rem;
color: black;

}
#note h2{
  font-size: 500%;
  text-shadow: 1px 1px 5px blanchedalmond;
  color: rgb(50, 241, 66);
  padding-bottom: 1rem;

}
button{
 
 
}
</style>

