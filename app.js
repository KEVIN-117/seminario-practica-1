const skillsData = [
  {
    icon: `<div class="text-neon-blue text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>`,
    title: "Frontend Technologies",
    description:
      "Modern frameworks and tools for building responsive, interactive user interfaces.",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Redux",
      "Webpack",
    ],
    labelStyle: "px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-purple text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                        </svg>
                    </div>`,
    title: "Backend & Databases",
    description:
      "Server-side technologies and database systems for building robust applications.",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "GraphQL",
    ],
    labelStyle:
      "px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-pink text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>`,
    title: "AI & Machine Learning",
    description:
      "Tools and frameworks for developing intelligent systems and models.",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenAI API",
      "Hugging Face",
      "ComputerVision",
      "NLP",
    ],
    labelStyle: "px-3 py-1 bg-neon-pink/10 text-neon-pink rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-green text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>`,
    title: "DevOps & Cloud",
    description:
      "Tools and platforms for continuous integration, deployment, and cloud infrastructure.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "GitHubActions",
      "Jenkins",
      "Prometheus",
    ],
    labelStyle:
      "px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-orange text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>`,
    title: "Tools & Methodologies",
    description:
      "Development tools and methodologies for efficient software delivery.",
    skills: [
      "Git",
      "Agile",
      "Scrum",
      "Jira",
      "Figma",
      "VS",
      "Postman",
      "CI/CD",
      "TDD",
    ],
    labelStyle:
      "px-3 py-1 bg-neon-orange/10 text-neon-orange rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-yellow text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>`,
    title: "Security & Performance",
    description:
      "Techniques and tools for securing applications and optimizing performance.",
    skills: [
      "OAuth",
      "JWT",
      "HTTPS",
      "Encryption",
      "OWASP",
      "Caching",
      "LoadBalancing",
      "CDN",
      "Optimization",
    ],
    labelStyle:
      "px-3 py-1 bg-neon-yellow/10 text-neon-yellow rounded-full text-sm",
  },
];

function buildSkillCard(skill) {
  return `
    <div class="bg-dark-medium p-6 rounded-lg overflow-hidden neon-border card-hover">
        ${skill.icon}
        <h3 class="text-xl font-bold mb-2">${skill.title}</h3>
        <p class="text-gray-300 mb-4">
            ${skill.description}
        </p>
        <div class="flex flex-wrap gap-2">
            ${buildTag(skill.skills, skill.labelStyle)}
        </div>
    </div>
  `;
}

function buildSkillsSection() {
  const skillsContainer = document.getElementById("skills");
  const html = `
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-2">Technical <span class="text-gradient">Skills</span></h2>
            <div class="w-24 h-1 bg-neon-blue mx-auto"></div>
            <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
                My comprehensive technical toolkit spans multiple domains, enabling me to deliver end-to-end
                solutions.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${skillsData.map((skill) => buildSkillCard(skill)).join("")}
        </div>
    </div>
  `;

  skillsContainer.innerHTML = html;
}

buildSkillsSection();
