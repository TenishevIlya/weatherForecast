export type TAction = {
  type: string;
  payload?: any;
};

export const GET_WEATHER_INFO = (value: any, currentType: string) => {
  return {
    type: currentType,
    payload: value,
  };
};

export const GET_CURRENT_CITY = (value: string) => {
  return {
    type: "CHANGED_CITY",
    payload: value,
  };
};
