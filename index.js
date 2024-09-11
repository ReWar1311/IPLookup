
// import axios from "axios";
    //   try {
    //     const response = await axios.get("https://api.ipify.org/?format=json");
    //     const result = response.data.ip;
    //     const response2 = await axios.get(`https://ipinfo.io/${result}/geo`);
    //     const result2 = response2.data;
    //     const data = result2.loc
    //     var x=data.indexOf(",");
    //     var latitude = data.slice(0,x);
    //     var longitude = data.slice(x+1);
    //   }catch (error) {
    //   }
    
    async function post(input){
        const response = await axios.get(input).then(
            (response) => {
                return response.data.ip;
                },
            (error) => {
                console.log(error);
                return -1;
            }
        );
        return response;
    };
    async function post2(input){
        const response = await axios.get(input).then(
            (response) => {
                return response.data;
                },
            (error) => {
                console.log(error);
                return -1;
            }
        );
        return response;
    };





    post("https://api.ipify.org/?format=json").then((data)=>
        post2(`https://ipinfo.io/${data}/geo`).then((data2)=>
            {var platform = new H.service.Platform({
                'apikey': 'Q5H6-X_6FYNsMRF6U9v1y2mEdOzohfljnSoMfrIIPJI'
              });
              var defaultLayers = platform.createDefaultLayers();
                const data = data2.loc
                document.querySelector("#ipadress").innerHTML = data2.ip;
                document.querySelector("#city").innerHTML = data2.city;
                document.querySelector("#region").innerHTML = data2.region;
                document.querySelector("#post").innerHTML = data2.postal;
                document.querySelector("#isp").innerHTML = data2.org;
                var x=data.indexOf(",");
                var latitude = data.slice(0,x);
                var longitude = data.slice(x+1);

              
              // Instantiate (and display) a map object:
              var map = new H.Map(
                  document.getElementById('mapContainer'),
                  defaultLayers.vector.normal.map,
                  {
                    zoom: 12,
                    center: { lat: latitude, lng: longitude }
                  });
        
        
        })
        );
    


   