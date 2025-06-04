
import MosaicImage1 from '../assets/mosaic-images/mosaic-image-1.svg';
import MosaicImage2 from '../assets/mosaic-images/mosaic-image-2.svg';
import MosaicImage3 from '../assets/mosaic-images/mosaic-image-3.svg';
import MosaicImage4 from '../assets/mosaic-images/mosaic-image-4.svg';
import MosaicImage5 from '../assets/mosaic-images/mosaic-image-5.svg';
import MosaicImage6 from '../assets/mosaic-images/mosaic-image-6.svg';
import MosaicImage7 from '../assets/mosaic-images/mosaic-image-7.svg';
import MosaicImage8 from '../assets/mosaic-images/mosaic-image-8.svg';
import MosaicImage9 from '../assets/mosaic-images/mosaic-image-9.svg';


const Mosaic = () => {
  return (
    <>
    <section className='font-poppins pt-5 pb-15'>
        <p className='text-gray-500 text-center'>Share your setup with</p>
        <h2 className='text-gray-800 text-2xl font-bold text-center pt-2'>#FuniroFurniture</h2>
        {/* Fazer Grid Layout */} 
        <div className="bg-gray-100 p-0">
              {/* Grid Layout com 5 colunas e 9 linhas  */} 
            <div className="grid grid-cols-10 grid-rows-5 gap-1">
                <div className="col-start- col-end- row-start- row-end- overflow-hidden">
                    <img
                    src={MosaicImage1}
                    alt="Mosaic 1"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start- col-end- row-start- row-end- overflow-hidden">
                    <img
                    src={MosaicImage2}
                    alt="Mosaic 2"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start- col-end- row-start- row-end- overflow-hidden">
                    <img
                    src={MosaicImage3}
                    alt="Mosaic 3"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start- col-end- row-start- row-end- overflow-hidden">
                    <img
                    src={MosaicImage4}
                    alt="Mosaic 4"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start- col-end- row-start- row-end- overflow-hidden">
                    <img
                    src={MosaicImage5}
                    alt="Mosaic 5"
                    className="w-full h-full object-cover"
                    />
                </div>

                
               {/* Grid Layout com 5 colunas e 9 linhas  */} 
               
                <div className="col-start-6 col-end-8 row-start-2 row-end-3 overflow-hidden">
                    <img
                    src={MosaicImage6}
                    alt="Mosaic 6"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start-8 col-end-11 row-start-1 row-end-2 overflow-hidden">
                    <img
                    src={MosaicImage7}
                    alt="Mosaic 7"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start-6 col-end-8 row-start-3 row-end-5 overflow-hidden">
                    <img
                    src={MosaicImage8}
                    alt="Mosaic 8"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-start-8 col-end-10 row-start-3 row-end-4  overflow-hidden">
                    <img
                    src={MosaicImage9}
                    alt="Mosaic 9"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Mosaic