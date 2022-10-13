import React, { useEffect, useState } from 'react';
import "./Home.css"
import SingleContent from '../SingleContent/SingleContent';
import CustomPagination from '../Pagination/CustomPagination';


const Home = () => {
    const [items, setItems] = useState({});
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState({}); 

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

             <input type="text"
              placeholder="Search..." 
             className="form-control "
             onChange={(e)=>setQuery(e.target.value)}
             /><br/>
             <div className="row">
              <div className="col-4">
               From<input type="date" className='form-control'/> 
              </div>
              <div className="col-4">To
               <input type="date" className='form-control'/>
              </div>
              <div className="col-4">case
               <input type="text" className='form-control' placeholder='Find Case'/>
              </div>
             </div>
                <br/><br/>
                  {
                    Object.keys(items).length > 0 ?  <>
                    {
                        items.items.bikes.map((bike)=>(                        
                          <SingleContent data={(bike)}/>    
                        ))
                    }  
                    </>:null
                  }
                  <CustomPagination setPage={setPage}/>
        </div>
    );
}

export default Home;
