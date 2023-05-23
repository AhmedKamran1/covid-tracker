import classes from "./CardsList.module.css";
import Wrapper from "./Wrapper";
import CountUp from "react-countup";

const CardList = ({ card }) => {
  const { title, toll, date, description, id } = card;

  return (
    <Wrapper className={classes.outsideContainer} id={`outside${id}`}>
      <Wrapper className={classes.insideContainer} id={`inside${id}`}>
        <p className={classes.title}>{title}</p>
        <p className={classes.toll}>
          <CountUp start={0} end={toll} duration={3} separator=","></CountUp>
        </p>
        <p className={classes.date}>{date}</p>
        <p className={classes.description}> {description}</p>
      </Wrapper>
    </Wrapper>
  );
};

export default CardList;
