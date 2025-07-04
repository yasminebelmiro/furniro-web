import { useFormContext } from "react-hook-form";

const BillingDatails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
      <h1 className="text-2xl font-bold py-10">Billing details</h1>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <label className="text-sm" htmlFor="">
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
          <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
        Country / Region
      </label>
      <input
        className="w-full p-4 border-gray-400 border rounded"
        type="text"
        {...register("country")}
      />
      {errors.country && (
        <span className="text-red-500 text-sm">
          {errors.country.message as string}
        </span>
      )}
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
      <label className="text-sm" htmlFor="">
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
