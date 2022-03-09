<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col-8">
        <QuoteForm />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuoteForm from '@/components/QuoteForm.vue'

export default {
  name: 'QuoteView',
  components: {
    QuoteForm
  }
}
</script>
