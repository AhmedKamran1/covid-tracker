import { useCallback, useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import { fetchCountryData, fetchCountryList, fetchData } from "./api/api";
import CountryList from "./components/CountryList/CountryList";
import Card from "./components/UI/Card";

import Header from "./components/UI/Header";
import Wrapper from "./components/UI/Wrapper";

function App() {
  const [data, setData] = useState({});
  // const [countryList, setCountryList] = useState({});

  const fetchCovidRecord = useCallback(async () => {
    const data = await fetchData();
    setData(data);
    // const countryData = await fetchCountryData('Canada');
    // setCountryData(countryData);
    // const countryList = await fetchCountryList();
    // setCountryList(countryList)
  }, []);

  const countryChangeHandler = useCallback(async (country) => {
    if (country === "Global") {
      const data = await fetchData();
      setData(data);
    } else {
      const countryData = await fetchCountryData(country);
      setData(countryData);
    }
  }, []);

  useEffect(() => {
    fetchCovidRecord();
  }, [fetchCovidRecord]);

  return (
    <>
      <Header />
      <Card data={data} />
      <CountryList countryChangeHandler={countryChangeHandler} />
      <Chart data={data} />
    </>
  );
}

export default App;
