<template>
    <button @click="selectMech()" type="button" class="btn btn-lg btn-outline-primary button button1" style="border-radius: 12px;"><strong>Mechanical Breakdown<br>Insurance</strong></button>
</template>

<script>
export default {
  name: 'MechButton',
  methods: {
    selectMech () {
      this.$emit('toggle-mech')
    }
  }
}
</script>

<style scoped>

</style>
