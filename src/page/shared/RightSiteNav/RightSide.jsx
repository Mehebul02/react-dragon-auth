import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSide = () => {
    return (
        <div>
          <div className="p-4 border  rounded-md space-y-3">
            <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
            </button>
             <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
         Google
        </button>
          </div>
          <div className="p-4 rounded-md ">
           <h2 className='text-3xl mb-4'>Find Us on</h2>
           <a className='p-4 flex gap-2 items-center text-lg border rounded-t-lg' href=""> <FaFacebook></FaFacebook> Facebook</a>
           <a className='p-4 flex gap-2 items-center text-lg border-x-2 rounded-t-lg' href=""> <FaTwitter></FaTwitter> Twitter</a>
           <a className='p-4 flex gap-2 items-center text-lg border rounded-t-lg' href=""> <FaInstagram></FaInstagram> Instagram</a>
            
          </div>
           {/* G Zone  */}
           <div className="p-4 rounded-md ">
           <h2 className='text-3xl mb-4'>Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
            
          </div>
        </div>
    );
};

export default RightSide;