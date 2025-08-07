// src/data/projects.ts

export interface ProjectDetail {
  heading: string;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string; // The short, one-liner for the teaser card
  details: ProjectDetail[]; // The detailed breakdown for the project page
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AJ Collections E-commerce Platform',
    slug: 'aj-collections',
    category: 'Next.js Web App',
    description: 'A bespoke, high-performance e-commerce platform built from the ground up for a boutique fashion brand.',
    details: [
      {
        heading: "The Challenge",
        text: "AJ Collections required a digital storefront that was not only visually elegant but also incredibly fast and easy for their team to manage. Their previous platform was slow, offered a poor user experience, and failed to reflect the brand's premium quality, especially on mobile devices."
      },
      {
        heading: "The Architectural Solution",
        text: "I engineered a full-stack solution using Next.js for server-side rendering, ensuring lightning-fast page loads and optimal SEO. The backend was built on Supabase, leveraging its PostgreSQL database for robust data management, secure user accounts with Supabase Auth, and efficient image delivery via Supabase Storage. The front-end was crafted with SASS/SCSS for a pixel-perfect, fully responsive design."
      },
      {
        heading: "Key Outcomes & Features",
        text: "The new platform achieved a 95+ Lighthouse performance score, leading to a significant reduction in bounce rates. Key features include a custom-built admin panel for easy product and order management, secure Stripe integration for payments, and a seamless, intuitive user journey from browsing to checkout."
      }
    ],
    techStack: ['Next.js', 'TypeScript', 'Sass/SCSS', 'Stripe', 'Supabase Auth', 'PostgreSQL', 'Supabase Storage'],
    liveLink: 'https://ajcollections.vercel.app/',
    images: ['/projects/ajcollections1.png', '/projects/ajcollections2.png', '/projects/ajcollections3.png', '/projects/ajcollections4.png'],
  },
  {
    id: 5,
    title: 'Genius Mart E-commerce Platform',
    slug: 'genius-mart',
    category: 'Next.js Web App',
    description: 'A feature-rich e-commerce marketplace with a custom payment gateway, multi-panel architecture, and advanced product management.',
    details: [
      {
        heading: "The Challenge",
        text: "Genius Mart aimed to launch a comprehensive online store with a localized payment solution (JazzCash) and a sophisticated management system. The project required three distinct user experiences: a public-facing storefront, a powerful admin dashboard, and a dedicated panel for registered users."
      },
      {
        heading: "The Architectural Solution",
        text: "This platform was architected with Next.js for its performance benefits. A robust backend was built using Supabase, handling complex database schemas with PostgreSQL and secure authentication. For image assets, Cloudinary was integrated for its powerful optimization and delivery capabilities. The key technical achievement was the successful integration of the JazzCash API for seamless local payments."
      },
      {
        heading: "Key Outcomes & Features",
        text: "The result is a scalable, multi-faceted e-commerce solution. It features dynamic product management, a secure local payment gateway, and distinct, permission-based dashboards for administrators and users, providing a tailored experience for every stakeholder."
      }
    ],
    techStack: ['Next.js', 'TypeScript', 'Sass/SCSS', 'JazzCash API', 'Supabase Auth', 'PostgreSQL', 'Cloudinary', 'Supabase Backend'],
    images: ['/projects/genius2.png', '/projects/genius3.png', '/projects/genius4.png', '/projects/genius5.png','/projects/genius7.png'],
  },
  {
    id: 3,
    title: 'Admin Management Dashboard',
    slug: 'admin-management-dashboard',
    category: 'Next.js Web App',
    description: 'A powerful and intuitive internal tool for managing core business operations, users, and application data.',
    details: [
      {
        heading: "The Challenge",
        text: "The client needed a centralized, secure, and user-friendly interface for their administrators to manage application data without direct database access. The system had to be fast, reliable, and capable of displaying complex data in an easily digestible format."
      },
      {
        heading: "The Architectural Solution",
        text: "I developed a secure, server-rendered dashboard using Next.js and TypeScript. Ant Design was chosen for its comprehensive library of enterprise-grade UI components, which accelerated development while ensuring a professional and consistent user interface. The backend was powered by Supabase and a PostgreSQL database, with Cloudinary handling any associated image or media assets."
      },
      {
        heading: "Key Outcomes & Features",
        text: "This dashboard empowered the admin team to perform CRUD (Create, Read, Update, Delete) operations efficiently. It features role-based access control, data visualization widgets, and a fully responsive layout, enabling management tasks from both desktop and tablet devices."
      }
    ],
    techStack: ['Next.js','React', 'Cloudinary', 'Ant Design', 'TypeScript', 'PostgreSQL', 'Supabase Backend'],
    images: ['/projects/admin1.png', '/projects/admin2.png', '/projects/admin3.png'],
  },
  {
    id: 4,
    title: 'Professional User Dashboard',
    slug: 'professional-user-dashboard',
    category: 'Next.js Web App',
    description: 'A personalized and feature-rich user panel for the Genius Mart e-commerce store, enhancing the post-purchase experience.',
    details: [
      {
        heading: "The Challenge",
        text: "To complement the main storefront, a dedicated user dashboard was required where customers could track orders, manage their profile, view purchase history, and handle account settings. The goal was to build user trust and encourage repeat business by providing a transparent and empowering experience."
      },
      {
        heading: "The Architectural Solution",
        text: "Built as an integral part of the Genius Mart ecosystem, this Next.js application provides a secure, server-rendered portal for logged-in users. It communicates with the same robust Supabase/PostgreSQL backend as the main site, ensuring data consistency. A clean, responsive UI was crafted using SASS/SCSS to match the brand's aesthetic."
      },
      {
        heading: "Key Outcomes & Features",
        text: "The dashboard provides customers with full control over their account. Key features include real-time order tracking, a detailed purchase history with invoice access, and an intuitive interface for updating personal information and password management."
      }
    ],
    techStack: ['Next.js','React', 'Cloudinary', 'Sass/SCSS', 'TypeScript', 'PostgreSQL', 'Supabase Backend'],
    images: ['/projects/user1.png', '/projects/user2.png', '/projects/user3.png', '/projects/user4.png'],
  },
   {
    id: 2,
    title: 'Data Analytics Dashboard',
    slug: 'data-analytics-dashboard',
    category: 'React Web App',
    description: 'A client-side rendered dashboard for visualizing complex business intelligence data with an elegant interface.',
    details: [
        {
            heading: "The Challenge",
            text: "A SaaS client needed a highly interactive dashboard to present complex analytics to their end-users. The application had to be fast, responsive, and capable of rendering various chart types from dynamic data sources, without requiring a full page reload for updates."
        },
        {
            heading: "The Architectural Solution",
            text: "I built this application using React and TypeScript for a type-safe, component-based architecture. Ant Design was leveraged for its rich set of UI components, including tables, charts, and graphs, which allowed for rapid development of a sophisticated interface. Cloudinary was integrated for handling any user-uploaded images or report assets."
        },
        {
            heading: "Key Outcomes & Features",
            text: "The final product is a performant, client-side rendered dashboard that provides users with powerful data visualization tools. It features filterable data tables, interactive charts, and a clean, modern design that makes complex data accessible and easy to understand."
        }
    ],
    techStack: ['React', 'Cloudinary', 'Ant Design', 'TypeScript'],
    images: ['/projects/dashboard1.png', '/projects/dashboard2.png', '/projects/dashboard3.png'],
  },
  {
    id: 6,
    title: 'Professional Brand Identities',
    slug: 'professional-brand-identities',
    category: 'Graphic Design',
    description: 'Crafting memorable and cohesive visual identities for startups and established businesses.',
    details: [
      {
        heading: "The Goal",
        text: "To develop complete visual systems that effectively communicate a brand's essence and values. This goes beyond a simple logo to include a full suite of assets that ensure brand consistency across all platforms."
      },
      {
        heading: "My Process",
        text: "My approach involves deep collaboration with the client to understand their mission, target audience, and competitive landscape. I then translate these insights into a visual language, developing the logo, selecting typography, defining a color palette, and creating versatile brand marks. The process is iterative, with feedback loops ensuring the final result is perfectly aligned with the client's vision."
      },
      {
        heading: "The Deliverables",
        text: "Clients receive a comprehensive brand guide and a full set of digital assets, including high-resolution logos for web and print, custom icons, social media templates, and business card designs. The tools used include the Adobe Creative Suite and Figma for a modern, collaborative workflow."
      }
    ],
    techStack: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Figma'],
    images: ['/projects/logo1.png', '/projects/logo2.png', '/projects/logo3.png', '/projects/logo4.png', '/projects/logo5.png'],
  },
  {
    id: 7,
    title: 'Brand Promotion & Marketing Collateral',
    slug: 'professional-brand-promotions',
    category: 'Graphic Design',
    description: 'Designing eye-catching marketing materials that capture attention and drive engagement.',
    details: [
      {
        heading: "The Goal",
        text: "To create visually compelling promotional materials for digital and print campaigns. This includes everything from social media posters and web banners to physical menus and brochures, all designed to be on-brand and effective."
      },
      {
        heading: "My Process",
        text: "I work with clients to understand the objective of each campaign—whether it's announcing a sale, launching a new product, or promoting an event. I then design collateral that is not only beautiful but also strategically sound, with clear calls-to-action and a strong visual hierarchy that guides the viewer's eye."
      },
      {
        heading: "The Deliverables",
        text: "This service provides ready-to-use assets optimized for their intended platform. This includes social media graphics correctly sized for Instagram, Facebook, and Twitter; high-resolution, print-ready PDFs for menus and posters; and optimized web banners for digital advertising campaigns."
      }
    ],
    techStack: ['Adobe Illustrator', 'Photoshop', 'Canva', 'GIMP'],
    images: [ '/projects/poster2.png', '/projects/poster3.png', '/projects/poster5.png', '/projects/poster6.png', '/projects/poster7.png', '/projects/poster8.png', '/projects/poster9.png'],
  },
];