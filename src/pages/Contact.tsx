import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import CurrentPage from "../components/CurrentPage";
import FeaturesSection from "../components/FeaturesSection";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "../schemas/contactSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    toast.success("Contact saved successfully");
  };

  return (
    <div className="font-poppins mt-24">
      <CurrentPage currentPage="Contact" />
      <div className=" p-10 md:p-24 fex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold text-center">Get In Touch With Us</h1>
        <p className="text-center text-gray-500">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-center mt-8">
          <div className="w-[90%] lg:w-1/2 flex flex-col gap-8 items-start justify-start lg:items-center">
            <div className="lg:w-1/2 flex gap-4  items-start">
              <span className="text-2xl">
                <FaLocationDot />
              </span>
              <div className=" flex flex-col">
                <h3 className="text-xl font-bold">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="lg:w-1/2 flex gap-4  items-start">
              <span className="text-2xl">
                <FaPhoneAlt />
              </span>
              <div className=" flex flex-col">
                <h3 className="text-xl font-bold">Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="lg:w-1/2 flex gap-4  items-start">
              <span className="text-2xl">
                <FaClock />
              </span>
              <div className=" flex flex-col">
                <h3 className="text-xl font-bold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] lg:w-1/2 flex flex-col items-start justify-start gap-4 mt-8"
          >
            <label className="font-bold ">Your Name</label>
            <input
              className="w-full border border-gray-400 placeholder:text-gray-400 placeholder:text-sm p-4 rounded "
              type="text"
              placeholder="Abc" {...register("name")}
            />
            {errors.name && (<span className="text-red-500 text-sm">
              {errors.name.message as string}
            </span>)}
            <label className="font-bold ">Email address</label>
            <input
              className="w-full border border-gray-400 placeholder:text-gray-400 placeholder:text-sm p-4 rounded "
              type="email"
              placeholder="Abc@def.com"
              {...register("email")}
            />
            {errors.email && (<span className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>)}
            <label className="font-bold ">Subject</label>
            <input
              className="w-full border border-gray-400 placeholder:text-gray-400 placeholder:text-sm p-4 rounded "
              type="text"
              placeholder="This is an optional"
            {...register("subject")}
            />
            {errors.subject && (<span className="text-red-500 text-sm">
              {errors.subject.message as string}
            </span>)}
            <label className="font-bold ">Message</label>
            <textarea
              className="w-full border border-gray-400 placeholder:text-gray-400 placeholder:text-sm p-4 rounded "
              placeholder="Hi! i'd like to ask about"
              {...register("message")}
            ></textarea>
            {errors.message && (<span className="text-red-500 text-sm">
              {errors.message.message as string}
            </span>)}
            <button className="w-full mt-10 bg-gold text-white py-4 rounded hover:bg-gold/90 ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default Contact;
