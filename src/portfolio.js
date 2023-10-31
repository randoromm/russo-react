/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rando Rommot",
  title: "Hi all, I'm Rando",
  subTitle: emoji(
    "A passionate DevOps and Site Realiability Engineer 🚀 having an experience also as Senior Service Manager, Full Stack Developer, Project Manager and Soft-Skills Trainer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1r2HxJBDw2Bn1ufWmWy398u4ZOpqMynw0/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/randoromm",
  linkedin: "https://www.linkedin.com/in/randorommot/",
  gmail: "r.rommot@gmail.com",
  // gitlab: "https://gitlab.com/randoromm",
  facebook: "https://www.facebook.com/rando.rommot",
  instagram: "https://www.instagram.com/randorrrr",
  //medium: "https://medium.com/@r.rommot",
  // stackoverflow: "https://stackoverflow.com/users/10422806/rando-rommot",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Any migrations, builds or configurations you can imagine!"
    ),
    emoji("⚡ SLA/SLI/SLO creation, management and monitoring"),
    emoji(
      "⚡ Incident management, ITIL processes and change management"
    ),
    emoji(
      "⚡ CI/CD processes and automation"
    ),
    emoji(
      "⚡ Integration of third party services"
    ),
    emoji(
      "⚡ IaaS, PaaS, SaaS cloud solutions!"
    ),
    emoji(
      "⚡ Basic full-stack development"
    ),
    emoji(
      "⚡ Machine Learning & Neural Networks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TalTech University",
      logo: require("./assets/images/taltechLogo.png"),
      subHeader: "Information Systems Development",
      duration: "September 2016 - April 2020",
      desc: "Also member of Board of European Students of Technology (BEST)",
      descBullets: [
        "Practical & theoretical software development knowledge",
        "Project manager of largest career day in Estonia: 'Võti Tulevikku 2019'"
      ]
    },
    {
      schoolName: "Keila Kool",
      logo: require("./assets/images/keilakoolLogo.png"),
      subHeader: "High School",
      duration: "September 2012 - April 2015",
      desc: "Specialization in natural sciences"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps (Cloud & On-prem)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL (MSSQL, Postgre, Oracle, Mongo)",
      progressPercentage: "70%"
    },
    {
      Stack: "Software Development (Spring Framework, .NET Framework, Python, React, Angular)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Site Reliablitiy Engineer",
      company: "Eesti Energia",
      companylogo: require("./assets/images/eestiEnergiaLogo.png"),
      date: "June 2023 – Present",
      desc: "Energy Trading Risk Management, Physical Electricity Trading, Flexible Charging Services, e-Mobility",
      descBullets: [
        "SLA/SLI/SLO creation, management and monitoring",
        "Incident management",
        "Automation and CI/CD pipelines",
        "Kubernetes configurations and deployments",
        "Cloud - Terraform",
        "Design and architecture of new projects"
      ]
    },
    {
      role: "Senior Application Specialist",
      company: "Riverty",
      companylogo: require("./assets/images/rivertyLogo.png"),
      date: "Oct 2021 – June 2023",
      desc: "Senior Service Management for largest Credit Risk system of DACH region",
      descBullets: [
        "SLA management and monitoring",
        "Incident management",
        "Second level support",
        "ITIL Processes and Change Management",
        "Monitoring and management of WAF - Web Application Firewall",
        "Automation & scripting (BASH, Solaris, InformixDB, StreamWorks)",
        "SQL (MSSQL, InformixDB, PostgreSQL)"
      ]
    },
    {
      role: "Software Engineer & Team Lead",
      company: "Aktors",
      companylogo: require("./assets/images/aktorsLogo.png"),
      date: "May 2019 – Oct 2021",
      desc: "Financial Systems Department",
      descBullets: [
        "Full-stack java development with Spring Boot",
        "Service Management of estonian rural savings and loan cooperative",
        "Linux, Tomcat, OracleDB",
        "Software Analysis",
        "Leading a summer internship program of Aktors",
        "Leading a team of young developers for a modern SWIFT API project for foreign countries.",
        "React, Java, Docker, CentOS Linux"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all and i'm always ready for coffee talks!",
  number: "+372 53038981",
  email_address: "r.rommot@gmail.com"
};

// Twitter Section yes

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
