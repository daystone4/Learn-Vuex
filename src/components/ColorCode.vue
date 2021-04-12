<template>
  <div>
    <input type="text" placeholder="Enter Color Code" v-model="colorCode">
  </div>
</template>

<script>
export default {

computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue);
      }
    }
  },
}
</script>

<style>

</style>