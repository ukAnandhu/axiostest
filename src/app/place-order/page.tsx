import DeliveryForm from "@/components/delivery Form/DeliveryForm";
import CartTotals from "@/components/delivery Form/CardTotals";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen  flex justify-center">

      <div className="max-w-6xl w-full grid grid-cols-2 gap-16 px-6 py-16">

        <DeliveryForm />

        <CartTotals />

      </div>

    </div>
  );
}