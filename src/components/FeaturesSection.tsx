import { LuPackage2 } from "react-icons/lu";
import { GoTrophy, GoVerified } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <GoTrophy size={48} className="text-[#B88E2F]" />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: <GoVerified size={48} className="text-[#B88E2F]" />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <LuPackage2 size={48} className="text-[#B88E2F]" />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <BiSupport size={48} className="text-[#B88E2F]" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeaturesSection = () => {
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
            <div className="w-12 h-12 shrink-0 mt-1">{feature.icon}</div>
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
};

export default FeaturesSection;
