<template>
    <button @click="selectComp()" type="button" class="btn btn-lg btn-outline-primary button button1" style="border-radius: 12px;"><strong>Comprehensive Car<br>Insurance</strong></button>
</template>

<script>
export default {
  name: 'CompButton',
  methods: {
    selectComp () {
      this.$emit('toggle-comp')
    }
  }
}
</script>

<style scoped>

</style>
