import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[url('/images/hero-page/hero-page-3.jpg')] bg-cover bg-center h-screen">
      <div className="h-full bg-radial-[at_25%_25%] from-white/90 to-75% flex justify-center items-center">
        <Container>
          <div className="flex-col items-center justify-center ">
            <h1 className="text-8xl text-center leading-[120%] font-kameron font-medium">
              <span className="text-primary">Explore</span>
              <br />
              the world <br /> differently
            </h1>
            <div className="text-center text-lg font-medium">
              <span className="text-primary font-semibold underline decoration-2 underline-offset-6">
                Unique
              </span>{" "}
              Tours for{" "}
              <span className="text-primary font-semibold underline decoration-2 underline-offset-6">
                Unique
              </span>{" "}
              User .
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <Button className="px-4 py-5 rounded-full">Explore Tours</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
