<template>
  <div class="continaer-fluid">
    <!-- first card -->
    <div class="card shadow2">
      <div class="card-body">
        <!-- Top Row -->
        <div class="d-md-flex justify-content-between align-items-center">
          <h3 class="card-title" style="text-align: left;"><strong>Get a quote now</strong></h3>
        </div>
        <hr>
        <div class="container">
          <!-- Policy Selection -->
          <div class="row align-items-center">
            <h4 style="text-align: left;"><strong>Chose your cover</strong></h4>
            <div class="d"><br></div>
            <div class="col-md-6">
              <CompButton @toggle-comp="toggleComp" />
            </div>
            <div class="col-md-6">
              <MechButton @toggle-mech="toggleMech"/>
            </div>
            <div class="d"><br></div>
          </div>
          <!-- Plate Search -->
          <div class="row align-items-end">
            <img class="img-fluid" src="../assets/img/search.jpg" alt="Turners payment">
          </div>
          <!-- <SearchCar /> -->
          <!-- Reveal search results -->
          <p>
          <button v-on:click="hideButton1()" id="hideButton1" class="btn btn-lg btn-primary button1" style="border-radius: 12px;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <strong>Search Car</strong>
          </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body" style="border: 0; padding: 0;">
              <!-- Reveal Quote -->
              <img class="img-fluid" src="../assets/img/car-model.jpg" alt="Turners payment">
              <p>
                <button v-on:click="hideButton2()" id="hideButton2" class="btn btn-danger btn-lg col-4 mx-auto shadow1"  type="button" style="background-color: #BA1D3D; border-radius: 12px;" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  <h2><strong>Get Quote</strong></h2>
                </button>
              </p>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body" style="border: 0; padding: 0;">
                  <!-- Get Quote -->
                  <div class="row align-items-center">
                    <div class="col-md-2"></div>
                    <div class="col">
                      <!-- Payment Option -->
                      <div class="container">
                        <div class="row gx-1">
                          <div class="col-lg-4">
                            <div @click="selectWeekly()" class="card payment">
                              <div id="week" class="card-body">
                                <h4>{{ this.weekly }}<br>Weekly Payment</h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div @click="selectMonthly()" class="card payment">
                              <div id="month" class="card-body">
                                <h4>{{ this.monthly }}<br>Monthly Payment</h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div @click="selectYearly()" class="card payment">
                              <div id="year" class="card-body">
                                <h4>{{ this.yearly }}<br>Yearly Payment</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- FINISH Payment Option -->
                      <!-- Radio Payment Option -->
                      <div class="container">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                          <label class="btn btn-lg btn-outline-primary" style="border-color: #0076BE;" for="btnradio1"><br><h2><strong>{{ this.weekly }}</strong></h2><div class="d"><br></div>Weekly Payment</label>

                          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                          <label class="btn btn-lg btn-outline-primary" style="border-color: #0076BE;" for="btnradio2"><br><h2><strong>{{ this.monthly }}</strong></h2><div class="d"><br></div>Monthly Payment</label>

                          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                          <label class="btn btn-lg btn-outline-primary" style="border-color: #0076BE;" for="btnradio3"><br><h2><strong>{{ this.yearly }}</strong></h2><div class="d"><br></div>Yearly Payment</label>
                        </div>
                      </div>
                      <!-- FINISH Radio Payment Option -->
                    </div>
                   <div class="col-md-2"></div>
                  <div class="d"><br></div>
                  </div>
                  <!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
                  <div class="d"><br></div>
                  <!-- Button trigger modal -->
                  <!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
                  <button type="button" class="btn btn-primary btn-lg col-4 mx-auto shadow1" style="background-color: #BA1D3D; border-radius: 12px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <h2><strong>Buy Cover</strong></h2>
                  </button>
                  <div class="d"><br></div>
                  <h5 style="text-align: center;"><a href="#" class="link" style="color: black;">Busy now? Email this quote to you for later</a></h5>
                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" style="border-radius: 20px; background-color: white; border-width: 0.5rem; border-color: #BA1D3D;">
                        <div class="modal-header" style="border-bottom: 0;">
                          <img class="img-fluid center" src="../assets/img/extras.jpg" alt="Turners payment">
                        </div>
                        <div class="modal-footer" style="border-top: 0;">
                          <div class="container">
                            <div class="row align-items-end">
                              <div class="col">
                                <h3 style="text-align: center;"><a href="/account" class="link" style="color: black;">No, I am okay for now</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- FINISH Modal -->
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
import CompButton from './CompButton'
import MechButton from './MechButton'
// import SearchCar from './SearchCar'
export default {
  name: 'QuoteForm',
  components: {
    CompButton,
    MechButton
    // SearchCar
  },
  data () {
    return {
      inventory: [],
      showWeek: false,
      showMonth: false,
      showYear: false,
      weekly: '',
      monthly: '',
      yearly: ''
    }
  },
  methods: {
    toggleComp () {
      this.weekly = '$4.99'
      this.monthly = '$40.99'
      this.yearly = '$400.99'
    },
    toggleMech () {
      this.weekly = '$2.99'
      this.monthly = '$20.99'
      this.yearly = '$200.99'
    },
    selectWeekly () {
      const element = document.getElementById('week')
      element.classList.toggle('selected')
    },
    selectMonthly () {
      const element = document.getElementById('month')
      element.classList.toggle('selected')
    },
    selectYearly () {
      const element = document.getElementById('year')
      element.classList.toggle('selected')
    },
    hideButton1 () {
      const x = document.getElementById('hideButton1')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    hideButton2 () {
      const x = document.getElementById('hideButton2')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  padding: 12px;
}

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

.d {
  line-height: 2rem;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}

.card.payment {
  background: #f4f4f4;
  margin: 5px;
  padding: 0px;
  cursor: pointer;
}

.selected {
  border: 5px solid #0076BE;
}

.card.payment h4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
