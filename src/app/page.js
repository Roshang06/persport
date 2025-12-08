import Hero from "@/components/Hero";
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="md:ml-20">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}