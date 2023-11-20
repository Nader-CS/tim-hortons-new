import OrderNow from "@/components/order-now/OrderNow";
import PackageInfo from "@/components/package-info/PackageInfo";
import PackageLanding from "@/components/package-landing/PackageLanding";
import PreOrder from "@/components/pre-order/PreOrder";

const Package = () => {
  return (
    <>
      <PackageLanding />
      <OrderNow />
      <PackageInfo />
      <PreOrder />
    </>
  );
};

export default Package;
