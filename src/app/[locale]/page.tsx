import BackToTop from "@/components/BackToTop";
import BookDemo from "@/components/BookDemo";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Commonbar from "@/components/Commonbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import PricingTable from "@/components/PricingTable";
import ProductEnquire from "@/components/ProductEnquire";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  return (
    <div className="main-container w-full  bg-white relative overflow-x-hidden-hidden mx-auto my-0 ">
      <div className="w-[1536px] h-[768px]  bg-cover bg-no-repeat absolute top-[79px] left-[-37px] z-[2]" />
      <Commonbar />
      <Header />
      <main>
        <Hero />
        <ToolsSection />
        <Features />
        <Clients />
        <StatsSection />
        <CallToAction />
        <PricingTable />
        <Testimonials />
        <ProductEnquire />
        <BookDemo />
        <Popup />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}
