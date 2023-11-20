import Download from "@/components/download/Download";
import Landing from "@/components/landing/Landing";
import News from "@/components/news/News";
import OrderNow from "@/components/order-now/OrderNow";

const Home = () => {
  return (
    <>
      <Landing />
      <OrderNow />
      <News />
      <Download />
    </>
  );
};

export default Home;
