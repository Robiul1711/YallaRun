export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Articles",
    path: "/articles",
  },
  {
    id: 5,
    name: "Coaches",
    path: "/coaches",
  },
  {
    id: 3,
    name: "Events",
    path: "/events",
  },
  {
    id: 9,
    name: "Magazine",
    path: "/magazine",
  },

  // {
  //   id: 6,
  //   name: "Pricing",
  //   path: "/pricing",
  // },
  {
    id: 7,
    name: "Contact",
    path: "/contact",
  },
];

export const specializations = [
  { id: 1, label: "Dressage Training", value: "Dressage Training" },
  { id: 2, label: "Show Jumping", value: "Show Jumping" },
  { id: 3, label: "Eventing", value: "Eventing" },
  { id: 4, label: "Trail Riding", value: "Trail Riding" },
  { id: 5, label: "Horse Grooming", value: "Horse Grooming" },
  { id: 6, label: "Veterinary Care", value: "Veterinary Care" },
  { id: 7, label: "Farrier Services", value: "Farrier Services" },
  { id: 8, label: "Breeding", value: "Breeding" },
];

export const nationalities = [
  { id: 1, label: "Bangladeshi", value: "Bangladeshi" },
  { id: 2, label: "American", value: "American" },
  { id: 3, label: "British", value: "British" },
  { id: 4, label: "Canadian", value: "Canadian" },
  { id: 5, label: "Australian", value: "Australian" },
  { id: 6, label: "German", value: "German" },
  { id: 7, label: "French", value: "French" },
  { id: 8, label: "Japanese", value: "Japanese" },
  { id: 9, label: "Indian", value: "Indian" },
  { id: 10, label: "Chinese", value: "Chinese" },
];

import { GrUserExpert, GrGroup } from "react-icons/gr";
import { HiOutlineDocument } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import L1 from "@/assets/images/l1.png";
import L2 from "@/assets/images/l2.png";
import L3 from "@/assets/images/l3.png";
import Article1 from "@/assets/images/article1.png";
import Article2 from "@/assets/images/article2.png";
import Article3 from "@/assets/images/article3.png";
import avatar from "@/assets/images/avatar.png";
import Coach1 from "@/assets/images/coach1.png";
import Coach2 from "@/assets/images/coach2.png";
import W1 from "@/assets/images/w1.png";
import W2 from "@/assets/images/w2.png";
import W3 from "@/assets/images/w3.png";
import W4 from "@/assets/images/w4.png";
import W6 from "@/assets/images/w6.png";

export const aboutHomeData = [
  {
    id: 1,
    icon: GrUserExpert,
    title: "100+ Expert Coaches",
    desc: "Certified mentors helping you train, improve, and achieve your goals.",
  },
  {
    id: 2,
    icon: GrGroup,
    title: "200+ Engaged Members",
    desc: "A growing family of passionate runners, from beginners to marathoners.",
  },
  {
    id: 3,
    icon: MdArticle,
    title: "150+ Articles & Training Tips",
    desc: "Fresh, weekly content from trusted voices in the running community..",
  },
  {
    id: 4,
    icon: BsCalendar2Event,
    title: "150+ Annual Events",
    desc: "Marathons, trail runs, and family-friendly challenges across the UAE.",
  },
];

export const upcommingMerathon = [
  {
    id: 1,
    image: L1,
    title: "Dubai Marathon 2025",
    desc: "Experience the beauty of the Hajar Mountains while testing your endurance on rugged off-road trails.",
    time: "Aug 14, 2025 3:41 pm",
    location: "Hajar Mountains, UAE",
    category: "YallaRun Trail Souls Series",
    cost: "free",
  },
  {
    id: 2,
    image: L2,
    title: "Dubai Marathon 2025",
    desc: "Experience the beauty of the Hajar Mountains while testing your endurance on rugged off-road trails.",
    time: "Aug 14, 2025 3:41 pm",
    location: "Hajar Mountains, UAE",
    category: "YallaRun Trail Souls Series",
    cost: "100",
  },
  {
    id: 3,
    image: L2,
    title: "Dubai Marathon 2025",
    desc: "Experience the beauty of the Hajar Mountains while testing your endurance on rugged off-road trails.",
    time: "Aug 14, 2025 3:41 pm",
    location: "Hajar Mountains, UAE",
    category: "YallaRun Trail Souls Series",
    cost: "free",
  },
  {
    id: 1,
    image: L2,
    title: "Dubai Marathon 2025",
    desc: "Experience the beauty of the Hajar Mountains while testing your endurance on rugged off-road trails.",
    time: "Aug 14, 2025 3:41 pm",
    location: "Hajar Mountains, UAE",
    category: "YallaRun Trail Souls Series",
    cost: "free",
  },
];

export const latestArticles = [
  {
    id: 1,
    image: Article1,
    title: "5 Morning Habits Every Runner Should Try",
    category: "Event Highlights & Recaps",
    user_name: "Jerry Helfer",
    date: "Aug 20, 2025",
    avatar: avatar,
    likes: 133,
    comments: 12,
  },
  {
    id: 2,
    image: Article2,
    title: "5 Morning Habits Every Runner Should Try",
    category: "Event Highlights & Recaps",
    user_name: "Jerry Helfer",
    date: "Aug 20, 2025",
    avatar: avatar,
    likes: 133,
    comments: 12,
  },
  {
    id: 3,
    image: Article3,
    title: "5 Morning Habits Every Runner Should Try",
    category: "Event Highlights & Recaps",
    user_name: "Jerry Helfer",
    date: "Aug 20, 2025",
    avatar: avatar,
    likes: 133,
    comments: 12,
  },
];

export const coachData = [
  {
    id: 1,
    image: Coach1,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 2,
    image: Coach2,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 3,
    image: Coach2,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 4,
    image: Coach1,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 1,
    image: Coach1,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 2,
    image: Coach2,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 3,
    image: Coach2,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 4,
    image: Coach1,
    name: "Ali Ahmed",
    category: "Speed & Endurance Coaching",
    location: "Abu Dhabi, UAE",
  },
];

export const price = [
  {
    id: 1,
    plan_name: "Free Plan",
    price: 0.0,
    sub_text: "Start your run, no cost attached",
    advantage: [
      "Browse Articles (6–8 at start, 2/week) ,View Running Events list",
      "See Sponsor Ads",
      "No subscription box",
      "No Premium Merchandise",
    ],
  },
  {
    id: 2,
    plan_name: "Standard Plan",
    price: 55,
    offer_price: 20,
    offer_limit: "for 3 month",
    sub_text: "Train smarter, go further.",
    advantage: [
      "Everything in Free ,Weekly content updates",
      "Early access to Event updates",
      "Sponsor offers & discounts",
      " No Subscription Box",
    ],
  },
  {
    id: 3,
    plan_name: "Standard Plan",
    price: 110,
    offer_price: 15,
    offer_limit: " for 3 month",
    sub_text: "Run. Connect. Elevate – with exclusive perks",
    advantage: [
      "Everything in Standard Plan ,Monthly Personalized Subscription Box",
      "Monthly Personalized Subscription Boxs",
      "Sponsor offers & discounts",
      " Exclusive merchandise (running gear, T-shirts, etc.)",
    ],
  },
];

export const whatYouDo = [
  {
    id: 1,
    iconImage: W1,
    title: "Discover & Learn",
    desc: "Stay updated with articles, weekly stories, and expert insights to improve your running journey.",
  },
  {
    id: 2,
    iconImage: W2,
    title: "Connect with Experts",
    desc: "Find certified coaches, view their profiles, and get guidance tailored to your needs.",
  },
  {
    id: 3,
    iconImage: W3,
    title: "Join Exciting Runs",
    desc: "Track UAE’s marathons, trail runs, and community events to participate and stay active.",
  },
  {
    id: 4,
    iconImage: W4,
    title: "Join Exciting Runs",
    desc: "Track UAE’s marathons, trail runs, and community events to participate and stay active.",
  },
  {
    id: 5,
    iconImage: W1,
    title: "Support from Leading Brands",
    desc: "Discover exclusive offers and spotlights from trusted running and sports sponsors.",
  },
  {
    id: 6,
    iconImage: W6,
    title: "Community Hub",
    desc: "Connect with fellow runners, share achievements, and participate in group challenges",
  },
];

export const eventTypes = [
  { id: 1, label: "Riding Competition", value: "Riding Competition" },
  { id: 2, label: "Horse Care Workshop", value: "Horse Care Workshop" },
  { id: 3, label: "Training Clinic", value: "Training Clinic" },
  { id: 4, label: "Equestrian Expo", value: "Equestrian Expo" },
  { id: 5, label: "Fundraising Gala", value: "Fundraising Gala" },
  { id: 6, label: "Trail Ride Meetup", value: "Trail Ride Meetup" },
  { id: 7, label: "Breeding Seminar", value: "Breeding Seminar" },
  { id: 8, label: "Show Jumping Tournament", value: "Show Jumping Tournament" },
  {
    id: 9,
    label: "Veterinary Awareness Camp",
    value: "Veterinary Awareness Camp",
  },
  { id: 10, label: "Horse Auction", value: "Horse Auction" },
];

export const articleFilters = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Event Highlights & Recapsg",
  },
  {
    id: 3,
    label: "Nutrition & Lifestyle",
  },
  {
    id: 4,
    label: "Training & Tips",
  },
];

import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import Magazine from "@/assets/images/magazine.png";
import demoPdf from "@/assets/pdf/demo.pdf";

export const ContactData = [
  {
    id: 1,
    icon: MdEmail,
    label: "You can Email Me Here",
    text: "support@yallarun.com",
  },
  {
    id: 2,
    icon: MdOutlinePhone,
    label: "Give Me a Call on",
    text: "(303) 420-4261",
  },
  {
    id: 3,
    icon: MdOutlinePhone,
    label: "Location",
    text: "184 Griffin Street, Gilbert, AZ 85233",
  },
];

export const magazineData = [
  {
    id: 1,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 2,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 3,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 4,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 5,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 6,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 7,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
  {
    id: 8,
    image: Magazine,
    pdf: demoPdf,
    title: "The Finish Line",
    date: "Sep 5, 2025",
  },
];

export const eventPreferences = [
  { id: 1, label: "Workshops", value: "Workshops" },
  { id: 2, label: "Competitions", value: "Competitions" },
  { id: 3, label: "Training Clinics", value: "Training Clinics" },
  { id: 4, label: "Trail Rides", value: "Trail Rides" },
  { id: 5, label: "Community Meetups", value: "Community Meetups" },
  { id: 6, label: "Horse Shows", value: "Horse Shows" },
  { id: 7, label: "Charity Events", value: "Charity Events" },
  { id: 8, label: "Educational Seminars", value: "Educational Seminars" },
];

export const tShirtSizes = [
  { id: 1, label: "XS", value: "XS" },
  { id: 2, label: "S", value: "S" },
  { id: 3, label: "M", value: "M" },
  { id: 4, label: "L", value: "L" },
  { id: 5, label: "XL", value: "XL" },
  { id: 6, label: "XXL", value: "XXL" },
  { id: 7, label: "XXXL", value: "XXXL" }, // optional extra-large
];

export const areasOfExpertise = [
  { id: 1, label: "Web Development", value: "Web Development" },
  { id: 2, label: "Mobile App Development", value: "Mobile App Development" },
  { id: 3, label: "UI/UX Design", value: "UI/UX Design" },
  { id: 4, label: "Data Science", value: "Data Science" },
  { id: 5, label: "Machine Learning", value: "Machine Learning" },
  { id: 6, label: "Cloud Computing", value: "Cloud Computing" },
  { id: 7, label: "Cybersecurity", value: "Cybersecurity" },
  { id: 8, label: "Project Management", value: "Project Management" },
];

export const availabilityOptions = [
  { id: 1, label: "Full-Time", value: "Full-Time" },
  { id: 2, label: "Part-Time", value: "Part-Time" },
  { id: 3, label: "Weekdays", value: "Weekdays" },
  { id: 4, label: "Weekends", value: "Weekends" },
  { id: 5, label: "Evenings", value: "Evenings" },
  { id: 6, label: "Mornings", value: "Mornings" },
  { id: 7, label: "Flexible", value: "Flexible" },
  { id: 8, label: "On-Call", value: "On-Call" },
];

export const allComments = [
  {
    id: 1,
    name: "Autumn Phillips",
    date: "5 Aug, 2025",
    avatar: "https://i.pravatar.cc/48?img=5",
    text: "Another critical maintenance task is checking your tires frequently. Proper tire pressure is essential for safety, fuel economy, and comfort. Under-inflated tires cause poor handling and increase the risk of blowouts, while over-inflated tires can lead to uneven wear.",
  },
  {
    id: 2,
    name: "Autumn Phillips",
    date: "5 Aug, 2025",
    avatar: "https://i.pravatar.cc/48?img=5",
    text: "Another critical maintenance task is checking your tires frequently. Proper tire pressure is essential for safety, fuel economy, and comfort. Under-inflated tires cause poor handling and increase the risk of blowouts, while over-inflated tires can lead to uneven wear.",
  },
  {
    id: 3,
    name: "Autumn Phillips",
    date: "5 Aug, 2025",
    avatar: "https://i.pravatar.cc/48?img=5",
    text: "Another critical maintenance task is checking your tires frequently. Proper tire pressure is essential for safety, fuel economy, and comfort. Under-inflated tires cause poor handling and increase the risk of blowouts, while over-inflated tires can lead to uneven wear.",
  },
];
