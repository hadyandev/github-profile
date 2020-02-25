<template>
  <li class="list-group-item">
    <router-link
      class="row"
      :to="{
        name: 'Repo',
        params: { username: username, repo: repo.name }
      }"
    >
      <div class="container">
        <p class="text-dark">{{ repo.name }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "RepoListItem",
  props: ["username", "repo"]
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>
