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
              <!-- <button v-on:click="setComp()" type="button" class="btn btn-lg btn-outline-primary button button1" style="border-radius: 12px;"><strong>Comprehensive Car<br>Insurance Simple</strong></button> -->
            </div>
            <div class="col-md-6">
              <MechButton @toggle-mech="toggleMech"/>
              <!-- <button v-on:click="setMech()" type="button" class="btn btn-lg btn-outline-primary button button1" style="border-radius: 12px;"><strong>Mechanical Breakdown<br>Insurance Simple</strong></button> -->
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
          <button class="btn btn-lg btn-primary button1" style="border-radius: 12px;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <strong>Search Car</strong>
          </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body" style="border: 0; padding: 0;">
              <!-- Reveal Quote -->
              <img class="img-fluid" src="../assets/img/car-model.jpg" alt="Turners payment">
              <p>
                <button v-on:click="hideButton()" id="hideButton" class="btn btn-danger btn-lg col-4 mx-auto shadow1"  type="button" style="background-color: #BA1D3D; border-radius: 12px;" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  <h2><strong>Get Quote</strong></h2>
                </button>
              </p>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body" style="border: 0; padding: 0;">
                  <!-- Get Quote -->
                  <div class="row align-items-center">
                    <div class="d"><br></div>
                    <div class="col-md-2"></div>
                    <div class="col">
                      <div v-if="showComp">
                        <PaymentOptions @toggle-pay="togglePay"
                          @pay-select-weekly="paySelectWeekly"
                          @pay-select-monthly="paySelectMonthly"
                          @pay-select-yearly="paySelectYearly"
                          :paymentOptions="paymentOptions"
                        />
                      </div>
                      <div class="d"><br></div>
                    </div>
                   <div class="col-md-2"></div>
                  <div class="d"><br></div>
                  </div>
                  <!-- <h4>Simple Weekly payment: {{ weekly }}</h4>
                  <h4>Simple Monthly payment: {{ monthly }}</h4>
                  <h4>Simple Yearly payment: {{ yearly }}</h4> -->
                  <!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
                  <div class="d"><br></div>
                  <!-- Button trigger modal -->
                  <!-- <button type="submit" class="btn btn-danger btn-lg col-3 mx-auto shadow1" style="background-color: #BA1D3D;"><strong>NEXT</strong></button> -->
                  <button type="button" class="btn btn-primary btn-lg col-4 mx-auto shadow1" style="background-color: #BA1D3D; border-radius: 12px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <h2><strong>Buy Cover</strong></h2>
                  </button>
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
import PaymentOptions from './PaymentOptions'
// import SearchCar from './SearchCar'
export default {
  name: 'QuoteForm',
  components: {
    CompButton,
    MechButton,
    PaymentOptions
    // SearchCar
  },
  data () {
    return {
      paymentOptions: [],
      showComp: false,
      showMech: false
    }
  },
  methods: {
    toggleComp () {
      this.showComp = !this.showComp
    },
    toggleMech () {
      this.showComp = !this.showComp
    },
    togglePay (id) {
      console.log(id)
    },
    paySelectWeekly (id) {
      // this.paymentOptions = this.paymentOptions.filter((paymentOption) => paymentOption.id === id)
      this.paymentOptions = this.paymentOptions.map((paymentOption) => paymentOption.id === id ? { ...paymentOption, weeklySelected: !paymentOption.weeklySelected } : paymentOption)
    },
    paySelectMonthly (id) {
      // this.paymentOptions = this.paymentOptions.filter((paymentOption) => paymentOption.id === id)
      this.paymentOptions = this.paymentOptions.map((paymentOption) => paymentOption.id === id ? { ...paymentOption, monthlySelected: !paymentOption.monthlySelected } : paymentOption)
    },
    paySelectYearly (id) {
      // this.paymentOptions = this.paymentOptions.filter((paymentOption) => paymentOption.id === id)
      this.paymentOptions = this.paymentOptions.map((paymentOption) => paymentOption.id === id ? { ...paymentOption, yearlySelected: !paymentOption.yearlySelected } : paymentOption)
    },
    hideButton () {
      const x = document.getElementById('hideButton')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    }
  },
  created () {
    this.paymentOptions = [
      {
        id: 1,
        name: 'Comprehensive',
        weekly: '$4.99',
        monthly: '$40.99',
        yearly: '$400.99',
        weeklySelected: false,
        monthlySelected: false,
        yearlySelected: false
      },
      {
        id: 2,
        name: 'Mechanical',
        weekly: '$2.99',
        monthly: '$20.99',
        yearly: '$200.99',
        weeklySelected: false,
        monthlySelected: false,
        yearlySelected: false
      }
    ]
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
  line-height: 1rem;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}

</style>
