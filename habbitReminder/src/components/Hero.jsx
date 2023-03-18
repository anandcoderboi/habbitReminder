import React from "react";

const Hero = () => {
  return (
    <div>
      <h1>"Track your habits,</h1>
      <h1>achieve your goals."</h1>

      <div className="details">
        <div className="details1">
            <span className="span1">Make your own plan</span>

            <span className="span2">Designed for daily use.</span>


        </div>

        <div className="boxes">
        <div className="box1">
          <h2>Review your habits daily See your habits for the day.</h2>
        </div>
        <div className="box2">
          <h2>
            Beautiful calendar Get a monthly overview of every habit to see how
            well you have performed.
          </h2>
        </div>
          <div className="box3">
            <h2>
              Many options Repeat daily, weekly and monthly, in intervals or
              just track whenever you want.
            </h2>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
