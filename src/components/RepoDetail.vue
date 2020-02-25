<template>
  <div class="card">
    <div class="card-header bg-dark text-light">
      Repository Detail
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">{{ repo.name }}</h5>
      <p class="card-text">
        <small class="text-muted">{{ repo.full_name }}</small>
      </p>
      <p class="card-text" v-if="repo.description">
        {{ repo.description }}
      </p>
      <p class="card-text" v-else>
        No Description
      </p>
      <a
        target="_blank"
        :href="repo.html_url"
        class="btn btn-dark btn-sm text-white"
        >Visit This Repository</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoDetail",
  props: ["repo"]
};
</script>

<style></style>
