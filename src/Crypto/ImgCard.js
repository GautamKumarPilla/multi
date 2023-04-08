import React from 'react';

const ImgCard = (props) => {
  return (
    <>
      <img src={props.url} width={'50px'} alt={props.name}/><br/>
      <i style={{"color":"tomato","fontWeight":"bold"}}>{props.name}</i>  
      <p>Rank: {props.rank}</p>  
      <p>Price in $: {Math.round(props.price)}</p>  
      <p>MarketCap: {Math.round(props.marketCap)}</p>  
    </>
  )
}

export default ImgCard;