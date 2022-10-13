import React from 'react';
import Pagination from "@material-ui/lab/Pagination"


const CustomPagination = ({setPage, numberOfPages=20}) => {
   const handlePageChange=(page)=>{
    setPage(page);
     window.scroll(0,0);
   }
   
   
    return (
        <div 
        style={{
          width:"100%",
          display:"flex",
          justifyContent:"center",
          marginTop:"10",
        }}>
           <Pagination count={numberOfPages} onChange={(e)=>handlePageChange(e.target.textContent)} color="primary"/>
        </div>
    );
}

export default CustomPagination;
