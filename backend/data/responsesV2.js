const responsesV2 = {
  about: {
    keywords: ["about yourself", "who are you"],
    reply:
      "Hi, I'm George Tsindaris. I'm transitioning into software development with a focus on full-stack web applications.",
  },
  projects: {
    keywords: ["projects", "worked on", "applications"],
    reply:
      "I've developed a movie search app using external APIs, a task manager with user login and role-based access, and a RESTful API for CRUD operations.",
  },
  skills: {
    keywords: ["skills", "expertise", "technologies", "stack"],
    reply:
      "I'm skilled in JavaScript, Angular, Node.js, Java, MongoDB, and SQL. I also have experience with RESTful APIs, authentication, and front-end/backend integration.",
  },
  university: {
    keywords: [
      "university",
      "college",
      "degree",
      "higher education",
      "bachelor",
      "education",
    ],
    reply: "I hold a degree in Economics from the University of Crete.",
  },
  bootcamp: {
    keywords: [
      "bootcamp",
      "courses",
      "training",
      "software development bootcamp",
    ],
    reply:
      "I've completed two software development bootcamps focused on Java, databases and web technologies.",
  },
  highschool: {
    keywords: ["high school", "teen", "secondary school"],
    reply:
      "I studied at the 1st High School of Gazi, outside Heraclion, during my teenage years.",
  },
  hobbies: {
    keywords: ["hobbies", "interests", "free time", "outside of work"],
    reply:
      "Outside of coding, I enjoy playing football, gaming, and always looking for ways to improve my performance both on the field and in tech.",
  },
  career: {
    keywords: [
      "career",
      "goals",
      "future",
      "ambitions",
      "where are you heading",
    ],
    reply:
      "I'm aiming to grow as a full-stack developer, contribute to impactful software projects, and continuously sharpen my technical skills.",
  },
  // example of topics that share some keywords
  remoteWork: {
    keywords: ["remote", "home office", "working from home"],
    reply:
      "I'm comfortable and productive working remotely, and I've set up a focused home office environment.",
  },
  workEnvironment: {
    keywords: ["remote", "home office", "work environment"],
    reply:
      "I thrive in supportive work environments, whether remote or in-person, and I prioritize having a distraction-free workspace.",
  },
  // photography : {
  //   keywords: [{
  //     skills: 1,
  //     camera: 4,
  //   }],
  //   reply: "My photography skills are of the highest level. I love taking shots with my camera!"
  // },
  // softSkills: {
  //   keywords: [ {
  //     skills: 4,
  //   }],
  //   reply: " ... "
  // }
};

module.exports = responsesV2;
