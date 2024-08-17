import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import placeholder from "@/src/components/about/placeholder.png";

interface PersonCardProps {
  person: {
    name: string;
    title: string;
    linkedin: string;
    github: string;
    instagram: string;
    message: string;
  };
}

export default function PersonCard({
  person: { name, title, linkedin, github, instagram, message },
}: PersonCardProps) {
  return (
    <div className="w-1/2 rounded-xl bg-white p-8 shadow-md">
      <div className="flex flex-row justify-between">
        <div className="flex gap-4">
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
            }}
            src={placeholder}
            alt="profile picture"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold">{name}</h2>
            <p className="text-xl">{title}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <FaInstagram className="size-8" />
          <a href={instagram}></a>
          <FaGithub className="size-8" />
          <a href={github}></a>
          <FaLinkedin className="size-8" />
          <a href={linkedin}></a>
        </div>
      </div>
      <div className="mt-4 h-px w-full bg-zinc-400" />
      <div className="w-full pt-4">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
