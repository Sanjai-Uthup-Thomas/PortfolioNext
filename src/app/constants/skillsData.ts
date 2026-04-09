import { LOGOS } from "./logos";

export type Skill = {
  name: string;
  logo: string;
};

export const skillsData: Skill[] = [
  // 🚀 Core (MOST IMPORTANT)
  { name: "JavaScript", logo: LOGOS.javascript },
  { name: "TypeScript", logo: LOGOS.typescript },
  { name: "React.js", logo: LOGOS.react },
  { name: "Node.js", logo: LOGOS.node },
  { name: "NestJS", logo: LOGOS.nest },

  // ⚙️ Backend Strength
  { name: "Express.js", logo: LOGOS.express },
  { name: "REST APIs", logo: LOGOS.rest },
  { name: "gRPC", logo: LOGOS.grpc },

  // 🗄️ Database (keep only strong ones)
  { name: "MongoDB", logo: LOGOS.mongo },
  { name: "PostgreSQL", logo: LOGOS.postgres },

  // 🔐 Auth & Security
  { name: "JWT", logo: LOGOS.jwt },
  { name: "OAuth2", logo: LOGOS.oauth },

  // 🏗️ Architecture (VERY IMPORTANT for high salary)
  { name: "Microservices", logo: LOGOS.microservices },

  // 💳 Real-world integrations (good signal)
  { name: "Stripe", logo: LOGOS.stripe },
  { name: "Razorpay", logo: LOGOS.razorpay },

  // ⚡ DevOps (high value)
  { name: "Docker", logo: LOGOS.docker },
  { name: "Nginx", logo: LOGOS.nginx },

  // ☁️ Cloud
  { name: "AWS", logo: LOGOS.aws },

  // 🛠️ Essential Tools
  { name: "Git", logo: LOGOS.git },
  { name: "Postman", logo: LOGOS.postman },
];