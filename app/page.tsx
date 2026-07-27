
import Hero from "@/components/HomePage/hero";
import SearchBar from "@/components/HomePage/searchbar";
import ToursShowCase from "@/components/Tours/tours-show-case";

export default function Home() {
  return (
    <div>
      <Hero/>
      <SearchBar/>
      <ToursShowCase/>
    </div>
  );
}
