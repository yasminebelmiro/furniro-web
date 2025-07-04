import CurrentPage from "../components/CurrentPage";
import BillingDatails from "../components/BillingDatails";
import OrderReview from "../components/OrderReview";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type CheckoutFormData,
  checkoutSchema,
} from "../schemas/checkoutSchema ";
import { toast } from "react-toastify";

const Checkout = () => {
  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    toast.success("Pedido realizado com sucesso!");
  };
  return (
    <div className="font-poppins mt-24 flex flex-col items-center justify-center">
      <CurrentPage currentPage="Checkout" />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-[90%] h-auto flex flex-col md:flex-row items-start justify-sttart gap-8 m-5"
        >
          <BillingDatails />
          <OrderReview />
        </form>
      </FormProvider>
    </div>
  );
};

export default Checkout;
