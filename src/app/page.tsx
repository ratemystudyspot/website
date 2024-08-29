// import Login from "@/src/components/login/Login";
import Footer from "../components/footer_test/Footer";

export default function Home() {
  const rateMyStudySpot = {
    instagram: "https://www.instagram.com/your_instagram",
    discord: "https://discord.gg/your_discord",
    github: "https://github.com/your_github",
    logo: "/logo192.png",
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden">
      <Footer
        RateMyStudySpot={{
          instagram: "https://instagram.com/yourprofile",
          discord: "https://discord.gg/yourinvite",
          github: "https://github.com/yourprofile",
          logo: "/logo192.png",
        }}
        bgColor="bg-white"
        textColor="text-black" // Fresh green text
        textHoverColor="hover:text-blue-600" // More intense green on hover
        date_text_colour="text-black"
        company_text_colour="text-blue-400"
      />
    </main>
  );
}
