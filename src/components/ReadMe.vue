<template>
  <div id="readme">
    <div class="card">
      <div class="card-header bg-dark text-light">README</div>
      <div class="card-body">
        <VueShowdown :markdown="fileContent"></VueShowdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueShowdown from "vue-showdown";
export default {
  name: "ReadMe",
  props: ["readme"],
  components: VueShowdown,
  data: function() {
    return {
      fileContent: null,
      fileToRender: this.readme,
      rawContent: null
    };
  },
  created: function() {
    //  const fileToRender = `get markdown raw data from readme props`;
    //const rawContent = ""; // Read the file content using fileToRender
    // this.fileContent = "### marked(rawContent) should get executed";
    this.getContent();
  },
  methods: {
    getContent() {
      this.fileContent = "rendering ";
      // var self;
      this.$http
        .get(this.fileToRender)
        .then(response => {
          // get body data
          this.fileContent = response.body;
        })
        .catch(err => {
          // error callback
          console.log(err);
          this.fileContent = "An error ocurred";
        });
    }
  }
};
</script>

<style></style>
