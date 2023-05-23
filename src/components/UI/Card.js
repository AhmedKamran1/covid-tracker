import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import classes from "./Card.module.css";
import CardList from "./CardsList";

const Card = (props) => {
  // const cardsList = useSelector((state) => state.card.cardsList);
  const { active, confirmed, deaths } = props.data;
  const date = new Date();
  const currentDate = date.toString().slice(0, 15);

  const cardsList = [
    {
      title: "Infected",
      toll: 0,
      date: currentDate,
      description: "Number of active cases of Covid-19",
      id: "Card1",
    },
    {
      title: "Confirmed",
      toll: confirmed,
      date: currentDate,
      description: "Number of confirmed cases of Covid-19",
      id: "Card2",
    },
    {
      title: "Deaths",
      toll: deaths,
      date: currentDate,
      description: "Number of deaths caused by Covid-19",
      id: "Card3",
    },
  ];

  return (
    <Wrapper className={classes.container}>
      {cardsList.map((card) => (
        <CardList key={Math.random()} card={card}></CardList>
      ))}
    </Wrapper>
  );
};

export default Card;
