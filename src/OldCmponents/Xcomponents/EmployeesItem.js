import React from "react";

function EmployeesItem(props) {
  return (
    <div className="card col-6" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.p.imgSrc} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.p.title}</h5>
        <p className="card-text">{props.p.cardText}</p>
        <p className="card-text">{props.p.cardEmail}</p>
        <a href={props.p.link} target="_blank" className="btn btn-primary">
          {props.p.linkClickText}
        </a>
      </div>
    </div>
  );
}

export default EmployeesItem;
