<template>
  <div id="home">
    <div id="geocoder" class="geocoder w-100 p-2"></div>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export default ({
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZGFyaW90ZWNjaGlhIiwiYSI6ImNsZHVrejQzNDAwdDYzb3FubmV3OXg1eWQifQ.Z3X5KPxUmGXVK5S9L_eM0w',
      map: {} as mapboxgl.Map,
      geocoder: {} as MapboxGeocoder
    }
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
        center: [14.3868942, 40.6117467],
      });

      this.geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: 'it',
        filter: function (item) {
          return item.context.some((i) => {
            return (i.text === '80067');
          });
        },
        mapboxgl: mapboxgl
      });

      this.geocoder.on('result', (e) => {
        console.log([...e.result.center] as any);
        const features = this.map.queryRenderedFeatures(
          [...e.result.center] as any,
          {
            layers: ['my-data-fill']
          }
        );
        console.log(features);
      });

      this.map.on('click', (e) => {
        console.log(e.lngLat.toArray());
        const features = this.map.queryRenderedFeatures(
          e.lngLat.toArray() as any,
          {
            layers: ['my-data-fill'],
          }
        );
        console.log(features);
      });

      document.getElementById('geocoder')?.appendChild(this.geocoder.onAdd(this.map));

      this.map.on('load', () => {
        this.map.addSource('my-data', {
          'type': 'geojson',
          'data': '/geojson/map.geojson'
        });

        this.map.addLayer({
          id: 'my-data-fill',
          type: 'fill',
          source: 'my-data',
          paint: {
            'fill-color': ['coalesce', ['get', 'fill'], 'color'],
            'fill-opacity': ['coalesce', ['get', 'fill-opacity'], 0.3]
          },
          filter: ['==', ['geometry-type'], 'Polygon']
        });

        this.map.addLayer({
          id: 'my-data-fill-outline',
          type: 'line',
          source: 'my-data',
          paint: {
            'line-color': ['coalesce', ['get', 'stroke'], 'color'],
            'line-width': ['coalesce', ['get', 'stroke-width'], 2],
            'line-opacity': ['coalesce', ['get', 'stroke-opacity'], 1]
          },
          filter: ['==', ['geometry-type'], 'Polygon']
        });

        this.map.addSource('places', {
          'type': 'geojson',
          'data': '/geojson/places.geojson'
        });

        this.map.addLayer({
          'id': 'poi-labels',
          'type': 'symbol',
          'source': 'places',
          'layout': {
            'text-field': ['get', 'description'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
            'icon-image': ['get', 'icon']
          }
        });
      });
    }
  }
})
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100vh;
}

.toggle-legend {
  z-index: 9999;
}
</style>