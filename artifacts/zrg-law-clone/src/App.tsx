import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import YoutubeSection from "@/components/sections/YoutubeSection";
import IconMarquee from "@/components/sections/IconMarquee";
import ShortsSection from "@/components/sections/ShortsSection";
import Ticker from "@/components/sections/Ticker";
import OfficeBand from "@/components/sections/OfficeBand";
import SuccessCases from "@/components/sections/SuccessCases";
import Lawyers from "@/components/sections/Lawyers";
import Faq from "@/components/sections/Faq";
import CtaBlock from "@/components/sections/CtaBlock";
import LeadForm from "@/components/sections/LeadForm";
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
        <LeadForm />
        <IconMarquee />
        <ShortsSection />
        <Ticker />
        <OfficeBand />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
