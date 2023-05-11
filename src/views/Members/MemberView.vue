<template>
  <div class="">
    <h1>This is Member View Page</h1>
    <h2>Members</h2>
    <div class="" v-for="member in members" :key="member.id">
        <router-link :to="{name:'memberdetail',params:{id:member.id}}" ><h4>{{ member.name }}</h4></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        members : []
    };
  },
  mounted(){
    fetch('http://localhost:3000/members')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      this.members = data
    })
    .catch((error)=>{
      console.log(error)
    })
  }
};
</script>

<style>
h4 {
  color: crimson;
  text-decoration: none;
}
</style>
