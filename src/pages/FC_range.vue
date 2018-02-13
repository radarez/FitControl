<template>
  <f7-page id="chronometer">
    <f7-block-title><img src="static/img/logo/radar.svg" class="logo"></f7-block-title>
    <f7-list form>
      <f7-list-item class="input_group">
        <f7-label class="lbl_title">Range</f7-label>
        <f7-input type="text" placeholder="00:00" class="input_text"></f7-input>
      </f7-list-item>
      <f7-list-item class="input_group">
        <f7-label class="lbl_title">Rest</f7-label>
        <f7-input type="text" placeholder="00:00" class="input_text"></f7-input>
      </f7-list-item>
      <f7-list-item id="controls" class="">
        <a href="#">
          <img src="static/img/play.svg" class="play">
        </a>
      </f7-list-item>
    </f7-list>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
  </f7-page>
</template>

<script>
  export default {}
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

</style>

