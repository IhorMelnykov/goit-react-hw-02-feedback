import styled from "styled-components";

export const FeedbackDiv = styled.div`
margin: 25px 30px;
`
export const FeedbackButtons = styled.button`
margin-right: 20px;
padding: 5px 8px;
border: 1px solid black;
border-radius: 5px;
background-color: lightgrey;
color: black;
font-weight: 500;
font-size: 18px;
cursor: pointer;
scale: 1;
&:hover,
&:focus {
    scale: 1.2;
}
`