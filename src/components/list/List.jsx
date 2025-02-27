import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import Cart from './Cart'
import Loader from '../../components/loader/Loader'
import Error from '../../components/error/Error'

const List = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)
    const [data, setData] = useState([])

    useEffect(()=>{
        setIsLoading(true)
        api.get("/ice-creams").
        then((res)=>setData(res.data)).
        catch((error)=>setIsError(error.message)).
        finally(()=>setIsLoading(false))
    },[])
    console.log(data);
    
  return (
    <div className='my-[30px]'>
        {isLoading ? (<Loader/>) : isError ? (<Error info={isError}/>) : (
           <div className='grid mt-[30px] gap-[15px] lg:gap-[30px] lg:grid-cols-2 '>
             {data.map((item)=> (<Cart key={item.id} item={item}/>))}
           </div>
        )}
    </div>
  )
}

export default List