import React from "react";


const Card = (props)=>{
    const {id,name,email} = props;
    return(
        <div className='bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}`} alt="ok"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}   

export default Card