<template>
  <div class="">
    <h1>This is Job Detail Page</h1>
    <div class="" v-if="job" >
      <h4>{{ job.title }}</h4>
    <p>{{ job.jobName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/"+this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
