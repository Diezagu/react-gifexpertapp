import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
  // const categories =['One Punch','Samurai x','Dragon Ball'];
  const [categories, setCategories] = useState(['Bass']);
  // const handleAdd = () =>{
  //   setCategories( [...categories , 'Malcolm'] );
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories = {categories} setCategories={ setCategories }></AddCategory>
      <hr></hr>
      
      <ol>
        { 
          categories.map( (category, i) =>  
            <GifGrid 
              category = { category }
              key = {category}
              />
          )
        }
      </ol>
    </>
  )
}
