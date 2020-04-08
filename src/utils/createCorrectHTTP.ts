export const createCorrectUrl = (value: any) => {
  if (value === undefined) {
    return `https://api.weatherbit.io/v2.0/forecast/daily?city=Saransk,Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`;
  }
  return `https://api.weatherbit.io/v2.0/forecast/daily?city=${value},Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`;
};
