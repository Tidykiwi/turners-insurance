<template>
  <div class="continaer-fluid">
    <!-- first card -->
    <div class="card shadow2">
      <div class="card-body">
        <!-- Top Row -->
        <div class="d-md-flex justify-content-between align-items-center">
          <h3 class="card-title" style="text-align: left;"><strong>Make an account</strong></h3><h6 style="text-align: right;"><a href="#" class="card-link"><em>Already have an account? Sign in.</em></a></h6>
        </div>
        <hr>
        <!-- Form -->
        <!-- Account Details -->
        <form class="row g-3">
          <h4 style="text-align: left;"><strong>Account details:</strong></h4>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><h6><strong><em>Name</em></strong></h6></label>
            <input type="text" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"><h5><em>Mobile</em></h5></label>
            <input type="tel" class="form-control" id="inputPassword4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><h5><em>Email</em></h5></label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"><h5><em>Address</em></h5></label>
            <input type="text" class="form-control" id="inputPassword4">
          </div>
          <!-- Driver's Details -->
          <h4 style="text-align: left;"><strong>Driver's details:</strong></h4>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><h5><em>Name</em></h5></label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"><h5><em>Date of Birth</em></h5></label>
            <input type="date" class="form-control" id="inputPassword4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><h5><em>Driver's license number</em></h5></label>
            <input type="text" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"><h5><em>Driver's license expiration date</em></h5></label>
            <input type="text" class="form-control" id="inputPassword4">
          </div>
          <a href="/payment" class="btn btn-danger btn-lg col-4 mx-auto shadow1" role="button" style="background-color: #BA1D3D; border-radius: 12px;"><h2><strong>Next</strong></h2></a>
          <router-link to="/payment">Payment</router-link>
          <!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
        </form>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'AccountForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
  padding-left: 50px;
  padding-right: 50px;
  text-align: left;
}

.shadow1 {
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.15), 0 6px 10px 0 rgba(0,0,0,0.10);
}

.shadow2 {
box-shadow: 0 8px 25px 5px rgba(0,0,0,0.20), 0 6px 15px 5px rgba(0,0,0,0.20);
}

</style>
