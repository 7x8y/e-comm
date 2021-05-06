  

<template>
    <div>
                
         <b-col col sm>
        <b-card
      :img-src="post.imgURL"
    tag="article"
    style="width: 18rem;margin: 0.5rem;"
    class="mb-2"
  >    

  <b-card-title>{{post.title}}</b-card-title>

    <b-card-text>
      {{post.productinfo}}
    </b-card-text>
 <router-link :to="'/productPage/' + post.id">
    <b-button   variant="primary" class="mr-sm-2">Open </b-button>
 </router-link>
     <b-button  variant="primary"> {{post.price}}  </b-button>
  </b-card>
         </b-col>
     </div>
</template>

<script>
// import Productpage from '@/components/Productpage.vue'
 export default {
    name:'Cards',
    // component: {Productpage},
        props: ['post'],
    
}
</script>