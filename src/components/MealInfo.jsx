
import { useState } from "react";
import { useParams } from "react-router-dom";
function MealInfo() {
    const {mealid} = useParams();
    console.log(mealid);
    const [info,setInfo]= useState()

    const getInfo= async()=>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        
        setInfo(jsonData.meals[0])

    }
    if(info!="")
    {
        getInfo()
    }
    return (  
        <div className="bg-amber-300">
            {
                !info? "":
                <div className="  flex flex-col
                
                sm:justify-center items-center
                
                sm:flex-col  
                md:flex-row 
                lg:flex-row 
                ">
                <img className="
                  p-4 mt-10 ml-5 rounded-4xl 
                     hover:cursor-pointer
                     h-80 w-120
                     
                    
                    sm:h-[25rem] sm:w-[30rem]  
                    md:h-[23rem] md:w-[20rem]
                    lg:h-[27rem] lg:w-[25rem]
                     "   
                src={info.strMealThumb} />
                <div className=" flex  flex-col 
                sm:justify-center items-center
                ">
                <h1 className="mt-10 ml-5 font-bold text-xl
                sm:text-lg  
                md:text-2xl
                lg:text-3xl
                ">Recipe Details</h1>
                <button className=" bg-red-500 text-amber-50 w-30
                ml-5 mt-5  h-10 text-shadow-2xs  font-bold  text-xs
                rounded-xl  shadow-2xl
                sm:w-[10rem] sm:text-sm
                md:w-[13rem] md:text-base
                lg:w-[17rem] lg:text-lg 
                ">
                    {info.strMeal}
                    </button>
                <h3 className=" text-black font-bold ml-5 mt-5 text-xl">Intruction's</h3>
                <p className=" mt-5 ml-5  w-full text-black font-bold
                text-sm  
                sm:text-base  sm:font-medium
                md:text-base md:font-sans md:font-medium
                lg:text-lg  lg:font-serif lg:font-medium
                
                ">{info.strInstructions}</p>
                </div>
                </div>

            }
           
        </div>
    );
}


export default MealInfo;