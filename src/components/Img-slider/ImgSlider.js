import sunnyImage from "./sunny.jpg";
import rainyImage from "./rainy.jpg";

function WeatherApp(props) {
  const { weather } = props;

  let weatherImage;

  if (weather === "Sunny") {
    weatherImage = sunnyImage;
  } else if (weather === "Rainy") {
    weatherImage = rainyImage;
  }

  return (
    <div>
      <img src={weatherImage} alt="Weather" />
    </div>
  );
}

export default WeatherApp;
