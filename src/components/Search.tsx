import { useParams } from 'react-router-dom';
import fundoShop from '../assets/Search_fundoShop.svg';
import filterIcon from '../assets/Search_filter_icon.svg';
import gridIcon from '../assets/Search_grid_icon.svg';
import listIcon from '../assets/Search_lista_icon.svg';

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
type SearchProps = {
  qtyProductsShow: number,
  totalQtyProducts: number
}
const Search = ({qtyProductsShow, totalQtyProducts}: SearchProps) => {
  const { category } = useParams<{ category?: string }>();

  return (
    <div className="pt-23"> 
      {/* Fundo com título */}
      <div
        className="w-full h-[316px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${fundoShop})` }}
      >
        <h1 className="text-[3rem] font-medium text-black font-['Poppins'] mb-2">
          Shop
        </h1>

        {/* Breadcrumb */}
        <div className="text-[1rem] font-['Poppins'] text-black flex gap-1">
          <span className="font-medium">Home</span>
          <span className="mx-1">›</span>
          <span className="font-light">Shop</span>
          {category && (
            <>
              <span className="mx-1">›</span>
              <span className="font-light">{capitalize(category)}</span>
            </>
          )}
        </div>
      </div>

      {/* Barra de controle */}
      <div className="flex flex-wrap justify-between items-center px-8 py-4 bg-[#F9F1E7] text-sm mt-[-4px]"> {/* Esse -4px é ajuste fino pra ficar no espaço certo */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <img src={filterIcon} alt="Filter" className="w-5 h-5" />
            <span>Filter</span>
          </button>

          <img src={gridIcon} alt="Grid View" className="w-5 h-5" />
          <img src={listIcon} alt="List View" className="w-5 h-5" />

          {/* Separador vertical */}
          <div className="w-[1px] h-5 bg-gray-400 opacity-50 mx-2"></div>

          <span>Showing 1–{qtyProductsShow} of {totalQtyProducts} results</span>
        </div>

        {/* Seletor de quantidade e ordenação */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <input
              type="text"
              defaultValue="16"
              readOnly
              className="w-12 h-10 text-center border border-gray-300 bg-white text-gray-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Short by</span>
            <input
              type="text"
              defaultValue="Default"
              readOnly
              className="w-[120px] h-10 px-3 border border-gray-300 bg-white text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
