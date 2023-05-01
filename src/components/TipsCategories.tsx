import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SinglePlan from './SinglePlan'
import SingVip, { catProps } from './SingVip';
import SingFreeCat from './SingFreeCat';

interface Props  {}

const TipsCategories = (props: Props) => {

    const [categories, setcategories] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}api/freecat`,  {
          headers: { 'Content-Type': 'application/json',
        
                  },
                    withCredentials: true
            }
              ).then((res) =>{
                setcategories(res.data.categories)
                console.log(res.data.categories)
              })
      }, [])


  return (
      <>
    <span><h5 className='home-sub'> CATEGORIES</h5></span>

    <span className='freebox'>
    {categories?.map((cat: catProps) => {  return <SingFreeCat key={cat.id} name={cat.category_name} />})
    
    }
    </span>
    </>

  )
}

export default TipsCategories