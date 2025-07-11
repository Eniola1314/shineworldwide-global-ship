import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;