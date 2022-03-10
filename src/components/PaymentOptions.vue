<template>
    <div :key="paymentOption.id" v-for="paymentOption in paymentOptions">
      <PaymentOption
        @pay-select-weekly="$emit('pay-select-weekly', paymentOption.id)"
        @pay-select-montlhy="$emit('pay-select-monthly', paymentOption.id)"
        @pay-select-yearly="$emit('pay-select-yearly', paymentOption.id)"
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
  emits: ['pay-select-weekly', 'pay-select-monthly', 'pay-select-yearly', 'toggle-pay']
}
</script>

<style scoped>

</style>
