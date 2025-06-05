type DiscontProps = {
  discount: number | undefined;
  date: string;
};

const isNew = (date: string): Boolean => {
  const now = new Date();
  const productDate = new Date(date);
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  return now.getTime() - productDate.getTime() <= SEVEN_DAYS_IN_MS;
};

console.log(isNew("2025-04-28"));

const Discount = ({ discount, date }: DiscontProps) => {
  return (
    <div
      className={`absolute right-0 m-5 px-4 py-5 rounded-[50%] text-white font-bold text-[15px] ${
        discount ? "bg-red-400 " : isNew(date) ? "bg-emerald-500" : null
      } `}
    >
      {discount ? `-${discount}%` : isNew(date) ? "New" : null }
    </div>
  );
};

export default Discount;
