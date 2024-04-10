
import {Outlet} from 'react-router-dom'
const Roots = () => {
    return (
        <div className='max-w-5xl mx-auto font-poppins'>
            <Outlet/>
        </div>
    );
};

export default Roots;