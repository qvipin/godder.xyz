import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

type Project = {
  name: string;
  description: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    name: "Reindeer",
    description: "A reports/moderation/security Discord bot used in over 200 servers and protecting 100k+ users",
    url: "https://github.com/GodderE2D/Reindeer",
  },
  {
    name: "Fortalice SMP",
    description: "A Minecraft server with custom plugins and membership system",
    url: "https://discord.gg/R2FDvcPXTK",
  },
  {
    name: "Blue Shark River",
    description: "An alliance for growing developer and gaming-oriented projects",
    url: "https://discord.gg/R2FDvcPXTK",
  },
  {
    name: "CyberStudents CTF",
    description: "A Discord bot to manage CTF challenges in the CyberStudents server",
    url: "https://github.com/cyberstudentsacademy/cyberstudents-ctf",
  },
  {
    name: "Tristan SMP",
    description: "Website for Tristan SMP with applications and a marketplace",
    url: "https://github.com/TristanSMP/gateway",
  },
  {
    name: "Disploy",
    description: "Guide and documentation for Disploy, a Discord API library",
    url: "https://github.com/Disploy/disploy",
  },
];

export default function Projects() {
  return (
    <div className="col-span-3 row-span-2 rounded-2xl bg-zinc-950 p-5 shadow md:p-7">
      <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-lg font-extrabold text-transparent md:text-xl">
        My projects
      </h2>
      <div className="prose prose-invert text-inherit">
        <p>
          While I&apos;m not{" "}
          <a href="http://github.com/tristancamejo" target="_blank" rel="noopener noreferrer">
            Tristan
          </a>{" "}
          with countless side projects (and domain names), I do have some work to be featured here.
        </p>
        <div className="not-prose grid grid-cols-1 gap-2 shadow md:auto-rows-fr md:grid-cols-2 md:gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="cursor-pointer rounded-md bg-zinc-900 px-4 py-3 transition-all hover:bg-zinc-800"
            >
              <a href={project.url} rel="noopener noreferrer">
                <span className="mb-1 flex items-center gap-1">
                  <HiOutlineBookmarkAlt className="h-5 w-5" />
                  <h3 className="font-medium">{project.name}</h3>
                </span>
                <p className="text-sm">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
        <p>
          I also have lots of more open-source work and contributions over on my{" "}
          <a href="http://github.com/GodderE2D" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
