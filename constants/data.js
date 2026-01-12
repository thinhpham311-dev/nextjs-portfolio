import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaPhp,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"
import { SiNextdotjs, SiFramer, SiTailwindcss } from "react-icons/si"
import { RxDesktop, RxReader, RxRocket } from "react-icons/rx"
import { PiCertificateFill } from "react-icons/pi"
import { MdMiscellaneousServices } from "react-icons/md"

// nav data
export const NAVBAR_DATA = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },

  { name: "projects", path: "/projects", icon: <HiViewColumns /> },
  // { name: "services", path: "/services", icon: <MdMiscellaneousServices /> },
  { name: "certificates", path: "/certificates", icon: <PiCertificateFill /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
]

export const socialLinks = [
  {
    href: "https://www.facebook.com/pham.thinh.622183",
    icon: <FaFacebookF />,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/thịnh-phạm-86a6382a7",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/phamthinh30522",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://github.com/thinhpham311-dev",
    icon: <FaGithub />,
    label: "Github",
  },
]

export const RESUMELIST_DATA = [
  {
    title: "skills",
    info: [
      {
        title: "Programing Language",
        icons: [
          {
            title: "Html 5",
            icon: <FaHtml5 />,
          },
          {
            title: "CSS 3",
            icon: <FaCss3 />,
          },
          {
            title: "Javascript",
            icon: <FaJs />,
          },
          {
            title: "PHP",
            icon: <FaPhp />,
          },
        ],
      },
      {
        title: "Framework",
        icons: [
          {
            title: "React JS",
            icon: <FaReact />,
          },
          {
            title: "Next JS",
            icon: <SiNextdotjs />,
          },
          {
            title: "Wordpress",
            icon: <FaWordpress />,
          },
        ],
      },
      {
        title: "UI",
        icons: [
          {
            title: "Bootstrap",
            icon: <FaBootstrap />,
          },
          {
            title: "Framer Motion",
            icon: <SiFramer />,
          },
          {
            title: "Tailwind CSS",
            icon: <SiTailwindcss />,
          },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front End Developer - TechVSI company",
        stage: "01/2023 - 12/2023",
      },
      {
        title: "Web Developer - Antking Company",
        stage: "02/2022 - 12/2022",
      },
      {
        title: "Front end Developer - PAP Technology company",
        stage: "06/2020 - 12/2021",
      },
    ],
  },
  {
    title: "certificate",
    info: [
      {
        title: "SoftWare Engineering Certificate",
        stage: "05/2017 - 09/2020",
      },
      {
        title: "B English Certificate",
        stage: "03/2019",
      },
    ],
  },
  {
    title: "Soft Skill",
    info: [
      {
        title: "Able to work alone and in groups",
      },
      {
        title: "Analysis and problem solving",
      },
      {
        title: "Sociable and friendly",
      },
      {
        title: "Honest and enthusiasm in work",
      },
    ],
  },
]

export const SERVICELIST_DATA = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "Automation Testing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const CERTIFICATE_DATA = [
  {
    title: "Introduction to Cypress Certificate",
    image: "/certificates/certificates_TAU-11e04e3d.png",
    src: "https://testautomationu.applitools.com/certificate/?id=11e04e3d",
  },
  {
    title: "Advanced Cypress Certificate",
    image: "/certificates/certificates_TAU-6f0c37af.png",
    src: "https://testautomationu.applitools.com/certificate/?id=6f0c37af",
  },
]

export const PROJECTLIST_DATA = {
  slides: [
    {
      companyName: "TechVSI Company",
      companyKey: "techvsi-company",
      images: [
        {
          title: "TNB AURA",
          slug: "tnb-aura",
          path: "/projects/project-TNB_Aura.png",
          src: "https://tnbaura.vc",
          companyImage: "/logo/logo-techvsi.webp",
        },
        {
          title: "Not So Little Fair",
          slug: "not-so-little-fair",
          path: "/projects/project-Not_So_Little_Fair.png",
          src: "https://rsvp.notsolittlefair.com",
          companyImage: "/logo/logo-techvsi.webp",
        },
        {
          title: "NTUC Conversation",
          slug: "ntuc-conversation",
          path: "/projects/project-NTUC_Conversation.png",
          src: "https://conversations.ntuc.sg",
          companyImage: "/logo/logo-techvsi.webp",
        },
        {
          title: "Golf Live",
          slug: "golf-live",
          path: "/projects/project-Golf_Live.png",
          src: "https://www.igx360.com/vi-VN",
          companyImage: "/logo/logo-techvsi.webp",
        },
        {
          title: "Child Ed",
          slug: "child-ed",
          path: "/projects/project-Child_Ed.png",
          src: "https://www.childed.com.sg/",
          companyImage: "/logo/logo-techvsi.webp",
        },
        {
          title: "Sony ZV Story",
          slug: "sony-zv-story",
          path: "/projects/project-Sony_ZV_Story.png",
          src: "https://alphauniverse.sony-asia.com/sites/default/files/minisite/static/5b515869-92e4-4a1a-a873-9dfce76b00ce/ap_1740_03Feb2023/index.html",
          companyImage: "/logo/logo-techvsi.webp",
        },
      ],
    },
    {
      companyName: "Antking Company",
      companyKey: "antking-company",
      images: [
        {
          title: "Maxwell Reserve",
          slug: "maxwell-reserve",
          path: "/projects/project-Maxwell_Reserve.png",
          src: "https://maxwellreserve.com",
          companyImage: "/logo/logo-antking.webp",
        },
        {
          title: "Officers Mess Polo Bar",
          slug: "officers-mess-polo-bar",
          path: "/projects/project-Officer_Polo_Bar.png",
          src: "https://officersmesspolobar.sg",
          companyImage: "/logo/logo-antking.webp",
        },
        {
          title: "Shikar",
          slug: "shikar",
          path: "/projects/project-Shikar.png",
          src: "https://shikar.sg",
          companyImage: "/logo/logo-antking.webp",
        },
        {
          title: "Chess DB",
          slug: "chess-db",
          path: "/projects/project-Chess_DB.png",
          src: "https://chessdb.vn",
          companyImage: "/logo/logo-antking.webp",
        },
        {
          title: "Sidekick Find Expert",
          slug: "sidekick-find-expert",
          path: "/projects/project-Sidekick.png",
          src: "https://www.getasidekick.com/",
          companyImage: "/logo/logo-antking.webp",
        },
      ],
    },
    {
      companyName: "Paptech Company",
      companyKey: "paptech-company",
      images: [
        {
          title: "Bado Information",
          slug: "bado-information",
          path: "/projects/project-Bado_Catalog.png",
          src: "https://bado.vn/",
          companyImage: "/logo/logo-paptech.webp",
        },
      ],
    },
    {
      companyName: "Personal Project",
      companyKey: "personal-project",
      images: [
        {
          title: "Portfolio Profile",
          slug: "portfolio-profile",
          path: "/projects/project-Portfolio_Profile.png",
          src: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app",
          github: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app/",
        },
        {
          title: "Catalog Business Animation",
          slug: "catalog-business-animation",
          path: "/projects/project-Magma_Clone.png",
          src: "https://nextjs-landing-page-blond.vercel.app",
          github: "https://github.com/thinhpham311-dev/nextjs-landing-page",
        },
        {
          title: "PTT Movies",
          slug: "ptt-movies",
          path: "/projects/project-React_movies.png",
          src: "https://react-movie-five-delta.vercel.app",
          github: "https://github.com/thinhpham311-dev/react-movie-app",
        },
        {
          title: "Ecommerce Test Local",
          slug: "ecommerce-test-local",
          path: "/projects/project-React_Shopping_Cart.png",
          src: "https://react-shopping-cart-fawn.vercel.app",
          github: "https://github.com/thinhpham311-dev/react-shopping-cart",
        },
      ],
    },
  ],
}
