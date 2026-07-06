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

function HomePage() {
  return (
    <div className="zrg-app">
      <Header />
      <main>
        <Hero />
        <Lawyers />
        <SuccessCases />
        <YoutubeSection />
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
      <Route component={HomePage} />
    </Switch>
  );
}

export default App;
