<template>
  <div id="user-list">
    <div class="card">
      <ul class="list-group list-group-flush">
        <UserListItem
          v-for="user in users"
          :user="user"
          :key="user.id"
        ></UserListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import UserListItem from "@/components/UserListItem";

export default {
  name: "UserList",
  components: {
    UserListItem
  },
  //   props without validation
  //   props: ["user"]
  //   props with validation (recommended)
  props: {
    users: Array
  }
};
</script>

<style></style>
