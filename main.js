import "./style.css";
import { getWeather } from "./weather";

getWeather(41, 69, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (data) => {
    console.log(data);
  }
);
