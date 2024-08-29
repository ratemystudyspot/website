// import Login from "@/src/components/login/Login";
import Footer from "../components/footer/Footer";

export default function Home() {
  const rateMyStudySpot = {
    instagram: "",
    discord: "",
    github: "",
    logo: "/logo192.png",
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden">
      {/* Light footer -Dric */}
      <Footer
        RateMyStudySpot={rateMyStudySpot}
        bgFooter="bg-blue-50 border border-blue-200 rounded-md p-4"
        footerLink="text-gray-900"
        onLinkHover="transition-all duration-300 ease-in-out hover:text-sky-600 hover:scale-105"
        dateText="text-black"
        logoText="relative text-transparent bg-clip-text bg-black"
      />
    </main>
  );
}
