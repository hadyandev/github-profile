<template>
  <div>
    <div class="container">
      <Breadcumb class="mb-3" />
      <UserDetail :user="user" />
      <p class="mt-5">List of Repositories</p>
      <RepoList :username="username" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Breadcumb from "@/components/Breadcumb.vue";
import UserDetail from "@/components/UserDetail.vue";
import RepoList from "@/components/RepoList.vue";

export default {
  name: "User",
  components: {
    Breadcumb,
    UserDetail,
    RepoList
  },
  data() {
    return {
      username: this.$route.params.username,
      user: {}
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/" + this.username)
      .then(response => {
        // console.log(response);
        this.user = response.data;
      })
      .catch(err => {
        // console.log(err);
        this.username = err;
      });
  }
};
</script>
