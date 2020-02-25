<template>
  <div>
    <input class="form-control-lg" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      // emitting event to parent component (App)
      this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>
