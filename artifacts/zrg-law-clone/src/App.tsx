import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import YoutubeSection from "@/components/sections/YoutubeSection";
import IconMarquee from "@/components/sections/IconMarquee";
import ShortsSection from "@/components/sections/ShortsSection";
import Ticker from "@/components/sections/Ticker";
import OfficeBand from "@/components/sections/OfficeBand";
import Certificates from "@/components/sections/Certificates";
import SuccessCases from "@/components/sections/SuccessCases";
import Lawyers from "@/components/sections/Lawyers";
import Faq from "@/components/sections/Faq";
import CtaBlock from "@/components/sections/CtaBlock";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="zrg-app">
      <Header />
      <main>
        <Lawyers />
        <Hero />
        <SuccessCases />
        <YoutubeSection />
        <CtaBlock />
        <IconMarquee />
        <ShortsSection />
        <Ticker />
        <OfficeBand />
        <Certificates />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
