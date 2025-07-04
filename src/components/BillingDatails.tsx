const BillingDatails = () => {
  return <form className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold py-10">Billing details</h1>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <label className="text-sm" htmlFor="">
                First Name
              </label>
              <input
                className="w-full p-4 border-gray-400 border rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm" htmlFor="">
                Last Name
              </label>
              <input
                className="w-full p-4 border-gray-400 border rounded"
                type="text"
              />
            </div>
          </div>
          <label className="text-sm" htmlFor="">
            Company Name (Optional)
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            ZIP Code
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Country / Region
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Street adress
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Province
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Town / City
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Add-on adress
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <label className="text-sm" htmlFor="">
            Email adress
          </label>
          <input
            className="w-full p-4 border-gray-400 border rounded"
            type="text"
          />
          <textarea placeholder="Additional information"></textarea>
        </form>
}

export default BillingDatails