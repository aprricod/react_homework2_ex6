import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "ec508e7558ba821e57493464ce94b92d";

class App extends React.Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Info />
        {/* weatherMethod - это свойство, которое сам создаю */}
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}
export default App;
