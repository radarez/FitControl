<template>
  <f7-page id="chronometer">
    <f7-list form>

      <f7-list>
        <div id="contenedor">
          <div class="reloj" id="Horas">{{ horas }}:</div>
          <div class="reloj" id="Minutos">{{ minutos }}:</div>
          <div class="reloj" id="Segundos">{{ segundos }}:</div>
          <div class="reloj" id="Centesimas">{{ centesimas }}</div>
        </div>
          <div>
            <input type="button" class="boton" id="inicio" value="Start" v-on:click="start()" v-model="btnStart">
            <input type="button" class="boton" id="parar" value="Stop" v-on:click="stop()" disabled v-model="btnStop">
            <input type="button" class="boton" id="continuar" value="Resume" v-on:click="start()" disabled v-model="btnRestart">
            <input type="button" class="boton" id="reinicio" value="Reset" v-on:click="restart()" disabled v-model="btnReset">
          </div>
      </f7-list>

      <f7-list-item id="controls">
        <a href="#">
          <img src="static/img/play.svg" class="play">
        </a>
      </f7-list-item>

    </f7-list>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
  </f7-page>
</template>

<script>

// Create component
export default {
  data(){
    return {
      centesimas : 0,
      segundos   : 0,
      minutos    : 0,
      horas      : 0,
      control    : 0,
      btnStart:true,
      btnStop:false,
      btnRestart:true,
      btnReset:false,

    }
  },
  methods:{
    start: function(){
     	this.control = setInterval(this.chronometer,10);
      document.getElementById("inicio").disabled = true;
      document.getElementById("parar").disabled = false;
      document.getElementById("continuar").disabled = true;
      document.getElementById("reinicio").disabled = false;
    },
    stop: function(){
      clearInterval(this.control);
      document.getElementById("parar").disabled = true;
      document.getElementById("continuar").disabled = false;
    },
    restart: function(){
      clearInterval(this.control);
      this.centesimas = 0;
      this.segundos = 0;
      this.minutos = 0;
      this.horas = 0;
      this.control = 0;
      // Centesimas.innerHTML = ":00";
      // Segundos.innerHTML = ":00";
      // Minutos.innerHTML = ":00";
      // Horas.innerHTML = "00";
      document.getElementById("inicio").disabled = false;
      document.getElementById("parar").disabled = true;
      document.getElementById("continuar").disabled = true;
      document.getElementById("reinicio").disabled = true;
    },
    chronometer: function(){
      if (this.centesimas < 99) {
        this.centesimas ++;
        if (this.centesimas < 10) { this.centesimas = "0" + this.centesimas }
        // Centesimas.innerHTML = ":" + this.centesimas;
      }
      if (this.centesimas == 99) {
        this.centesimas = -1;
      }
      if (this.centesimas == 0) {
        this.segundos ++;
        if (this.segundos < 10) { this.segundos = "0" + this.segundos }
        // Segundos.innerHTML = ":" + this.segundos;
      }
      if (this.segundos == 59) {
        this.segundos = -1;
      }
      if ( (this.centesimas == 0) && (this.segundos == 0) ) {
        minutos++;
        if (this.minutos < 10) { this.minutos = "0" + this.minutos }
        // Minutos.innerHTML = ":"+this.minutos;
      }
      if (this.minutos == 59) {
        this.minutos = -1;
      }
      if ( (this.centesimas == 0) && (this.segundos == 0) && (this.minutos == 0) ) {
        this.horas ++;
        if (this.horas < 10) { this.horas = "0" + this.horas }
        // Horas.innerHTML = this.horas;
      }
    },
  }
}













</script>

<style scope>
.play{
  text-align: center;
  width: 80px;
}
.logo{
  height: 34px;
}
.controls{
  align-items: center;
}
/*Chronometer*/
*{
	margin: 0;
	padding: 0;
}
#contenedor{
	margin: 10px auto;
	width: 540px;
	height: 115px;
}
.reloj{
	float: left;
	font-size: 40px;
	font-family: Courier,sans-serif;
	color: #363431;
}
.boton{
	outline: none;
	border: 1px solid #363431;
	color: white;
	width: 128px;
	height: 30px;
	text-shadow: 0px -1px 1px black;
	font-size: 20px;
	border-radius: 5px;
	font-family: Helvetica;
	cursor: pointer;
	background-image: linear-gradient(#3aad02,#2c6f05);
}
.boton:active{
	background-image: linear-gradient(#2c6f05,#3aad02);
}
.boton:hover{
	box-shadow: 0px 0px 14px #3aad02;
}
/*/Chronometer*/

</style>

