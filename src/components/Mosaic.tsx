
import MosaicImage1 from '../assets/images/mosaic-images/mosaic-image-1.svg';
import MosaicImage2 from '../assets/images/mosaic-images/mosaic-image-2.svg';
import MosaicImage3 from '../assets/images/mosaic-images/mosaic-image-3.svg';
import MosaicImage4 from '../assets/images/mosaic-images/mosaic-image-4.svg';
import MosaicImage5 from '../assets/images/mosaic-images/mosaic-image-5.svg';
import MosaicImage6 from '../assets/images/mosaic-images/mosaic-image-6.svg';
import MosaicImage7 from '../assets/images/mosaic-images/mosaic-image-7.svg';
import MosaicImage8 from '../assets/images/mosaic-images/mosaic-image-8.svg';
import MosaicImage9 from '../assets/images/mosaic-images/mosaic-image-9.svg';


const Mosaic = () => {
  return (
    <>
    <section className='font-poppins pt-5 pb-5'>
        
        {/* Grid Layout */} 

            <div className="grid gap-3 md:p-3">

                <div className='relative pb-10 xl:top-5 col-start-1 col-end-4 row-start-1 row-end-3 md:col-start-8 md:col-end-14 md:row-start-1 md:row-end-1 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-1 overflow-hidden'>
                    <p className=' text-gray-500 text-[1rem] text-center'>Share your setup with</p>
                    <h2 className='text-[#333333] text-[1.5rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[2rem] font-bold text-center sm:pb-5 md:pb-0 pt-0'>#FurniroFurniture</h2>
                </div>

                {/* Parte Esquerda do Grid (Em Desktop) */} 

                <div className="
                    hidden md:block
                    col-start-1 
                    col-end-4 
                    row-start-2 
                    row-end-2
                    md:col-start-1
                    md:col-end-2
                    md:row-start-1
                    md:row-end-4
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage1}
                    alt="Mosaic 1"
                    className="md:w-full h-full object-cover"
                    />
                </div>

                <div className="
                    col-start-1 
                    col-end-3
                    row-start-3
                    row-end-3
                    md:col-start-2
                    md:col-end-9
                    md:row-start-2
                    md:row-end-4
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage2}
                    alt="Mosaic 2"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="
                    hidden md:block  
                    col-start-3
                    col-end-3
                    row-start-4
                    row-end-4
                    md:col-start-1
                    md:col-end-4
                    md:row-start-4
                    md:row-end-7
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage3}
                    alt="Mosaic 3"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="
                    col-start-1
                    col-end-4
                    row-start-5
                    row-end-5
                    md:col-start-4
                    md:col-end-9
                    md:row-start-4
                    md:row-end-6
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage4}
                    alt="Mosaic 4"
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Imagem Central (Em Desktop) */} 

                <div className="
                    col-start-1
                    col-end-4
                    row-start-4
                    row-end-4
                    md:col-start-9
                    md:col-end-13
                    md:row-start-3
                    md:row-end-6
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage5}
                    alt="Mosaic 5"
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Parte Direita do Grid (Em Desktop) */} 

                <div className="
                    col-start-3
                    col-end-3
                    row-start-3
                    row-end-3
                    md:col-start-13
                    md:col-end-17
                    md:row-start-2
                    md:row-end-4
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage6}
                    alt="Mosaic 6"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="
                    col-start-3
                    col-end-3
                    row-start-6
                    row-end-6
                    md:col-start-17
                    md:col-end-21
                    md:row-start-1
                    md:row-end-4
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage7}
                    alt="Mosaic 7"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="
                    col-start-1 
                    col-end-3
                    row-start-6
                    row-end-6
                    md:col-start-13
                    md:col-end-17
                    md:row-start-4
                    md:row-end-7
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage8}
                    alt="Mosaic 8"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="
                    col-start-1 
                    col-end-4
                    row-start-7
                    row-end-7 
                    md:col-start-17
                    md:col-end-21
                    md:row-start-4
                    md:row-end-5
                    md:overflow-hidden
                ">
                    <img
                    src={MosaicImage9}
                    alt="Mosaic 9"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
    </section>
    </>
  )
}

export default Mosaic