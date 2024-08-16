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
    <div className="w-1/2 rounded-xl bg-slate-500 p-8">
      <div className="flex flex-row justify-between">
        <div className="size-40 rounded-full bg-red-500"></div>
        <div className="flex flex-col justify-center">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="size-8 rounded-2xl bg-blue-200">
            <a href={linkedin}></a>
          </div>
          <div className="size-8 rounded-2xl bg-blue-200">
            <a href={github}></a>
          </div>
          <div className="size-8 rounded-2xl bg-blue-200">
            <a href={instagram}></a>
          </div>
        </div>
      </div>
      <div className="w-full pt-6">
        <p>{message}</p>
      </div>
    </div>
  );
}
