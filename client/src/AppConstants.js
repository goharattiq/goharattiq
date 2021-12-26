const createNavLinks = (link, label) => ({ link, label });
const createSocialLinks = (link, icon) => ({ link, icon });

export const NAV_LINKS = [
  createNavLinks("/", "Home"),
  createNavLinks("about", "About Me"),
  createNavLinks("work", "My Work"),
  createNavLinks("contact", "How To Reach Me"),
];

export const SOCIAL_LINKS = [
  createSocialLinks("https://twitter.com/GoharAttiq", "fa-twitter"),
  createSocialLinks("https://www.facebook.com/mr.gohar.attiq", "fa-facebook"),
  createSocialLinks(
    "https://www.linkedin.com/in/gohar-attiq-42b627197/",
    "fa-linkedin"
  ),
  createSocialLinks("https://github.com/goharattiq", "fa-github"),
];

export const HISTORY = [
  {
    title: "Software Engineer",
    position: "Full Stack Developer",
    company: "Arbisoft",
    period: "June 2021 - Present",
    description:
      "Build new products and features through rapid build/measure/learn iterations. Work collaboratively with Designers, Peer Developers, Architects, and Product Managers on high impact projects. Support the open source community",
  },
];
