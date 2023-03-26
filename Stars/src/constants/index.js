
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      href:"",
    },
    {
      id: "work",
      title: "Work",
      href:"",
    },
    {
      id: "contact",
      title: "Contact",
      href:"",
    },
    {
      id: "Forum",
      title: "Join Community",
      href:"https://fampay.000webhostapp.com/index.php",
    },
    {
      id: "Track",
      title: "Tracker",
      href:"http://localhost:3000/",
    }
  ];
  
  const services = [
    {
      title: "Safe And Secure",
      icon: web,
    },
    {
      title: "Tap And Pay seamlessly ",
      icon: mobile,
    },
    {
      title: "Upto 4X Rewards Every time",
      icon: backend,
    },
    {
      title: "Accepted Everwhere + Subscriptions",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fampay Merchandise",
      company_name: "Fampay",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Fampay offers a wide range of merchandise from cool t shirts and sweatshirts and so much more.",
      ],
    },
    {
      title: "Hoodies And Tshirts",
      company_name: "fampay",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023- May 2023",
      points: [
        "Hoddies, t shirt and so much more for men and women are available in all the sizes and colors .",
      ],
    },
    {
      title: "Smart-Watches & Tech  ",
      company_name: "Boat & Fireboltt",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Fampay provides Smartwatch for everyday goals and Galaxy Smartwatch designed for adventures.",
      ],
    },
    {
      title: "Iphones and Airpods",
      company_name: "Apple",
      icon: meta,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Fampay lets you Explore all Mobiles, Cameras, MP3 Players and so much more from Top Brands.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "",
      description:
        " ''This app is something that every teenager needs. I've been using this app for a while now, and not only does it give me a experience of using a debit card as a teenager, but also gives me idea about savings and many other useful things.'' ",
        
      tags: [
        {
          name: "Abhay Joshi",
          color: "blue-text-gradient",
        },
        {
          name: "16",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
    },
    {
      name: "",
      description:
        " ''I let my child sign up for FamPay and it's been a very convenient tool since. My son has his UPI ID and card without any bank account. He can use it to get his app trials and food ordering etc. He has started saving money through the streak!'' ",
      tags: [
        {
          name: "Meena Joshi",
          color: "blue-text-gradient",
        },
        {
          name: "Ravi's Mom 72",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "",
      description:
        "''FamPay has honestly been a life changer and now I can definitely walk around without checking my wallet if someone flicked cash from it. So glad that I'm able to enjoy and learn how to do transactions through a debit card in my teenage years!''",
      tags: [
        {
          name: "Vinay bihari",
          color: "blue-text-gradient",
        },
        {
          name: "17",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };