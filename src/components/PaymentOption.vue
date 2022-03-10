<template>
  <div class="container">
    <div class="row gx-1">
      <div class="col-lg-4">
        <div @click="$emit('pay-select-weekly', paymentOption.id)" class="card">
          <div :class="[paymentOption.weeklySelected ? 'selected' : '', 'card-body']">
            <h4>Weekly Payment: {{ paymentOption.weekly }}</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div @click="$emit('pay-select-monthly', paymentOption.id)" class="card">
          <div :class="[paymentOption.monthlySelected ? 'selected' : '', 'card-body']"> <!-- @dblclick="$emit('toggle-pay', paymentOption.id)"  -->
            <h4>Monthly Payment: {{ paymentOption.monthly }}</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div @click="$emit('pay-select-yearly', paymentOption.id)" class="card">
          <div :class="[paymentOption.yearlySelected ? 'selected' : '', 'card-body']">
            <h4>Yearly Payment: {{ paymentOption.yearly }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentOption',
  props: {
    paymentOption: Object
  }
}
</script>

<style scoped>

.container {
  padding: 0;
}

.card {
  background: #f4f4f4;
  margin: 5px;
  padding: 0px;
  cursor: pointer;
}
.card-body.selected {
  border: 5px solid #0076BE;
}
.card h4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
