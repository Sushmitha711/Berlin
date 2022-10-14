// Search button to search the case but i try to complete this seach but i didn't get this details.

import React, { useState } from 'react';
import "./Search.css"

const Search = (data) => {

   //Search Operation Part
   
   const [searchName, setSearchName] = useState("")
   const [foundUser, setFoundUser] = useState(data)
  
   console.log(data);

   let getData = (e) => {
    const keyword = e.target.value
    console.log(keyword)
    setSearchName(keyword)
};

let filter = () => {
  if (searchName ==!"") {
      const result = foundUser.filter((singleData) => {

          return singleData.id.toLowerCase().startsWith(searchName.toLowerCase())

      })

      setFoundUser(result)
  }
 else if (searchName == "") {
      setFoundUser(data)
  }
  else{
    <h1>Data Not found</h1>
  }
};
let refresh = () => {
  const searchName = ""
  if (searchName == "") {
      setFoundUser(data)
  }
};
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <input type="text" 
      placeholder="Seach..."
      className='forms'
      value={searchName}
      onChange={getData}  
       />
       <input type="button" value="Search" className='forms' onClick={filter} />
       <input type="button" value="Refresh" className='forms' onClick={refresh} />
       {
        foundUser?<></>:"Data not found"
       }
    </div>
  );
}

export default Search;
