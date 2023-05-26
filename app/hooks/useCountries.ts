import countries from 'world-countries';


const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng, //latitude, longitude
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => { // get the item val based on the val that we passed 
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
