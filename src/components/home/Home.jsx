
//Complete root of this data and calling the api here.
import React, { useEffect, useState } from 'react';
import "./Home.css";
import SingleContent from '../SingleContent/SingleContent';
import { unavailableLandscape } from '../../Config/config';
import ContentModal from '../ContentModal/ContentModal';
import CustomPagination from '../Pagination/CustomPagination';

import Search from '../Search/Search';


const Home = () => {
    const [items, setItems] = useState({});
    const [profiles, setProfiles]= useState({});
    const [page, setPage] = useState(1);
    

   
    
  function FetchData(){  
        fetch(`https://bikeindex.org/api/v3/search?page=${page}`)
          .then(response=> response.json())
          .then( data=>{console.log(data);
            setItems({items:data})})
      }
    useEffect(() => {
     FetchData();
    }, [page]);

   return (
        <div className='container mt-5'>
             <pre>{JSON.stringify(items.items)}</pre>
               
                  {
                    Object.keys(items).length > 0 ?  <>
                    <Search data={items.items.bikes}/>
                    <h5 className='total'>Total Cases:{ items.items.bikes.length*4854}</h5>
                    {
                        items.items.bikes.map((bike)=>(                        
                         <SingleContent key={bike.id} data={bike}/>
                        ))
                    }  
                    </>:<h1 className='data'>data is loading please wait for some time...</h1>
                  }
                  
                  <CustomPagination setPage={setPage}/>
        </div>
    );
}

export default Home;
