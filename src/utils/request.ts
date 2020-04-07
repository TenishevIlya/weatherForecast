export const getWeather = () => {
  fetch(
    "https://api.weatherbit.io/v2.0/forecast/daily?city=Saransk,Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru"
  )
    //"https://api.weatherbit.io/v2.0/current?city=Saransk,Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru"
    .then((res: Response) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
