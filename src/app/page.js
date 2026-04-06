import Hero from "@/components/Hero";
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function HomePage() {
  return (
    <div className="md:ml-20">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}