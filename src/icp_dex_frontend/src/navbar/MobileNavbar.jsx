import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import GradientButton from '../buttons/GradientButton';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../components/utils/useAuthClient';
const MobileNavbar = ({ NavbarData, setClickConnectWallet }) => {
    const [activeLink, setActiveLink] = useState(0);
    const [open, setOpen] = useState(false);
    const { isAuthenticated, login, logout } = useAuth();

    useEffect(() => {
        // console.log(activeLink);
    }, [activeLink]);

    return (
        <div className='mx-10'>
            <div className='w-full sticky top-8 rounded-2xl  bg-[#05071D] font-cabin tracking-wide backdrop-blur-md z-40'>
                <div className='w-full m-8 p-4 flex justify-between lg:gap-8 items-center'>

                    <div className='flex items-center justify-between md:justify-start w-10/12'>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <span className='font-extrabold'>LOGO</span>
                            <div className="border-l border-white h-12 items-center ml-4 lg:ml-0"></div>
                        </div>


                        <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer w-7 h-7'>
                            {open ? <XMarkIcon className='text-white ' /> : <Bars3BottomRightIcon className='text-white' />}
                        </div>
                    </div>
                    <div className='text-base flex  gap-4 lg:gap-8  items-center rounded-b-lg'>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#05071D] rounded-lg left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-2 lg:gap-6 ${open ? 'top-12' : 'top-[-490px]'}`}>
                            {
                                NavbarData.Links.map((Link, index) => (
                                    <li key={index} className='md:ml-8 md:my-0 my-7 font-normal'>
                                        <RouterLink
                                            to={Link.LinkPath}
                                            className='text-white hover:text-orange-500 duration-500'
                                            onClick={() => setActiveLink(index)}
                                        >
                                            <div className='flex flex-col justify-center text-custom-size-14 lg:text-xl items-center'>
                                                {Link?.LinkName}
                                                <div className={`${activeLink === index ? 'rounded-full bg-orange-500 w-1 h-1' : 'rounded-full bg-transparent'}`}></div>
                                            </div>
                                        </RouterLink>
                                    </li>
                                ))
                            }

                            <div className='my-7 font-semibold text-center block md:hidden '>

                                <div
                                    onClick={() => {
                                        if (NavbarData.ButtonText === 'Connect Wallet') {
                                            // console.log("here")
                                            setClickConnectWallet(true);
                                            // login()
                                        }
                                    }}>
                                    <GradientButton
                                        CustomCss={`hover:opacity-75 text-xs md:text-base lg:text-base h-[50px] w-[95px] lg:h-[60px] lg:w-[150px] py-2 lg:py-4`}
                                    >{NavbarData.ButtonText}</GradientButton>
                                </div>
                            </div>

                        </ul>

                    </div>
                    <div className='md:ml-8 md:my-0 my-7 font-semibold md:flex md:items-center md:gap-5 hidden '>
                        <div className="border-l border-white h-12"></div>
                        <div className='mr-9'>
                            <GradientButton
                            >
                                {
                                    NavbarData.ButtonText === "Connect Wallet" ? (
                                        <div
                                            className='hover:opacity-75 text-xs md:text-base lg:text-base h-[50px] w-[95px] lg:h-[60px] lg:w-[150px] py-2 lg:py-4'
                                        >
                                            {!isAuthenticated ? (<div
                                                onClick={() => {
                                                    setClickConnectWallet(true);
                                                }}>
                                                {NavbarData.ButtonText}
                                            </div>) : (
                                                <div onClick={() => {
                                                    logout()
                                                }}>
                                                    {NavbarData.ButtonTextDisconnet}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className='hover:opacity-75 text-xs md:text-base lg:text-base h-[50px] w-[95px] lg:h-[60px] lg:w-[150px] py-2 lg:py-4'>
                                            {NavbarData.ButtonText}
                                        </div>
                                    )
                                }
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
