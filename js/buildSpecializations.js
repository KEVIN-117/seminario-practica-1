const specializationsData = [
  {
    icon: `<div class="text-neon-blue text-4xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>`,
    title: {
      data: "Frontend Development",
      style: "text-gradient",
    },
    description:
      "Creating responsive, intuitive, and visually appealing user interfaces using modern frameworks and libraries. I focus on performance optimization, accessibility, and delivering exceptional user experiences.",
    domainPercentageTools: [
      {
        title: "Modern UI",
        percentage: 95,
        color: "bg-neon-blue",
      },
      {
        title: "React Ecosystem",
        percentage: 90,
        color: "bg-neon-blue",
      },
      {
        title: "Performance",
        percentage: 70,
        color: "bg-neon-blue",
      },
    ],
    tools: ["React.js", "Vue.js", "Next.js", "TypeScript", "Tailwind"],
    tooleLabelStyle:
      "px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full text-sm",
  },
  {
    icon: `<div class="text-neon-purple text-4xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                </div>`,
    title: {
      data: "Backend Development",
      style: "text-gradient",
    },
    description:
      "Building robust, scalable, and secure server-side applications and APIs. I specialize in designing efficient database structures, implementing authentication systems, and optimizing backend performance.",
    domainPercentageTools: [
      {
        title: "API Design",
        percentage: 90,
        color: "bg-neon-purple",
      },
      {
        title: "Database Systems",
        percentage: 95,
        color: "bg-neon-purple",
      },
      {
        title: "Security",
        percentage: 85,
        color: "bg-neon-purple",
      },
    ],
    tools: ["Node.js", "Python", "GraphQL", "MongoDB", "PostgreSQL"],
    tooleLabelStyle:
      "px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm",
  },
  {
    icon: `
            <div class="text-neon-pink text-4xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            </div>
        `,
    title: {
      data: "Artificial Intelligence",
      style: "text-gradient-ai",
    },
    description:
      "Developing intelligent systems using machine learning and deep learning techniques. I focus on natural language processing, computer vision, and creating practical AI solutions that solve real-world problems.",
    domainPercentageTools: [
      {
        title: "Machine Learning",
        percentage: 90,
        color: "bg-neon-pink",
      },
      {
        title: "NLP",
        percentage: 85,
        color: "bg-neon-pink",
      },
      {
        title: "Deep Learning",
        percentage: 80,
        color: "bg-neon-pink",
      },
    ],
    tools: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "LLMs"],
    tooleLabelStyle:
      "px-3 py-1 bg-neon-pink/10 text-neon-pink rounded-full text-sm",
  },
  {
    icon: `
            <div class="text-neon-green text-4xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
        `,
    title: {
      data: "DevOps & Cloud",
      style: "text-gradient-devops",
    },
    description:
      "Implementing CI/CD pipelines, infrastructure as code, and cloud-native solutions. I specialize in containerization, orchestration, and building resilient, scalable infrastructure on major cloud platforms.",
    domainPercentageTools: [
      {
        title: "CI/CD",
        percentage: 95,
        color: "bg-neon-green",
      },
      {
        title: "Cloud Architecture",
        percentage: 90,
        color: "bg-neon-green",
      },
      {
        title: "Containerization",
        percentage: 85,
        color: "bg-neon-green",
      },
    ],
    tools: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"],
    tooleLabelStyle:
      "px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm",
  },
];

function specializationCard(specialization) {
  const {
    icon,
    title,
    description,
    domainPercentageTools,
    tools,
    tooleLabelStyle,
  } = specialization;
  return `
        <div class="bg-dark-medium p-8 rounded-lg neon-border card-hover">
            <div class="flex items-center mb-6">
                ${icon}
                <h3 class="text-2xl font-bold ${title.style}">${title.data}</h3>
            </div>
            <p class="text-gray-300 mb-6">
                ${description}
            </p>
            <div class="space-y-3">
                ${domainPercentageTools
                  .map((tool) => {
                    return `
                        <div class="flex items-center">
                            <div class="w-1/3 text-sm text-gray-400">${tool.title}: ${tool.percentage}%</div>
                            <div class="w-2/3 bg-dark rounded-full h-2">
                                <div class="${tool.color} h-2 rounded-full" style="width: ${tool.percentage}%"></div>
                            </div>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
            <div class="mt-6 flex flex-wrap gap-2">
                ${buildTag(tools, tooleLabelStyle)}
            </div>
        </div>
    `;
}

function buildSpecializationsSection() {
  const specializationsContainer = document.getElementById("specializations");
  const html = `
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-2">My <span class="text-gradient">Specializations</span></h2>
                <div class="w-24 h-1 bg-neon-blue mx-auto"></div>
                <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
                    I specialize in four key areas of modern technology, bringing a comprehensive approach to every
                    project.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${specializationsData
                  .map((specialization) => specializationCard(specialization))
                  .join("")}
            </div>
        </div>
    `;

  specializationsContainer.innerHTML = html;
}



buildSpecializationsSection();
