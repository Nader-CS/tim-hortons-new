import Download from "@/components/download/Download";
import GetApp from "@/components/get-app/GetApp";
import GetReward from "@/components/get-reward/GetReward";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OrderNow from "@/components/order-now/OrderNow";
import RedeemMore from "@/components/redeem-more/RedeemMore";

const Info = () => {
  return (
    <>
      <RedeemMore />
      <OrderNow />
      <HowItWorks />
      <GetReward />
      <GetApp />
    </>
  );
};

export default Info;
