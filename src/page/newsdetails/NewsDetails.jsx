
import { useParams } from "react-router-dom";
import RightSide from "../shared/RightSiteNav/RightSide";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";


const NewsDetails = () => {
    const {id} =useParams()
    return (
        <div>
            <Header/>
            <Navbar/>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h1 className="text-3xl">News Details</h1>
                <h1>{id}</h1>

            </div>
            <div >
            <RightSide></RightSide>
            </div>
           </div>
          
        </div>
    );
};

export default NewsDetails;