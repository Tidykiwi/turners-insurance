<template>
    <button v-on:click="getCar()" type="button" class="btn btn-lg btn-outline-primary button button1" style="border-radius: 12px;"><strong>Search Car</strong></button>
</template>

<script>
export default {
  name: 'SearchCar',
  data () {
    return {
      year: '',
      make: '',
      model: ''
    }
  },
  methods: {
    async getCar () {
      const res = await fetch('https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/MVR_March2021/FeatureServer/id=1')
      const { results } = await res.json()

      console.log(results)

      this.year = results[0].car.year
      this.make = results[0].car.make
      this.model = results[0].car.model
    }
  }
}
</script>

<style scoped>

</style>
