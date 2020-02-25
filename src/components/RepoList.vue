<template>
  <div id="repo-list">
    <div class="card">
      <ul class="list-group list-group-flush">
        <RepoListItem
          v-for="repo in repos"
          :repo="repo"
          :username="username"
          :key="repo.id"
        ></RepoListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RepoListItem from "@/components/RepoListItem";

export default {
  name: "RepoList",
  components: {
    RepoListItem
  },
  props: ["username"],
  data() {
    return {
      repos: []
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/" + this.username + "/repos")
      .then(response => {
        console.log(response);
        this.repos = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
