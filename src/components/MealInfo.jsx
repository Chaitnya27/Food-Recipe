
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
        <div className=" bg-blue-200">
            {
                !info? "":
                <div className="flex ">
                <img className="h-100 w-100
                  p-4 mt-10 ml-5 rounded-4xl 
                     hover:cursor-pointer "   
                src={info.strMealThumb} />
                <div className=" flex  flex-col">
                <h1 className="mt-15 ml-5 font-bold text-3xl">Recipe Details</h1>
                <button className=" bg-red-500 text-amber-50 
                ml-5 mt-5  h-10 w-35 text-shadow-2xs  font-bold 
                rounded-xl  shadow-2xl ">
                    {info.strMeal}
                    </button>
                <h3 className=" text-black font-bold ml-5 mt-5">Intruction's</h3>
                <p className=" mt-5 ml-5 font-medium align-middle">{info.strInstructions}</p>
                </div>
                </div>

            }
           
        </div>
    );
}


export default MealInfo;