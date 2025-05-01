import Image from "next/image";

type Props = {
  person: {
    avatar: string;
    name: string;
    handle: string;
    url: string;
    text: string;
  };
};

export default function TestimonialCard({ person }: Props) {
  return (
    <a
      href={person.url}
      target="_blank"
      className="h-full flex flex-col space-y-4 py-6"
    >
      <div className="flex space-x-4">
        <figure className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={person.avatar}
            alt={`${person.name}'s avatar`}
            width={100}
            height={100}
          />
        </figure>
        <div className="flex flex-col">
          <h2>{person.name}</h2>
          <p className="text-brand">
            {"@"}
            {person.handle}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-justify">{person.text}</p>
    </a>
  );
}
