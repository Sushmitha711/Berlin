//Showing the api information in the form of cards .

import React from 'react';
import "./SingleContent.css";
import { unavailableLandscape } from '../../Config/config';
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({data}) => {
 
    return (    
      <ContentModal data={data}>
        <div className='container'>
      <div className='card'>  
      <div className="row no-gutters">
      <div className="col-md-4 card-header">
      <img src={data.large_img? data.large_img :unavailableLandscape}/>
       </div>
       <div className="col-md-8">
       <div className="card-body">
        <h5 className="card-title">BikeId: {data.id}</h5>
        <p className="card-text">Color: {data.frame_colors}</p>
        <h5 className="card-title">Bike No: {data.serial}</h5>
        <p className="card-text">Year: {data.year}</p>
        <button className='style'>{data.status}</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</ContentModal>

    );
}

export default SingleContent;
