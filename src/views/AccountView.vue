<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col-8">
        <AccountForm />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountForm from '@/components/AccountForm.vue'

export default {
  name: 'AccountView',
  components: {
    AccountForm
  }
}
</script>
