import Section1 from "../../assets/images/popup/Section1.png";
import Section2 from "../../assets/images/popup/Section2.png";
import Section3 from "../../assets/images/popup/Section3.png";
import Section4 from "../../assets/images/popup/Section4.png";
import Section5 from "../../assets/images/popup/Section5.png";
import Section6 from "../../assets/images/popup/Section6.png";
import Section7 from "../../assets/images/popup/Section7.png";

type SidebarInfo = {
  title: string;
  subtitle: string;
  body: JSX.Element;
  buttonLink: string;
  image: string;
};

export const sidebarInfos: Record<string, SidebarInfo> = {
  "building-3": {
    title: "Factory",
    subtitle: "Where brands are built and dreams come alive ",
    body: (
      <p className="font-body">
        Since 2012, business leaders have trusted us to solve their strategic
        and creative challenges: from branding, business design, UI/UX design,
        packaging design to communication design across industries and regions.
        Guided by our systematic approach and methodologies, such as{" "}
        <a
          href="https://www.creativeans.com/branding-service/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BrandBuilder®
        </a>{" "}
        and{" "}
        <a
          href="https://www.creativeans.com/business-design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          EDIT Design Thinking®
        </a>
        , we consistently deliver innovative solutions that create lasting
        impact.
      </p>
    ),
    buttonLink: "https://www.creativeans.com/works",
    image: Section1,
  },
  "building-1": {
    title: "Depot",
    subtitle: "12 years and counting",
    body: (
      <p className="font-body">
        Welcome to the Creativeans Depot, a whimsical vault of our journey
        spanning over 12 remarkable years. Imagine a vast, vibrant warehouse
        filled with shelves and crates, each brimming with colorful memories,
        groundbreaking projects, and milestones that have shaped our story. From
        the sparkling ideas that first ignited our creativity to the bold,
        innovative works that pushed the boundaries of design, this depot is a
        treasure trove of our collective imagination. It’s a living archive,
        where each piece is a testament to our passion for crafting brands that
        matter—a place where the past fuels the future, and every corner is an
        inspiration waiting to be rediscovered. Step inside, and explore the
        stories that have defined us.
      </p>
    ),
    buttonLink: "https://www.creativeans.com/awards/",
    image: Section2,
  },
  "building-4": {
    title: "Power Plant",
    subtitle: "Design a sustainable future together",
    body: (
      <p className="font-body">
        Our sustainable design services fuse creativity and strategic expertise
        to integrate eco-friendly practices into your business model. We help
        unify your brand's message with sustainable values, ensuring consistency
        and coherence across all communication channels while fostering
        environmental responsibility and innovation.
      </p>
    ),
    buttonLink:
      "https://www.creativeans.com/solutions/sustainable-design-consulting/",
    image: Section3,
  },
  "building-c": {
    title: "House",
    subtitle: "Let's grow together",
    body: (
      <p className="font-body">
        Joining Creativeans means becoming part of an interdisciplinary
        consultancy with strong values and a unique work environment. We place
        great emphasis on personal development because we want our people to be
        the very best, and your skills and contribution will be rewarded with
        competitive salary and a comprehensive benefits package.
      </p>
    ),
    buttonLink: "https://www.creativeans.com/careers/",
    image: Section4,
  },
  brain: {
    title: "The Brain",
    subtitle: "Empowering the industry",
    body: (
      <p className="font-body">
        Our Brain is a metaphorical space representing the wealth of knowledge,
        creativity, and expertise we've cultivated over the years. It's where we
        gather and share the tools, insights, and ideas that fuel innovation in
        branding and design. By offering free resources to our audience, we
        empower others to explore new creative frontiers and solve their own
        challenges. We are dedicated to making creativity accessible to
        everyone, ensuring that great ideas can be sparked, refined, and
        realised by all.
      </p>
    ),
    buttonLink: "https://www.creativeans.com/resources/",
    image: Section5,
  },
  "building-6": {
    title: "School",
    subtitle: "Everyone can be creative",
    body: (
      <p className="font-body">
        We empower both organisations and individuals by equipping them with the
        essential knowledge and tools necessary for cultivating and enhancing
        their creative capabilities. By offering comprehensive and personalised
        training experiences, we aim to foster creativity and innovation,
        empowering our clients to navigate the dynamic landscape of today’s
        competitive markets with confidence and strategic prowess
      </p>
    ),
    buttonLink: "https://www.creativeans.com/resources/",
    image: Section6,
  },
  train: {
    title: "Train Station",
    subtitle: "We invest in brands that matter",
    body: (
      <p>
        We believe that design has the power to shape the future. Our venture
        team provides both hands-on expertise and coaching to help brands
        accelerate growth and create value. Our investments target visionary
        pre-seed startups ready to disrupt, SMEs poised for exponential growth,
        social enterprises making a significant difference, and government
        agencies seeking programme partners to catalyse change.
      </p>
    ),
    buttonLink: "https://www.creativeans.com/venture-studio/",
    image: Section7,
  },
};
