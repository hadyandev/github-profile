<template>
  <div id="repo">
    <div class="container">
      <Breadcumb class="mb-3" />
      <RepoDetail :repo="repo" />
      <div v-if="readme != ''">
        <ReadMe :readme="readme" class="mt-3" />
      </div>
      <div v-else>
        <p class="text-center mt-3">There is no README File.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Breadcumb from "@/components/Breadcumb";
import RepoDetail from "@/components/RepoDetail";
import ReadMe from "@/components/ReadMe";
export default {
  name: "Repo",
  components: {
    Breadcumb,
    RepoDetail,
    ReadMe
  },
  data() {
    return {
      username: this.$route.params.username,
      userRepo: this.$route.params.repo,
      repo: {},
      readme: ""
    };
  },
  created() {
    axios
      .get(
        "https://api.github.com/repos/" + this.username + "/" + this.userRepo
      )
      .then(response => {
        console.log(response);
        this.repo = response.data;

        axios
          .get(
            "https://api.github.com/repos/" +
              this.username +
              "/" +
              this.userRepo +
              "/readme"
          )
          .then(response => {
            console.log(response);
            this.readme = response.data.download_url;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
