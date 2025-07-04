import { useFormContext } from "react-hook-form";
import { useViaCep } from "../hooks/useViaCep";


const BillingDatails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  useViaCep();
  
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
      <h1 className="text-2xl font-bold py-10">Billing details</h1>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <label className="text-sm" >
            First Name
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message as string}
            </span>
          )}
        </div>
        <div className="flex flex-col  md:w-1/2 gap-4">
          <label className="text-sm" >
            Last Name
          </label>
          <input
            className="w-full    p-4 border-gray-400 border rounded"
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message as string}
            </span>
          )}
        </div>
      </div>
      <label className="text-sm" >
        Company Name (Optional)
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("companyName")}
      />
      {errors.companyName && (
        <span className="text-red-500 text-sm">
          {errors.companyName.message as string}
        </span>
      )}
      <label className="text-sm" >
        ZIP Code
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("zipCode")}
      />
      {errors.zipCode && (
        <span className="text-red-500 text-sm">
          {errors.zipCode.message as string}
        </span>
      )}
      <label className="text-sm" >
        Country / Region
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text" readOnly
        {...register("country")}
      />
      {errors.country && (
        <span className="text-red-500 text-sm">
          {errors.country.message as string}
        </span>
      )}
      <label className="text-sm" >
        Street adress
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text" 
        {...register("streetAddress")}
      />
      {errors.streetAddress && (
        <span className="text-red-500 text-sm">
          {errors.streetAddress.message as string}
        </span>
      )}
      <label className="text-sm" >
        Province
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("province")}
      />
       {errors.province && (
        <span className="text-red-500 text-sm">
          {errors.province.message as string}
        </span>
      )}
      <label className="text-sm" >
        Town / City
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("town")}
      />
       {errors.town && (
        <span className="text-red-500 text-sm">
          {errors.town.message as string}
        </span>
      )}
      <label className="text-sm" >
        Add-on adress
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("addon")}
      />
       {errors.addon && (
        <span className="text-red-500 text-sm">
          {errors.addon.message as string}
        </span>
      )}
      <label className="text-sm" >
        Email adress
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("email")}
      />
       {errors.email && (
        <span className="text-red-500 text-sm">
          {errors.email.message as string}
        </span>
      )}
      <textarea
        {...register("adicionalInfo")}
        className="w-full mt-10 p-4 border-gray-400 border rounded resize-none"
        placeholder="Additional information"
      ></textarea>
       {errors.adicionalInfo && (
        <span className="text-red-500 text-sm">
          {errors.adicionalInfo.message as string}
        </span>
      )}
    </div>
  );
};

export default BillingDatails;
