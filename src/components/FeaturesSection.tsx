import HighQuality from '../assets/Features_HighQuality.svg';
import FreeShipping from '../assets/Features_Free.svg';
import Warranty from '../assets/Features_Warranty.svg';
import Support from '../assets/Features_Support.svg';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: HighQuality,
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    icon: Warranty,
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: FreeShipping,
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: Support,
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#FAF3EA] py-8 md:py-12 w-full">
      <div
        className="
          max-w-6xl mx-auto px-4 
          flex flex-wrap justify-center gap-y-6 gap-x-8
          lg:justify-between
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex items-start gap-3 
              w-full sm:w-[calc(50%-1rem)] lg:w-auto
              justify-center sm:justify-start
            "
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 shrink-0 mt-1"
            />
            <div className="text-left min-w-[10rem]">
              <h3 className="text-[#242424] font-poppins text-[1.125rem] md:text-xl font-semibold leading-[1.75rem]">
                {feature.title}
              </h3>
              <p className="text-[#898989] font-poppins text-sm md:text-base font-medium leading-[1.5rem]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
