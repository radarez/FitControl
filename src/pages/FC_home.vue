<template>
  <f7-page id="home">

    <f7-navbar id="nav_bar">
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title >
        <img src="static/img/logo/radar.svg" class="logo">
      </f7-nav-title>
    </f7-navbar>

    <f7-row class="margin_top_menu">
      <f7-col class="align_center">
        <a href="/chronometer">
          <img src="static/img/chronometer_white.svg" class="menu_icons">
        </a>
      </f7-col>
      <f7-col>
        <a href="/range">
          <img src="static/img/timer_range_white.svg" class="menu_icons">
        </a>
      </f7-col>
    </f7-row>
    <f7-row>
      <f7-col class="align_center">
        <a href="#">
          <img src="static/img/calendar_white.svg" class="menu_icons">
        </a>
      </f7-col>
      <f7-col class="align_center">
        <a href="#">
          <img src="static/img/food_white.svg" class="menu_icons">
        </a>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
  export default {}
</script>
<style>
.margin_top_menu{
  margin-top: 20%;
}
.menu_icons{
  height: 90%;
  width: 90%;
  padding: 5px;
}
</style>
