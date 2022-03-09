<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col-8">
        <PaymentForm />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentForm from '@/components/PaymentForm.vue'

export default {
  name: 'PaymentView',
  components: {
    PaymentForm
  }
}
</script>
