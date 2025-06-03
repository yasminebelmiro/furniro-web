// src/components/CategorySection.tsx
import { Link } from 'react-router-dom';

import CategoryLiving  from '../assets/Category_Living.svg';
import CategoryDining  from '../assets/Category_Dining.svg';
import CategoryBedroom from '../assets/Category_Bedroom.svg';

type Category = {
  name: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  { name: 'Dining',  image: CategoryDining,  link: '/shop/dining' },
  { name: 'Living',  image: CategoryLiving,  link: '/shop/living' },
  { name: 'Bedroom', image: CategoryBedroom, link: '/shop/bedroom' },
];

export default function CategorySection() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center font-poppins">
        {/* Título conforme Figma */}
        <h2
          className="
            text-[2rem] font-bold text-[#333333] 
            leading-normal mb-2
          "
        >
          Browse The Range
        </h2>
        {/* Subtítulo conforme Figma */}
        <p
          className="
            text-[1.25rem] font-normal text-[#666666] 
            leading-normal mb-8 
            mx-auto 
            w-full max-w-[34.9375rem] px-4
          "
        >
          Explore our wide range of quality furniture
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link to={cat.link} key={cat.name} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={cat.image}
                  alt={`${cat.name} category`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="
                  mt-4 text-[1.5rem] font-semibold text-[#333333] 
                  leading-normal text-center
                  group-hover:text-orange-600 transition-colors
                "
              >
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
