import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import YoutubeSection from "@/components/sections/YoutubeSection";
import IconMarquee from "@/components/sections/IconMarquee";
import Ticker from "@/components/sections/Ticker";
import SuccessCases from "@/components/sections/SuccessCases";
import Lawyers from "@/components/sections/Lawyers";
import CtaBlock from "@/components/sections/CtaBlock";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="zrg-app">
      <Header />
      <main>
        <Hero />
        <Lawyers />
        <SuccessCases />
        <YoutubeSection />
        <CtaBlock />
        <LeadForm />
        <IconMarquee />
        <Ticker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
