<template>
  <li class="list-group-item">
    <router-link
      class="row"
      :to="{ name: 'User', params: { username: user.login } }"
    >
      <div class="col"><img :src="thumbnailUrl" style="width:100px;" /></div>
      <div class="col text-dark d-flex align-items-center">
        <p class="text-center">{{ user.login }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "UserListItem",
  props: ["user"],
  computed: {
    thumbnailUrl() {
      return this.user.avatar_url;
    }
  }
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
