<template>
  <div class="continaer-fluid">
    <!-- first card -->
    <div class="card shadow2">
      <div class="card-body">
        <!-- Top Row -->
        <div class="d-md-flex justify-content-between align-items-center">
          <h3 class="card-title" style="text-align: left;"><strong>Make payment</strong></h3>
        </div>
        <hr>
        <h4>The policy is {{ }}</h4>
        <h4>The payment amount is {{  }}</h4>
        <h4>The payment option is {{ }}</h4>
        <h4></h4>
        <img class="img-fluid" src="../assets/img/turners-payment.jpg" alt="Turners payment">
<!-- Button trigger modal -->
<!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
<button type="button" class="btn btn-primary btn-lg col-4 mx-auto shadow1" style="background-color: #BA1D3D; border-radius: 12px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <h2><strong>Confirm</strong></h2>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content" style="border-radius: 20px; background-color: #BA1D3D;">
      <div class="modal-header" style="border-bottom: 0;">
        <img class="img-fluid center" src="../assets/img/congrats.jpg" alt="Turners payment">
      </div>
      <div class="modal-body" style="background-color: #BA1D3D;">
        <h1 style="color: white;"><strong>Congratulations you've<br>got cover!</strong></h1>
      </div>
      <div class="modal-footer" style="border-top: 0;">
        <div class="container">
          <div class="row align-items-end">
            <div class="col-6">
              <h4 style="text-align: left;"><a href="#" class="link" style="color: white;">Your feedback is valuable</a></h4>
            </div>
            <div class="col-6">
              <h4 style="text-align: right;"><a href="/" class="link" style="color: white;">Head back home</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  props: {
    msg: String
  }
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

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}

</style>
