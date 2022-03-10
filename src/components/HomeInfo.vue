<template>
  <div class="container-fluid">
    <h1><strong>Which package suits you?</strong></h1>
    <br>
    <div class="container-fluid">
    <div class="row align-items-center row-cols-1 row-cols-md-2 g-5">
      <!-- Comp Insurance box -->
      <div class="col">
        <div class="card" style="background-color: #FFEDCB; border-radius: 12px;">
          <br>
          <img src="../assets/img/package-01.jpg" class="card-img-top" alt="...">
          <!-- Accordian -->
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" style="border-radius: 12px;">
              <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" style="border-radius: 12px;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <h5><strong>Learn more</strong></h5>
              </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style="background-color: #FFEDCB; border-radius: 12px;">
                  <img class="img-fluid" src="../assets/img/comp-02.jpg" alt="Turners payment">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mech Insurance box -->
      <div class="col">
        <div class="card" style="background-color: #FFEDCB; border-radius: 12px;">
          <br>
          <img src="../assets/img/package-02.jpg" class="card-img-top" alt="...">
          <!-- Accordian -->
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" style="border-radius: 12px;">
              <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" style="border-radius: 12px;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h5><strong>Learn more</strong></h5>
              </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style="background-color: #FFEDCB; border-radius: 12px;">
                  <img class="img-fluid" src="../assets/img/mech-02.jpg" alt="Turners payment">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="d"><br></div>
    <a href="/quote" class="btn btn-danger btn-lg col-3 mx-auto shadow1" role="button" style="background-color: #BA1D3D; border-radius: 12px;"><h2><strong>Get Quote</strong></h2></a>
    <router-link to="/quote">Quote</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: white;
}

.d {
  line-height: 5rem;
}

.shadow1 {
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.15), 0 6px 10px 0 rgba(0,0,0,0.10);
}

.shadow2 {
box-shadow: 0 8px 25px 5px rgba(0,0,0,0.20), 0 6px 15px 5px rgba(0,0,0,0.20);
}

.card-title {
  text-align: right;
}

.accordion-button:not(.collapsed) {
  color: black;
  background-color: white;
}

.accordion-button:focus {
  border-color: red;
}

</style>
