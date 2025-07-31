import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CareersWrapper() {
  return (
    <>
      <Navbar />
      <main>
        <Banner className="h-[50vh] font-geologica content-center justify-items-center text-center">
          <h1 className="font-medium text-[#00020E] text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
            Coming Soon
          </h1>
          <p className="font-extralight text-[#6B7280] text-base md:text-lg lg:text-xl">
            This feature is still on progress. Please wait for a little bit more.
          </p>
        </Banner>
      </main>
      <Footer />
    </>
  );
}
