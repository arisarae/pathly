import AuthNavbar from "@/components/Navbar/Auth";
import PublicNavbar from "@/components/Navbar/Public";
import Footer from "@/components/Footer";

export default async function TryPage() {
  return (
    <div className="bg-foreground text-background">
      <AuthNavbar />
      <PublicNavbar />
      <Footer />
    </div>
  );
}
