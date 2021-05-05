 <template>
     <div >
         <Header></Header>
         <div style="align-items-center">
          <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <div>
         <b-form-group
         label="Username"
         class="text-left"
          >
              
 <b-form-input id="username" class="w-80" v-model="text1" placeholder="Enter Username"></b-form-input>
    </b-form-group>
    <!-- <div class=" text-left w-25  ">Value: {{ text1 }}</div> -->
    </div>
    

       <div>
         <b-form-group
         label="mail_id"
         class="text-left"
          >
              
 <b-form-input id="mail-id" class="w-80" v-model="text2" placeholder="Enter Email-id"></b-form-input>
    </b-form-group>
    <!-- <div class=" text-left w-25  ">Value: {{ text2 }}</div> -->
    </div>

       <div>
         <b-form-group
         label="Password"
         label-for="password"
         class="text-left"
          >
              
 <b-form-input id="password" class="w-80" type="password" v-model="password" placeholder="Enter Password"></b-form-input>
    </b-form-group>
    <b-button class="ml-sm" variant="primary">Button</b-button>
     </div>
   

   </b-card>
   </div>
         

         
     

  
  </div>
</template>

 


   

   

  

<script>
 import Header from './Header'
export default {
    name:'Login',
    components:{
        Header
        },
    data(){
    return{
        text1:'',
        text2:'',
        password:''
    }
}

}
 
</script>