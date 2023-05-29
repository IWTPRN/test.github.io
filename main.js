var wsagba = [
    { name: 'Gaggan', lat: 13.736717, lon: 100.523186, rating: 4.5 },
    { name: 'Sühring', lat: 13.746044, lon: 100.537058, rating: 4.6 },
    { name: 'Le Du', lat: 13.729418, lon: 100.516982, rating: 4.4 },
    { name: 'Bo.lan', lat: 13.726577, lon: 100.556292, rating: 4.3 },
    { name: '100 Mahaseth', lat: 13.764760, lon: 100.506462, rating: 4.2 },
    { name: 'Ginza Sushi Ichi', lat: 13.723317, lon: 100.568209, rating: 4.7 },
    { name: 'Jay Fai', lat: 13.753690, lon: 100.504030, rating: 4.8 },
    { name: 'Paste', lat: 13.733008, lon: 100.539355, rating: 4.2 },
    { name: 'Nahm', lat: 13.722800, lon: 100.530070, rating: 4.0 },
    { name: 'Issaya Siamese Club', lat: 13.719486, lon: 100.559063, rating: 4.4 },
  ];
  
  //พิกัดการซูม
  var mymap = L.map('mapid', { scrollWheelZoom: true }).setView([13.736717, 100.523186], 12);

  
  //เลเยอแผนที่
  var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  //โทโป
  var topographicLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
  });
  //ดาวเทียม
  var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'want to eat shabuu'
  });
  //แอดเลเยอที่ใช้เปิดตั้งแต่หน้าโหลดเว็บ
  osmLayer.addTo(mymap);
  //ชื่อ base map
  var baseMaps = {
      "OSM": osmLayer,
      "Topographic": topographicLayer,
      "Satellite": satelliteLayer
  };
  //แอดเลเยอ
  L.control.layers(baseMaps).addTo(mymap);
  
  //ลง Marker และข้อมูลลงในอาเรย์
  var markers = [];
  
  //แอดพิกัด Makrer และบอก Raing 
  for (var i = 0; i < wsagba.length; i++) {
      var restaurant = wsagba[i];
      var marker = L.marker([restaurant.lat, restaurant.lon]).addTo(mymap);
      
      marker.bindPopup("<b>" + restaurant.name + "</b><br>Rating: " + restaurant.rating);
      
      markers.push(marker);
  }
  //ลง Maker ในแผนที่
  var markerGroup = L.featureGroup(markers).addTo(mymap);

  