<template>
    <div>
        <h1>hello product page no {{$route.params.id}}  </h1>
        
        <b-jumbotron>
    <template #header>BootstrapVue</template>

    <template #lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    
  </b-jumbotron>
    </div>
</template>

<script>
export default {
name:'Productpage',
props:['post'],
 
}
</script>