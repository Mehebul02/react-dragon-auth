import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "./shared/Leftsidenav/LeftSideNav";
import RightSide from "./shared/RightSiteNav/RightSide";
import Header from "./shared/header/Header";
import Navbar from "./shared/navbar/Navbar";
import NewsCard from "./newsCard/NewsCard";


const Home = () => {
    const news = useLoaderData()
    // console.log(news)
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <h1 className="text-2xl font-poppins">This home page</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border">
                <LeftSideNav/>

            </div>
            {/* news data  */}
            <div className="md:col-span-2 ">
                {
                    news.map(singleCard => <NewsCard key={singleCard._id} news={singleCard}></NewsCard>)
                }

            </div>
            <div >
                <RightSide/>

            </div>


        </div>


        </div>
    );
};

export default Home;