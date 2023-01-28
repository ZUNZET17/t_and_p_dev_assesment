import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Picture from '../public/images/skincare_picture.png'
import MenuDrawer from '@/components/MenuDrawer'

const inter = Inter({ subsets: ['latin'] })

const LandginPage = () => {

  return (
    <div>
      {/* Navbar */}
      <nav className='max-w-full flex justify-between items-center py-2.5 px-4 sm:px-[100px] bg-white'>
        <div className="logo ml-2.5">
          {/* Logo */}
          <Link href={"/"} className='text-[28px] font-bold'>
            LOGO
          </Link>
        </div>
        {/* Menu Drawer */}
        <MenuDrawer />
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Text */}
        <div className="hero sm:flex sm:justify-between sm:flex-row sm:px-[100px] sm:pb-12 w-full">
          <div className="hero__text p-[26px] pb-[21px] sm:py-0 sm:pl-0 sm:pt-4 md:pt-2 sm:flex sm:justify-center sm:items-center">
            <div className="max-w-md">
              <h1 className='font-bold text-[#104568] text-[28px] sm:text-5xl mb-3 sm:max-w-sm sm:!leading-tight'>This is an<wbr /> example title.</h1>
              <p className='text-[18px] sm:text-[22px]'>Here is some additional text that gives more detail about our main point.</p>
              <Link href={"/shop"} className='mt-5 block max-w-max  px-9 py-4 text-white text-[18px] leading-5 font-bold tracking-wide bg-gradient-to-t from-black to-gray-600 rounded-[10px]'>
                SHOP NOW
              </Link>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero__image px-[27px] pb-[65px] sm:p-0 sm:pt-6 sm:max-w-[50%] sm:pr-auto">
            <Image
              className='w-full'
              src={Picture}
              quality={50}
              width={1152}
              height={1014}
              alt="skincare product"
            />
          </div>
        </div>
      </section>
    </div>
  )
};

export default LandginPage;
