<template>
  <div>
    Sie werden weitergeleitet...
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async umleitung() {
      this.$router.push('/rechnung');
    }
  },
  mounted() {
    this.umleitung();
  }
}
</script>


<style scoped>
</style>