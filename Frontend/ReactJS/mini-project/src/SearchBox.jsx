import React, { useState } from "react";
// import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");

  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const API_KEY = "d790b33b81424cb085c115033250807";

  const getWetherInfo = async () => {
    try {
      const res = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const jsonRes = await res.json();

      let result = {
        city: jsonRes.location.name,
        country: jsonRes.location.country,
        localTime: jsonRes.location.localtime,
        temp: jsonRes.current.temp_c,
        condition: jsonRes.current.condition.text,
        icon: "https:" + jsonRes.current.condition.icon,
        feelsLike: jsonRes.current.feelslike_c,
        humidity: jsonRes.current.humidity,
        windSpeed: jsonRes.current.wind_kph,
        windDir: jsonRes.current.wind_dir,
        uv: jsonRes.current.uv,
      };

      return result;
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      return null;
    }
  };

  const handleSearch = (e) => setCity(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    const newInfo = await getWetherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    } else {
      alert("Failed to fetch weather. Please try a different city.");
    }

    setCity("");
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField
          id="search"
          label="Enter City"
          variant="outlined"
          size="small"
          value={city}
          onChange={handleSearch}
          className="search-input"
        />
        &nbsp;&nbsp;
        <Button
          type="submit"
          variant="contained"
          size="medium"
          endIcon={<SearchIcon />}
          className="search-button"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
