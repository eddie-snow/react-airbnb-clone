import React from "react"

function Card(props) {//props reusable components
    return (
      
          <div className="Card">
              {/* this is a card */}
              <img src={props.img} className="card--image"/>
              <div className="review-card">
                <img src={require("../images/Star 1.png")} className="card--star"/>
                <span>{props.ratings}</span>
                <span>({props.reviewCount}) * </span>
                <span>{props.country} </span>
              </div>
              <span>{props.title}</span>
              <span> <b>From ${props.price}</b> / Person</span>
          </div>
      
    );
  } 
  
  export default Card;