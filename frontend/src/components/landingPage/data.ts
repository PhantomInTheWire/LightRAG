type Action = {
  href: string;
  label: string;
  variant:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null;
};
export const ACTIONS: Action[] = [
  {
    label: "See Features",
    href: "#features",
    variant: "outline",
  },
  {
    label: "Get Started",
    href: "#",
    variant: "default",
  },
];

export const PEOPLE = [
  {
    id: "135950363",
    name: "Karan",
    designation: "PhantomInTheWire",
  },
  {
    id: "47332922",
    name: "Ishu",
    designation: "ishu-codes",
  },
  {
    id: "146630018",
    name: "Priyanshu",
    designation: "R-Priyanshu",
  },
  {
    id: "153438162",
    name: "Yashvi",
    designation: "codebyyashvi",
  },
];

export const UNIVERSITIES = [
  "Michigan State University",
  "Massachusetts Institute of Technology",
  "University of Michigan",
  "Princeton University",
  "Stanford University",
  "Harvard University",
  "University of Pennsylvania",
  "University of California",
  "University of Chicago",
];

export const FEATURES = [
  {
    icon: "",
    title: "Upload any content",
    desc: "From PDFs and YouTube videos to slides and even recorded lectures, learn everything your way.",
  },
  {
    icon: "",
    title: "Test your knowledge",
    desc: "Create and customize flashcards: edit, delete, star, view sources, and more.",
  },
  {
    icon: "",
    title: "Sources Included",
    desc: "Retrieve accurate and contextual information from your content.",
  },
];

export const STEPS = [
  { img: "", title: "Create a workspace", desc: "" },
  { img: "", title: "Upload materials", desc: "Upload all your materials." },
  {
    img: "",
    title: "Get a cup of a coffee",
    desc: "Cause there's nothing better than a cup of coffee to get started with learning.",
  },
];

export const PRICES = [
  {
    title: "Free",
    price: "0",
    desc: "Start your learning journey here.",
    features: [
      "5 AI chats / day (includes 3/month with Learn+)",
      "3 PDFs or YouTube Links / month",
      "Upload PDFs, each up to 120 pages / 20 MB in size",
      "2 recorded lecture / month",
    ],
    button: "Get Started",
    isPrimary: false,
  },
  {
    title: "Pro (annual)",
    price: "1,000",
    desc: "Learn at the highest level.",
    features: [
      "Unlimited AI chats (includes 100/month with Learn+)",
      "Unlimited PDFs or YouTube Links",
      "Upload PDFs, each up to 2000 pages / 50 MB in size",
      "40 recorded lectures / month",
      "Access to advanced voice mode beta",
    ],
    button: "Choose Pro",
    isPrimary: true,
  },
];

export const TESTIMONIALS = [
  {
    avatar:
      "https://framerusercontent.com/images/fWuqqsO0xh5aOtdsijFa5ya43s.png",
    name: "Mihir Wadekar",
    handle: "mihirwadekar",
    text: "I love this tool, like the YouTube video summarizer! I use it to learn concepts ranging from Econ to Quantum Mechanics, and it makes learning so much easier and more effective.",
    url: "https://x.com/mihirwadekar",
  },
  {
    avatar:
      "https://framerusercontent.com/images/77iAAi0tU0Bn4SnYih27cK4XFQU.png",
    name: "G. Shaw Jr.",
    handle: "gshaw",
    text: "I definitely plan to experiment with Minerva in my online course this summer to offer students an additional method of engagement with more complex topics.",
    url: "https://x.com/gshaw",
  },
  {
    avatar:
      "https://framerusercontent.com/images/JBEU11tjLK40MMvXZRcr2sEF51g.png",
    name: "Nasim Uddin",
    handle: "nasimuddin",
    text: "I wish I had this when I was in school",
    url: "https://x.com/nasimuddin",
  },
  {
    avatar:
      "https://framerusercontent.com/images/62aw1wEl3BGN1ah6ulm1H7pR3o.png",
    name: "Rohan Robinson",
    handle: "rohanrobinson",
    text: "Minerva is awesome , just used it to learn from a biotech roundtable discussion!",
    url: "https://x.com/rohanrobinson",
  },
  {
    avatar:
      "https://framerusercontent.com/images/6uRxcr6Fkzu3JKK92Tk4hBZgkY.jpg",
    name: "Jason Patel",
    handle: "jasonpatel",
    text: 'This Minerva site, with features like "Chat with PDF," has become an integral part of our daily workflow. It has streamlined our process of understanding videos and PDFs.',
    url: "https://x.com/jasonpatel",
  },
  {
    avatar:
      "https://framerusercontent.com/images/t39zCBPho6ANhEECFQrStjtUVME.jpg",
    name: "Kate Doe",
    handle: "katedoe",
    text: "I use Minerva on a daily basis now. It's streamlined my processes and improved how I learn materials.",
    url: "https://x.com/katedoe",
  },
];

export const FOOTER_LINKS = [
  { title: "Terms & Conditions", href: "./terms-conditions" },
  { title: "Privacy Policy", href: "./privacy-policy" },
  { title: "Contact Us", href: "./contact-us" },
];
