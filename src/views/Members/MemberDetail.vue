<template>
  <div class="">
    <h1>This is Member Detail Page</h1>
    <div class="" v-if="member">
      <h4>{{ member.name }}</h4>
      <p>{{ member.position }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      member: null,
    };
  },
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/members/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.member = data;
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  },
};
</script>

<style></style>
