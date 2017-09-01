<template>
  <div>
    <v-block-code lang="javascript">
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </v-block-code>
    <v-block-code lang="html">
      <html></html>
    </v-block-code>
  </div>
</template>
