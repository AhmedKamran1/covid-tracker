import { configureStore, createSlice } from "@reduxjs/toolkit";
const date = new Date();
const currentDate = date.toString().slice(0,15);

const Cards = [
  {
    title: "Infected",
    toll: 0,
    date: currentDate,
    description: "Number of active cases of Covid-19",
    id: "Card1"
  },
  {
    title: "Confirmed",
    toll: 0,
    date: currentDate,
    description: "Number of confirmed cases of Covid-19",
    id: "Card2"
  },
  {
    title: "Deaths",
    toll: 0,
    date: currentDate,
    description: "Number of deaths caused by Covid-19",
    id: "Card3"
  },
];

const cardsInitialState = {
  cardsList: Cards,
};

const cardSlice = createSlice({
  name: "Card",
  initialState: cardsInitialState,
  reducers: {
    updateCardInfo(state, action) {},
  },
});

const store = configureStore({
  reducer: { card: cardSlice.reducer },
});

export const cardActions = cardSlice.actions;
export default store;