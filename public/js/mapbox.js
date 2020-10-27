/* eslint-disable*/

console.log('hello from the client side');

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieWlzaHNlZyIsImEiOiJja2dsMTh5N2swYjh2MnNtc3Y1Y29lZzZ3In0.6xdm0atX3AoOgQ5VOO7fsw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yishseg/ckgl1u54a0l9119saxxuqxrut',
    scrollZoom: false,
    // center: [34.738434, 31.727309],
    // zoom: 4,
    // interactive
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
