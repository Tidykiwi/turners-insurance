<template>
  <div class="container-fluid">
    <section id="header">
      <div id="header" class="container-fluid">
        <img class="img-fluid" src="../src/assets/img/turners-banner-03.jpg" alt="Turners banner">
        <!-- <img src="../src/assets/img/turners-banner-02.jpg" alt="Turners banner" width="100"> -->
      </div>
    </section>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/quote">Quote</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/payment">Payment</router-link>  </nav>
    <router-view/>
    <section>
      <br>
      <div @click="seeData()" id="footer" class="container-fluid">
        <br>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div class="float-end">
              <span class="c"></span>
              <span class="d"><img class="rounded float-middle" src="../src/assets/img/turners-logo-crop.jpg" alt="Turners logo" width="75%"></span>
            </div>
          </div>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#header {
  background-color: white ;
}

.container-fluid {
  background-color: #0076BE;
  padding: 0;
}

#footer {
  background-color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

span.c {
  display: block;
  width: 15rem;
  height: 6rem;
}

span.d {
  display: block;
  width: 15rem;
  height: 4rem;
}

</style>
