import axios from "axios";

const url = "https://covid-19-statistics.p.rapidapi.com/reports/total";
const config = {
  headers: {
    "X-RapidAPI-Key": "e3289d6d18msh106197600cd0b09p175566jsn20e613dec035",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

export const fetchData = async () => {
  try {
    const {
      data: {
        data: { confirmed, deaths, active, last_update },
      },
    } = await axios.get(url, config);
    const modifiedData = {
      confirmed,
      deaths,
      active,
      last_update,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
const url2 = "https://covid-19-statistics.p.rapidapi.com/reports";
const config2 = {
  headers: {
    "X-RapidAPI-Key": "e3289d6d18msh106197600cd0b09p175566jsn20e613dec035",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

export const fetchCountryList = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url2, config2);
    const modifiedData = {
      data: data.map((record) => record.region.name),
    };
    const CountryList = new Set(modifiedData.data);
    return CountryList;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryData = async (country) => {
  const url3 =
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total";
  const config3 = {
    headers: {
      "X-RapidAPI-Key": "e3289d6d18msh106197600cd0b09p175566jsn20e613dec035",
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
    params: {
      country: country,
    },
  };
  try {
    const {
      data: { data },
    } = await axios.get(url3, config3);
    const modifiedData = {
      confirmed: data.confirmed,
      deaths: data.deaths,
      active: 0
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
