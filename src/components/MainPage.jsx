import { useState } from 'react';
// import '../App.css'
import MealCard from './MealCard';

function MainPage() {


    const [data,setData] = useState("");
   
    const [search,setSearch] = useState("")
    const [msg ,setMsg] = useState("");

    const handleInput =(e)=>{
        setSearch(e.target.value)
    }

        const myfun = async()=>{
    if(!search){
        setMsg(" Please Enter Something")

    }else{

   const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
   const jsonData = await get.json();
    
    setData(jsonData.meals)
    setMsg("")
    
    
   }
   

    }
   

    return (
        <>
        
        <div className="flex flex-col items-center mt-7">
         <h1 className=' text-3xl font-bold' >FOOD RECIPE APP</h1><br />
         <div className=' flex '>
         <input type="text" placeholder='Search Dish,eg: Veg,Cake etc' 
         className=' border-x-sky-50 bg-gray-200 rounded-xl h-10 w-100  text-xl pl-2'
          onChange={handleInput}/>
         <button className=' border-2 ml-2 bg-orange-500 h-10 w-25 rounded-xl text-amber-50 px-4 text-xl cursor-pointer hover:bg-teal-300  '
          onClick={myfun}>Search</button>
         </div>
         <h4 className='font-bold mt-10'>{msg}</h4>
         <div>
        <MealCard detail={data}/>
         </div>
          
        
          </div>
        
       </>
       
      );
}

export default MainPage;