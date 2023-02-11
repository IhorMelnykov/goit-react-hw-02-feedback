import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
static defaultProps = {
           good: 0,
           neutral: 0,
           bad: 0,
           
    };
       state = {
           good: this.props.good,
           neutral: this.props.neutral,
           bad: this.props.bad,
     
       };


 buttonClick = e => {
       const {name} = e.target;
       this.setState(prevState => ({
       [name]: prevState[name] + 1,
       }
       ));
   }
  
  

 countTotalFeedback = () => {
       return this.state.good + this.state.neutral + this.state.bad;
        };

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good / this.countTotalFeedback() * 100)
    }

  
  



  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

  
  return (
    <div>
      
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state}
          onLeaveFeedback={this.buttonClick} />
      </Section>
      
       { total !== 0 ? 
           (<Section title="Statistics">
           <Statistics 
           good={good}
           neutral={neutral}
           bad={bad}
           total={total} 
           positivePercentage={this.countPositiveFeedbackPercentage()}
           />
           </Section>) : 
           (<Notification message="There is no feedback" />)
           }
    
    </div>
    );
    
    }
};
