<template>
  <div class="card mb-3 text-center">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.avatar_url" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }} (@{{ user.login }})</h5>
          <p class="card-text">
            {{ user.bio }}
          </p>
          <p class="card-text">
            <small
              >{{ user.public_repos }} Public Repos |
              {{ user.public_gists }} Public Gists</small
            >
          </p>
          <p class="card-text">
            <small class="text-muted"
              >{{ user.following }} following |
              {{ user.followers }} followers</small
            >
          </p>
          <a
            target="_blank"
            :href="user.html_url"
            class="btn btn-dark btn-sm text-white"
            >Visit This Profile</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: ["user"]
};
</script>

<style></style>
