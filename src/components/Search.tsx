import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fundoShop from '../assets/images/search-images/bg-search.svg';
import filterIcon from '../assets/images/search-images/filter-icon.svg';
import gridIcon from '../assets/images/search-images/grid-icon.svg';
import listIcon from '../assets/images/search-images/list-icon.svg';

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

type SearchProps = {
  qtyProductsShow: number;
  totalQtyProducts: number;
  setFilters: (filters: { rate: number | null; size: string | null }) => void;
};

const Search = ({
  qtyProductsShow,
  totalQtyProducts,
  setFilters,
}: SearchProps) => {
  const { category } = useParams<{ category?: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [localFilters, setLocalFilters] = useState<{ rate: number | null; size: string | null }>({
    rate: null,
    size: null,
  });

  const sizes = ['P', 'M', 'G'];
  const rates = [1, 2, 3, 4, 5];
  
  const handleFilterChange = (type: 'size' | 'rate', value: string | number) => {
    const newFilters = { ...localFilters };

    if (type === 'size' && typeof value === 'string') {
        newFilters.size = newFilters.size === value ? null : value;
    } else if (type === 'rate' && typeof value === 'number') {
        newFilters.rate = newFilters.rate === value ? null : value;
    }

    setLocalFilters(newFilters);
    setFilters(newFilters);
  };
  
  const clearFilters = () => {
    const cleared = { rate: null, size: null };
    setLocalFilters(cleared);
    setFilters(cleared);
    setIsFilterOpen(false);
  }

  return (
    <div className="pt-23 relative"> 
      {/* Fundo com título */}
      <div
        className="w-full h-[316px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${fundoShop})` }}
      >
        <h1 className="text-[3rem] font-medium text-black font-['Poppins'] mb-2">
          Shop
        </h1>
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
      <div className="flex flex-wrap justify-between items-center px-8 py-4 bg-[#F9F1E7] text-sm mt-[-4px]">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <img src={filterIcon} alt="Filter" className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <img src={gridIcon} alt="Grid View" className="w-5 h-5" />
          <img src={listIcon} alt="List View" className="w-5 h-5" />
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

      {/* Dropdown de Filtros Dinâmico */}
      {isFilterOpen && (
        <div className="absolute z-30 top-full left-8 mt-2 w-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleFilterChange('size', size)}
                  className={`px-4 py-2 rounded-md border ${
                    localFilters.size === size
                      ? 'bg-gold text-white border-gold'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Rating (from)</h4>
            <div className="flex gap-2">
              {rates.map(rate => (
                <button
                  key={rate}
                  onClick={() => handleFilterChange('rate', rate)}
                  className={`px-4 py-2 rounded-md border ${
                    localFilters.rate === rate
                      ? 'bg-gold text-white border-gold'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {rate} ★
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;