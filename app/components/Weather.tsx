import React from 'react'
import { useState,useEffect } from 'react'
import { PiSunBold } from 'react-icons/pi'

// const  api = 'https://api.openweathermap.org/data/3.0/onecall?lat=37.507877lon=15.083030&&appid=d7f2302909be07e4e4066c32537729f5'
    // const getWeatheData = async () =>{
    //         const res = await fetch("api",{
    //             next:{
    //                 revalidate: 160,
    //             }
    //         })
    //         return res.json()
    // }
         
 function Weather() {
   const [data,setData] = useState()

    // useEffect(()=>{
    //     getWeatheData().then(res=>(
    //   setData(res)
    // )) 
    // },[])
    

    // console.log(data)
  return (
    <div className= {`flex  items-center w-28 gap-4 p-1 mr-2 ml-2`}>
        <div>           
             {/* <div className=' flex w-full'> <p>Mer-01</p> <p>Nov</p> <p>2023</p></div> */}
            <h3>Catania</h3>
            <p>25°</p>

        </div>
        <PiSunBold size ={30}/>
    </div>
  )
}

export default Weather