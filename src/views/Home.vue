<template>
  <div class="home text-center">
    <div class="container">
      <Breadcumb />
      <SearchBar @termChange="onTermChange" />
      <UserList :users="users"></UserList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import UserList from "@/components/UserList.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    Breadcumb,
    UserList
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    // searchTerm adalah value yg didapat dari search bar (event.target.value yang didefinisikan di SearchBar component)
    onTermChange(searchTerm) {
      axios
        .get(
          "https://api.github.com/search/users?q=" + searchTerm + "&per_page=10"
        )
        .then(response => {
          // update videos property with data from api
          console.log(response);
          this.users = response.data.items;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
