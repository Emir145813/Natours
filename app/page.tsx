import Banner from "@/components/HomePage/banner";
import Features from "@/components/HomePage/features";
import Hero from "@/components/HomePage/hero";
import SearchBar from "@/components/HomePage/searchbar";
import ToursShowCase from "@/components/Tours/tours-show-case";

export default function Home() {
  return (
    <div className="space-y-20">
      <div>
        <Hero />
        <SearchBar />
      </div>
      <ToursShowCase />
      <Features />
      <Banner />
    </div>
  );
}
