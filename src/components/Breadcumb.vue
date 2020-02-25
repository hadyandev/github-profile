<template>
  <div>
    <nav aria-label="breadcrumb" v-if="username == null && userRepo == null">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb" v-else-if="userRepo == null">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ username }}
        </li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb" v-else>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'User' }">{{ username }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ userRepo }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ButtonControls",
  data() {
    return {
      username: this.$route.params.username,
      userRepo: this.$route.params.repo
    };
  }
  // methods: {
  //   goHome() {
  //     this.$router.push({ name: "Home" });
  //   },
  //   goBack() {
  //     this.$router.go(-1);
  //   },
  //   goForward() {
  //     this.$router.go(1);
  //   }
  // }
};
</script>

<style></style>
