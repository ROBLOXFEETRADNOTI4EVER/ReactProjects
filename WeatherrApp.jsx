import { use, useEffect, useRef, useState } from "react"
import clearSky from "./assets/clear_sky.png";
import cloudNormal from "./assets/cloud_normal.webp";
import rainCloud from "./assets/rain_cloud.png";
import snowCloud from "./assets/snow_cloud.png";
import thunderCloud from "./assets/thunder_cloud.png";
import windyCloud from "./assets/windy_cloud.png";
import fogCloud from "./assets/cloud_fog.jpeg";

import tempHot from "./assets/temp_hot.png";
import tempNormal from "./assets/temp_normal.webp";
import tempCold from "./assets/cold.png";



function WeatherApp(){
    const [weatherData, setWeatherData] = useState({
        location: null,
        latitude: null,
        longitude: null,
        weather: null,
        isFetched: false,
        cityName: null,
        temp: null,
        sky: null,
        country: null,
        humidity: null,
    }) 

    const [cityInput, setCityInput] = useState("");
    const [errormsg,setErrormsg] = useState(null);
    const [loading,setIsloading] = useState(false);
    const [cloudimg,setCloudimg] = useState(null);
    const [tempimg,setTempimg] = useState(null);

    const getUserLocation = () =>{
        setIsloading(true)
        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition((position) => {
            const {latitude,longitude} = position.coords;
            setWeatherData((prev) =>({
                ...prev,
                location: {latitude,longitude},
                latitude,
                longitude,
                isFetched: false
            }))       

           },
           (error) =>{
            console.error("there was an error",error)
           });

        }
        else {
            // display an error if not supported
            console.error('Geolocation is not supported by this browser.');
        }
    }

    function fetchCoordinates(){
        if(!cityInput) return
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=e19c42b615d07843c4780e7fc0987adf`)  
        .then((response) => response.json())
        .then((data) =>{
            if(data.length === 0){
                console.log("City wasn't found")
                setErrormsg("City wasn't found")
                setTimeout(() => {
                    setErrormsg(null)
                    setCityInput("")
                }, 5000);
                return
            }
            const {lat,lon,name,country} = data[0]; 
            setWeatherData((prev) => ({
                ...prev,
                latitude: lat,
                longitude: lon,
                cityName: name,
                country,
                isFetched: false

            }))
            setIsloading(false); 
            setCityInput("")

        }).catch(error => console.log(error))
        setIsloading(false); 
    }
   useEffect(() =>{
    if (weatherData.latitude !== null && weatherData.latitude !== undefined &&
        weatherData.longitude !== null && weatherData.longitude !== undefined &&
        !weatherData.isFetched) {      setIsloading(true);        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.latitude}&lon=${weatherData.longitude}&appid=e19c42b615d07843c4780e7fc0987adf&units=metric`)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                setWeatherData((prev) =>({
                    ...prev,
                    isFetched: true,
                    weather: data,
                    temp: data.main.temp,
                    cityName: data.name,
                    sky: data.weather[0].main,
                    country: data.sys.country,
                    humidity: data.main.humidity

                }))
                setIsloading(false); 
                console.log(weatherData.sky)
                console.log(data)
            }) 
            .catch(error => console.log(error));
            setIsloading(false); 
        }
        
     },[weatherData.longitude,weatherData.latitude,weatherData.isFetched])

     useEffect(() => {
        if (!weatherData.sky) return;
        
        const skyToImageMap = {
            Clear: clearSky,
            Clouds: cloudNormal,
            Rain: rainCloud,
            Snow: snowCloud,
            Thunderstorm: thunderCloud,
            Fog: fogCloud
        };
    
        setCloudimg(skyToImageMap[weatherData.sky] || null);
    }, [weatherData.sky]); 
    

    useEffect(() => {
        if (weatherData.temp == null) return;
              if (weatherData.temp >= 30) {
          setTempimg(tempHot);
        } else if (weatherData.temp <= 10) {
          setTempimg(tempCold);
        } else {
          setTempimg(tempNormal);
        }
      }, [weatherData.temp]);
    
    return(<>
 
    <div className="d-flex justify-content-center" style={{userSelect:"none"}}>
    <div className=" my-5 group row d-flex flex-column align-items-center" style={{width: "18rem"}}>
    <h4 className="text-light text-center">Your Current location </h4>
    <h1 className="text-center text-danger">{errormsg}</h1>
    {weatherData.cityName &&  (
        <div className="text-light">
                {/* <h1>{location.latitude} {location.longitude}</h1>
                <h2>Latitude: {latitude}, Longitude: {longitude}</h2> */}
                <h1 className="text-center">{weatherData.cityName}</h1>
                {cloudimg && <img src={cloudimg} alt="Weather Condition" className="weather-icon img img-fluid" draggable="false" />}

                <h5>{weatherData.temp} Celsius <img src={tempimg} alt="" className="img img-fluid rounded-pill" style={{height: "2rem"}} /></h5>
                <h5>Sky: {weatherData.sky}</h5>

                <h5>country: {weatherData.country}</h5>
                <h5>humidity: {weatherData.humidity} %</h5>

        </div>
    )}         {loading && <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>}
         
    <button onClick={getUserLocation} className="w-100 btn btn-outline-info p-3 m-1 text-light ">Use My Location</button>
    <input type="text" value={cityInput} onChange={(e) => setCityInput(e.target.value)} className=" w-100 form-control form-control-m  text-center d-flex justify-content-center " placeholder="Enter Your City Name " />
    <button className="btn w-100 btn-outline-info p-3 m-2 text-light" onClick={fetchCoordinates}>submit</button>
    </div>

    </div>
    </>)
}
export default WeatherApp