<template>
  <div class="">
    <h1>This is Job View Page</h1>
    <h2>Types Of Jobs:</h2>
    <div class="joblink" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobdetail', params: { id: job.id } }"
        ><h4>{{ job.title }}</h4></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.jobs = data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
h2 {
  color: rgb(16, 129, 129);
}
</style>
