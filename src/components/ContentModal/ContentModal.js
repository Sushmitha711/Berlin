//ContentModal is used for getting perticular case details when we click on to the perticular case 

import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios";
import {useParams} from "react-router-dom"
import "./ContentModal.css";
import { unavailableLandscape } from '../../Config/config';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
   width:"60%",
   display:"block",
   textDecoration: "none",
   height:"100%",
   backgroundColor:"#39445a",
   border:"1px solid #282c34",
   borderRadius:10,
   boxShadow:theme.shadows[5],
   padding:theme.spacing(1,1,3),
  },
}));

export default function ContentModal({children, data}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchdata=async()=>{
    const {data}=await axios.get(`https://bikeindex.org/api/v3/search?${id}`);
    setContent(data);
  }
  useEffect(() => {
   fetchdata();
  }, []);

  const {id}=useParams();

  return (
    <div>
      <button type="button" className="card mb-3" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {data &&(
             <div className={classes.paper}>
              <div className="ContentModal">
              <img className="Content_portrait" src={data.large_img?data.large_img:unavailableLandscape} alt={data.date_stolen}/>
                  <div className="card-body">
                    <h5 className="card-title text-white">Title :  {data.title}</h5>
                    <p className="card-text text-white">Description: {data.description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item black">Date of stolen:{data.date_stolen}</li>
                    <li className="list-group-item">Year :{data.year}</li>
                    <li className="list-group-item">Location found:{data.location_found}</li>
                    <li className="list-group-item">Stolen location:{data.stolen_location}</li>
                  </ul>
               </div>
              </div>  
          )}   
        </Fade>
      </Modal>
    </div>
  );
}