import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsDiscord, BsYoutube } from 'react-icons/bs';
import NorthEastIcon from '@mui/icons-material/NorthEast';
function Footer() {
    return (
        <div>
            <hr className='  border-gray-700 ' />
            <div className='grid md:grid-cols-4 grid-cols-2 justify-end  gap-y-12 text-white px-4 sm:px-24 md:pr-12  h-screen items-center' >

                <div className='space-y-4'>
                    <h1>Value swap.io</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li>Home</li>
                        <li>Build</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h1>Learn</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li>Docs <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>Risk <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>WhitePaper <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>Careers <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>Terms of Use <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h1>Ecosystem</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li>Forums <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>Grants <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /></li>
                        <li>Brands assets <NorthEastIcon style={{ fontSize: '1rem', paddingBottom: "1px" }} /> </li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h1>community</h1>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-y-4 text-center md:gap-y-5 pt-4'>

                        <TwitterIcon />
                        <GitHubIcon />
                        <LinkedInIcon />
                        <BsDiscord />
                        <BsYoutube />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer