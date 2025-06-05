import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <> 
    {/* Seção de Hero (Abaixo do Header) */}
    <section className="font-poppins pt-25 pb-75 xl:pb-30 xl:pt-30 px-4 bg-cover bg-center bg-[url(src/assets/images/bg-hero-section.svg)] md:">

      <div className='bg-creme rounded-xl px-5 pt-10 pb-5 mt-30 md:ml-10 md:mr-10 xl:ml-150 xl:mr-10 2xl:ml-300 '>
        <div className='p-3'>
            <p className='tracking-widest text-md md:text-xl xl:text-xl'>New Arrial</p>
            <h2 className='text-[35px] font-bold text-gold pb-2'>Discover Our <br /> New Collection</h2>
            <p className='text-justify text-md md:text-xl xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Link to="/shop"><button className='hover:bg-[#c99c36] cursor-pointer text-white font-bold text-md bg-gold px-15 py-5 mt-10'>BUY NOW</button></Link>
        </div>
      </div>
    
    </section>
    </>
  )
}

export default HeroSection