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
    name: "leo shang tang",
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

    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden p-12">
      <div className="flex w-full flex-col items-center">
        <h1>About Us</h1>
        <h2>Yap</h2>
      </div>
      <div className="flex h-96 w-full flex-row gap-4">
        <PersonCard person={peopleObject.Person1} />
        <PersonCard person={peopleObject.Person2} />
      </div>
      <div>Others</div>
    </main>
  );
}
