import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "7874d83f4d3c4013a0a71d97ff021cc2";

class App extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}
export default App;
