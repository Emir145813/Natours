import Banner from "@/components/HomePage/banner";
import Features from "@/components/HomePage/features";
import Hero from "@/components/HomePage/hero";
import RecentReviews from "@/components/HomePage/recent-reviews";
import SearchBar from "@/components/HomePage/searchbar";
import ToursShowCase from "@/components/Tours/tours-show-case";

export default function Home() {
  return (
    <div className="space-y-20">
      <div>
        <Hero />
        <SearchBar />
      </div>
      <Features />
      <ToursShowCase />
      <RecentReviews />
      <Banner />
    </div>
  );
}
