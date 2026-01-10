export type ProcessStep = {
  title: string;
  description: string;
};

export const processNote = "Regular updates and transparent progress.";

const process: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We align on goals, constraints, and success criteria.",
  },
  {
    title: "Plan & estimate",
    description: "Clear scope, milestones, and a realistic timeline.",
  },
  {
    title: "Iterative delivery",
    description: "Ship in small increments and validate early.",
  },
  {
    title: "Launch & support",
    description: "Smooth release, monitoring, and ongoing improvements.",
  },
];

export default process;
