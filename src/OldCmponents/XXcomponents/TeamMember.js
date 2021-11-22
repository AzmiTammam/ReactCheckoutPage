import React from "react";

function TeamMember(props) {
      return(
            <div className='col-sm-6 col-md-4 text-center'>
            <div className='card'>
            <div className='card-header' >
                  <img style={{maxWidth: '100%'}} src={props.info.img} alt='.' />
            </div>
            <div className='card-body' style={{backgroundColor: props.info.phone ? 'white' : 'black'}} >
                  <h1>{props.info.name}</h1>
                  <h5>{props.info.job}</h5>
                  <span>{props.info.phone}</span>
                  <span>{props.info.email}</span>
            </div>
            </div>
            </div>
      );
}

export default TeamMember;