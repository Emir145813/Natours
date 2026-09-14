import Banner from "@/components/HomePage/banner";
import Features from "@/components/HomePage/features";
import Hero from "@/components/HomePage/hero";
import RecentReviews from "@/components/HomePage/recent-reviews";
import ToursShowCase from "@/components/Tour/tours-show-case";

export default function Home() {
  return (
    <div className="space-y-20">
      <div>
        <Hero />
        <Features />
      </div>
      <div className="mb-20 space-y-20">
        <ToursShowCase />
        <RecentReviews />
        <Banner />
      </div>
    </div>
  );
}
