import React from "react";
import { BiBookOpen} from 'react-icons/Bi';
import { SlCalender} from 'react-icons/Sl';
import { AiOutlineCheck} from 'react-icons/Ai';
const Hero = () => {
  return (
    <div className="hero-div">
      <h1 className="heading1">"Track your habits,</h1>
      <h1 className="heading2">achieve your goals."</h1>

      <div className="details">
        <div className="details1">
            <span className="span1">Make your own plan</span>

            <span className="span2">Designed for daily use.</span>


        </div>

        <div className="boxes">
        <div className="box1 box">
          <BiBookOpen className="icon"/>
          <h2>Review your habits daily </h2>
          <h2 className="lightText">See your habits for the day.</h2>
        </div>
        <div className="box2 box">
          <SlCalender className="icon"/>
          <h2>
            Beautiful calendar 
          </h2>
          <h2 className="lightText">Get a monthly overview of every habit to see how
            well you have performed.</h2>
        </div>
          <div className="box3 box">
            <AiOutlineCheck className="icon"/>
            <h2>
              Many options 
            </h2>
            <h2 className="lightText">Repeat daily, weekly and monthly, in intervals or
              just track whenever you want.</h2>
          </div>
          </div>
        </div>
        <div className="details1">
          <span className="heavyHeading span1">Get started with <br /> Habitory today</span>
          <span className="lightHeading span2">Habitory keps your habits organized. Start tracking habits today!</span>
          <button className="button largeButton">Go to App</button>
        </div>
      </div>
    
  );
};

export default Hero;
