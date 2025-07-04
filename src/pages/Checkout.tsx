
import CurrentPage from "../components/CurrentPage";
import BillingDatails from "../components/BillingDatails";
import OrderReview from "../components/OrderReview";


const Checkout = () => {
  
  return (
    <div className="font-poppins mt-24 flex flex-col items-center justify-center">
      <CurrentPage currentPage="Checkout" />
      <div className="w-[90%] h-auto flex flex-col md:flex-row items-start justify-sttart gap-8 m-5">
        <BillingDatails />
       <OrderReview />
      </div>
    </div>
  );
};

export default Checkout;
