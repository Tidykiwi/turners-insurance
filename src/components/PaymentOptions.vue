<template>
    <div :key="paymentOption.id" v-for="paymentOption in paymentOptions">
      <PaymentOption
        @pay-select="$emit('pay-select', paymentOption.id)"
        @toggle-pay="$emit('toggle-pay', paymentOption.id)"
        :paymentOption="paymentOption"
      />
    </div>
</template>

<script>
import PaymentOption from './PaymentOption'
export default {
  name: 'PaymentOptions',
  props: {
    paymentOptions: Array
  },
  components: {
    PaymentOption
  },
  emits: ['pay-select', 'toggle-pay']
}
</script>

<style scoped>

</style>
