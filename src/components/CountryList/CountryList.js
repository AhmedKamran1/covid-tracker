import { useCallback, useEffect, useState } from "react";
import { fetchCountryList } from "../../api/api";
import classes from "./CountryList.module.css";

const CountryList = (props) => {
  const [data, setData] = useState({});

  const fetchCountries = useCallback(async () => {
    const data = await fetchCountryList();
    setData(data);
  }, []);

  const countryChangeHandler = (event) => {
    props.countryChangeHandler(event.target.value);
  };

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={classes.option}>
      <select className={classes.dropbox} onChange={countryChangeHandler}>
        <option value="Global">Global</option>
        {Array.from(data).map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
