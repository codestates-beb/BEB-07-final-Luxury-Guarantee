import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='h-[271px] w-[1920px] bg-black'>
            <div className="h-[134px] w-[1920px] bg-black ">
                <div className=" h-[134px] w-[418px] bg-black "> 
                  <div className="text-white text-[40px] text-center">Luxury Guarantee</div>
                </div>
                <div className="h-[134px] w-[1502px] bg-black">
                <div className="search relative w-[914px] ">
          <input
            className="border-[1px] w-[914px]  text-gray-dark"
            placeholder="input post name or content"
          >
        </input>
          

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;