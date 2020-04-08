import { TAction } from "./actions";

export const getWeeklyForecast = (state: Object[] = [], action: TAction) => {
  switch (action.type) {
    case "WEEKLY_INFO":
      return action.payload;
    case "TODAY_INFO":
      return action.payload;
    default:
      return state;
  }
};

export const getCurrentCity = (state: string = "Saransk", action: TAction) => {
  switch (action.type) {
    case "CHANGED_CITY":
      return action.payload;
    default:
      return state;
  }
};
