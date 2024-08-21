import leoShangProfile from "@/public/profiles/leo.jpg";
import rayZhouProfile from "@/public/profiles/ray.jpg";
import PersonCard from "@/src/components/about/PersonCard";

const peopleObject = {
  // placeholder obj
  Person1: {
    name: "Ray Zhou",
    image: rayZhouProfile,
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/ray-zhou4/",
    github: "https://github.com/rayzhou4",
    instagram: "https://www.instagram.com/ray.zhouuu/",
    message:
      "Hey! I'm Ray, a student at University of British Columbia. I love playing basketball and programming, and so for this project I mainly worked on the back-end servers and front-end features development! Feel free to reach out on LinkedIn!",
  },
  Person2: {
    name: "Leo Shang",
    image: leoShangProfile,
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/leo-shang-604911267/",
    github: "https://github.com/LeoShangTang",
    instagram: "https://www.instagram.com/le.o.shang/",
    message:
      "Hi! I'm Leo, a student at the University of British Columbia. I love playing badminton and graphic design. For this personal project, I mainly worked on the front-end development and the UI design! Feel free to reach out to me on LinkedIn if you have any questions or suggestions!",
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
        <h2 className="text-xl">
          Welcome to Rate My Study Spot, built by students for students
        </h2>
      </div>
      <div className="flex min-h-96 w-full flex-row justify-center gap-8">
        <PersonCard person={peopleObject.Person1} />
        <PersonCard person={peopleObject.Person2} />
      </div>
      {/* <div>Others</div> */}
    </main>
  );
}
