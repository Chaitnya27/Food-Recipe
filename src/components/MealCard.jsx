import { NavLink ,Link } from "react-router-dom";

function MealCard({detail}) {
    console.log(detail );
    
    return (
        <>
        <div className=" flex flex-wrap justify-evenly">
            {!detail?  "Search Valid Dish to Get Receipe" : detail.map((currI)=>{
                return(
                    <div className=" max-w-sm rounded overflow-hidden shadow-lg
                     bg-white p-4  items-center text-center mt-10  hover:shadow-current cursor-grab ">
                        <img className="w-full rounded-md mb-3"
                         src={currI.strMealThumb}  />
                        
                        <p className="text-xl font-bold">{currI.strMeal}</p>
                        
                        <div className=" inline-flex space-x-4 mt-4 ml-8">
                            <NavLink to={`/${currI.idMeal}`}> <button className="bg-orange-500 hover:bg-amber-400 text-white font-semibold py-2 px-4 rounded cursor-pointer">Read Recipe</button></NavLink>
                       

                         <Link  to= {currI.strYoutube} target=" "><button className="bg-orange-500 hover:bg-amber-400 text-white font-semibold py-2 px-4 rounded cursor-pointer">Watch Recipe</button></Link>
                        
                        </div>

                       
                        
                       
                    </div>
                )
            })
            
            }

         
            
        </div>
        
        </>
      );
}

export default MealCard;