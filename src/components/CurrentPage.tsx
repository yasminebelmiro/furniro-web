
import { Link } from 'react-router-dom';
type CurrentPageProps = {
  currentPage: string; 
}
const CurrentPage = ({currentPage}:CurrentPageProps) => {
  return (
    <div
        className="w-full h-[316px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(https://furniro-web-assets-19.s3.us-east-2.amazonaws.com/search-images/bg-search.svg)` }}
      >
        <h1 className="text-[3rem] font-medium text-black font-['Poppins'] mb-2">
          {currentPage}
        </h1>
        <div className="text-[1rem] font-['Poppins'] text-black flex gap-1">
          <Link to={"/"} className="font-medium">Home</Link>
          <span className="mx-1">›</span>
          <span className="font-light">{currentPage}</span>
          
        </div>
      </div>
  )
}

export default CurrentPage