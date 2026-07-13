import { useState } from "react";
import { Route, Switch } from "wouter";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import YoutubeSection from "@/components/sections/YoutubeSection";
import IconMarquee from "@/components/sections/IconMarquee";
import Ticker from "@/components/sections/Ticker";
import SuccessCases from "@/components/sections/SuccessCases";
import Lawyers from "@/components/sections/Lawyers";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";
import AdminPage from "@/pages/Admin";
import SuccessCasesPage from "@/pages/SuccessCasesPage";
import { useVisitorTracking } from "@/lib/useVisitorTracking";
import LeadFormModal from "@/components/LeadFormModal";

function HomePage() {
  useVisitorTracking();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="zrg-app">
      <LeadFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Header />
      <main>
        <Hero onOpenConsult={() => setModalOpen(true)} />
        <Lawyers />
        <YoutubeSection />
        <SuccessCases />
        <LeadForm />
        <IconMarquee />
        <Ticker />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
      <Route path="/success-cases" component={SuccessCasesPage} />
      <Route component={HomePage} />
    </Switch>
  );
}

export default App;
