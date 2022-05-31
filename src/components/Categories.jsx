
import React from 'react'
import { ApiCategories } from '../api/CategoriesApi';
import Category from './Category';

function Categories() {
  return <div className="flex justify-between items-center p-5 mobile:flex-col" >
      {
        ApiCategories.map((category)=>{
          return (<Category item={category} key={category.id}/>);
        })
      }
    </div>;
}

export default Categories
