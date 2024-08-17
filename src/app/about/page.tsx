import PersonCard from "@/src/components/about/PersonCard";

const peopleObject = {
  // placeholder obj
  Person1: {
    name: "ray zhou",
    title: "cofounder",
    linkedin: "http://google.ca/",
    github: "http://google.ca/",
    instagram: "http://google.ca/",
    message: " yap yap yap",
  },
  Person2: {
    name: "leo shang",
    title: "cofounder",
    linkedin: "http://google.ca/",
    github: "http://google.ca/",
    instagram: "http://google.ca/",
    message: " yap yap yap",
  },
};

export default function Home() {
  return (
    // List of study spots

    <main className="relative flex min-h-screen flex-col items-center justify-around overflow-x-hidden p-12">
      <div className="absolute top-0 z-[-1] h-2/3 w-full rounded-xl bg-blue-200 shadow-md"></div>
      <div className="flex w-full flex-col items-center">
        <h1 className="text-edge-outline cursor-default whitespace-nowrap bg-clip-text px-0.5 py-3.5 font-display text-4xl font-bold sm:text-6xl md:text-8xl">
          About Us
        </h1>
        <h2 className="text-xl">Yap</h2>
      </div>
      <div className="flex h-96 w-full flex-row gap-8">
        <PersonCard person={peopleObject.Person1} />
        <PersonCard person={peopleObject.Person2} />
      </div>
      {/* <div>Others</div> */}
    </main>
  );
}
