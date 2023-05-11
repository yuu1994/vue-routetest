<template>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to="{name:'job'}" >Job</router-link> |
    <router-link :to="{name:'member'}" >Member</router-link> 
  </nav>
  <router-view/>
  
  <button @click="redirect">Redirect</button>
  <button @click="goBack">GoBack</button>
  <button @click="goForward">GoForward</button>
</template>

<script>
export default {
    methods : {
      goBack(){
        this.$router.go(-1)
      },
      goForward(){
        this.$router.go(1)
      },
      redirect(){
        this.$router.push({name : 'home'})
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #18af6b;
}
</style>
