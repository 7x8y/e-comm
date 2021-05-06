<template>
  <div class="home">
    <Header />
     
    <b-row>
    <Cards  
   v-for="post in card_datas"
  v-bind:key="post.id"
  v-bind:post="post"/>
  
  
    </b-row>
    
   </div>
</template>

<script>


// @ is an alias to /src
 import Header from '@/components/Header.vue'
import Cards from '../components/Cards.vue'
// import card_data from '@/assets/card_data.js'
// import Productpage from '@/components/Productpage.vue'
  
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header, Cards,
  },data(){
    return{
        card_datas: [
     {
    id: 0,
    title: "Red",
    imgURL:
      "https://wallpaperaccess.com/full/1163665.jpg",
    text: "Red nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Red"
  },
  {
    id: 1,
    title: "Blue",
    imgURL:
      "https://cdn.wallpapersafari.com/10/38/39cTHy.jpg",
    text: "Blue Nature",
    productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Blue"
  },
  {
    id: 2,
    title: "Orange",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIRtVFnel2l5CSrbnn1gq9W07WfgURWqSqw&usqp=CAU",
    text: "Orange Nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    price: "$Orange"
},
  {
    id: 3,
    title: "Red",
    imgURL:
      "https://wallpaperaccess.com/full/1163665.jpg",
    text: "Red nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    price: "$Red"
  },
  {
    id: 4,
    title: "Blue",
    imgURL:
      "https://cdn.wallpapersafari.com/10/38/39cTHy.jpg",
    text: "Blue Nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Blue"
  },
  {
    id: 5,
    title: "Orange",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIRtVFnel2l5CSrbnn1gq9W07WfgURWqSqw&usqp=CAU",
    text: "Orange Nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Orange"
},
  {
    id: 6,
    title: "Red",
    imgURL:
      "https://wallpaperaccess.com/full/1163665.jpg",
    text: "Red nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Red"
  },
  {
    id: 7,
    title: "Blue",
    imgURL:
      "https://cdn.wallpapersafari.com/10/38/39cTHy.jpg",
    text: "Blue Nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Blue"
  },
  {
    id: 8,
    title: "Orange",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIRtVFnel2l5CSrbnn1gq9W07WfgURWqSqw&usqp=CAU",
    text: "Orange Nature",
productinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: "$Orange"
  }
    ]
    }
  }
  
}
     
</script>
