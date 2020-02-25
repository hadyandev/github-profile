<template>
  <div id="app">
    <br />
    <br />
    <br />
    <Navbar />
    <router-view />
    <footer class="text-center mt-5 mb-3">&copy; GithubProfile</footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style></style>
