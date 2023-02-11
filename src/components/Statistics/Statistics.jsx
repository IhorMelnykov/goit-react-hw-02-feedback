import PropTypes from "prop-types";
import {
    StatUl,
    StatLi,
    StatSpan
} from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatUl>
        <StatLi>Good: <StatSpan>{good}</StatSpan></StatLi>
        <StatLi>Neutral: <StatSpan>{neutral}</StatSpan></StatLi>
        <StatLi>Bad: <StatSpan>{bad}</StatSpan></StatLi>
        <StatLi>Total: <StatSpan>{total}</StatSpan></StatLi>
        <StatLi>Positive feedback: <StatSpan>{positivePercentage}%</StatSpan></StatLi>
    </StatUl>
);
  


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
 }

