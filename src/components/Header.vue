<template>
    <div>
  <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

 
       

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mr-sm-2" variant="outline-light" type="submit">Search</b-button>
        </b-nav-form>
 <b-navbar-nav>
     <b-button variant="primary" class="mr-sm-2">+Cart</b-button>
        
        <router-link to='/login'>
         
        <b-button variant="primary">Login</b-button>
        </router-link>
      </b-navbar-nav>
    
      </b-navbar-nav>
   </b-navbar>
</div>
</template>

<script>
export default {
    name:'Header'
}
</script>