import React from "react";


function SocialItem(props){

      return (
            <li className="list-group-item">
            <img src={props.p.img} alt={`icon of ${props.p.id}`} />
            <input type="checkbox" id={props.p.id} />
            <label htmlFor={props.id}>{props.p.media}</label>
            </li>
      );
}

export default SocialItem;