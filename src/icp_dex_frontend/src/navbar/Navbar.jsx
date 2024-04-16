import React from 'react';
import GradientButton from '../buttons/GradientButton';
import { Link as RouterLink } from 'react-router-dom';
const Navbar = ({ NavbarData, setClickConnectWallet }) => {

    return (
        <div className='w-fit sticky top-8 rounded-2xl mx-auto   bg-[#05071D] font-cabin backdrop-blur-md z-50 '>
            <div className='w-full m-8 p-4 flex justify-between gap-8 items-center'>
                <div className='text-base  flex gap-10 items-center'>
                    <span className='font-extrabold'>LOGO</span>
                    <div className="border-l border-white h-12"></div>

                    {
                        NavbarData.Links.map((Link, index) => (
                            <div key={index}>
                                <RouterLink
                                    to={Link.LinkPath}
                                    className='cursor-pointer'
                                >
                                    {Link?.LinkName}
                                </RouterLink>
                            </div>
                        ))
                    }

                </div>
                <div className='flex items-center gap-8'>
                    <div className="border-l border-white h-12"></div>
                    <div className='mr-9'
                        onClick={() => {
                            if (NavbarData.ButtonText === 'Connect Wallet') {
                                setClickConnectWallet(true);
                            }
                        }}>
                        <GradientButton
                            CustomCss={`hover:opacity-75`}
                        >{NavbarData.ButtonText}</GradientButton>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
