import LeftSideNav from "./shared/Leftsidenav/LeftSideNav";
import RightSide from "./shared/RightSiteNav/RightSide";
import Header from "./shared/header/Header";
import Navbar from "./shared/navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h1 className="text-2xl font-poppins">This home page</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="border">
                <LeftSideNav/>

            </div>
            <div className="col-span-2 border">
                <h1>News is Coming....</h1>

            </div>
            <div className="border">
                <RightSide/>

            </div>


        </div>


        </div>
    );
};

export default Home;