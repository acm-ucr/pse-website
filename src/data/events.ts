import { StaticImageData } from "next/image";
import FDH1 from "@/public/overview/FDH1.webp";
import FDH2 from "@/public/overview/FDH2.webp";
import FDH3 from "@/public/overview/FDH3.webp";
import FDH4 from "@/public/overview/FDH4.webp";
import FDH5 from "@/public/overview/FDH5.webp";
import FDH6 from "@/public/overview/FDH6.webp";
import FDH7 from "@/public/overview/FDH7.webp";
import FDH8 from "@/public/overview/FDH8.webp";
import FDH9 from "@/public/overview/FDH9.webp";
import PSEInsightEvent from "@/public/overview/PSEInsightEvent.webp";
import SHARP1 from "@/public/overview/SHARP1.webp";
import SHARP2 from "@/public/overview/SHARP2.webp";
import SHARP3 from "@/public/overview/SHARP3.webp";
import SHARP4 from "@/public/overview/SHARP4.webp";
import SHARP5 from "@/public/overview/SHARP5.webp";
import Spring1 from "@/public/overview/Spring1.webp";
import Spring2 from "@/public/overview/Spring2.webp";
import Spring3 from "@/public/overview/Spring3.webp";
import Spring4 from "@/public/overview/Spring4.webp";
import Spring5 from "@/public/overview/Spring5.webp";
import Spring6 from "@/public/overview/Spring6.webp";
import Spring7 from "@/public/overview/Spring7.webp";
import Spring8 from "@/public/overview/Spring8.webp";
import Spring9 from "@/public/overview/Spring9.webp";
import Spring10 from "@/public/overview/Spring10.webp";
import UCLAXUCR1 from "@/public/overview/UCLAXUCR1.webp";
import UCLAXUCR2 from "@/public/overview/UCLAXUCR2.webp";
import UCLAXUCR3 from "@/public/overview/UCLAXUCR3.webp";
import UCLAXUCR4 from "@/public/overview/UCLAXUCR4.webp";
import UCLAXUCR5 from "@/public/overview/UCLAXUCR5.webp";

export interface EventItem {
  title: string;
  date: string;
  description: string;
  images: StaticImageData[];
}

export const events: EventItem[] = [
  {
    title: "Spring Recruitment 2025",
    date: "April 7-9, 2025",
    description:
      "PSE holds recruitment every fall and spring quarter of the academic year. In the span of three days, PSE hosts three professional and social events for potential new members to meet the active members. Potential new members then submit an application to be invited to an interview to join PSE. Info Night allows potential new members to learn about PSE’s principles and what we’re all about. Speed Networking/Game Night encourages potential new members to step out of their comfort zone by growing their personal and professional connections with active members. Game Night lets potential new members put their sales and creativity skills to the test, who knows…you might win! BBQ with the Bros lets potential new members and active members mingle over food and games! Recruitment is a fun outlet to step out of your comfort zone and get to know the people of PSE!",
    images: [
      Spring1,
      Spring2,
      Spring3,
      Spring4,
      Spring5,
      Spring6,
      Spring7,
      Spring8,
      Spring9,
      Spring10,
    ],
  },
  {
    title: "Meta Guest Speakers",
    date: "November 22, 2024",
    description:
      "At this particular speaker event, we were joined by employees from Meta, Amazon Web Services, EPIC, and MindgruveMacarta who came and shared their experience with their current positions and insight into how they made it there. PSE members got the opportunity to talk with them afterwards and gain valuable insight into their respective fields as well as set up opportunities to connect with them outside of the event.",
    images: [PSEInsightEvent],
  },
  {
    title: "UCR x UCLA PSE Collab",
    date: "May 9, 2025",
    description:
      "UCR PSE and UCLA PSE came together for a collaborative event at Dockweiler State Beach centered around connection, community, and fun. What started as a simple meetup turned into a meaningful opportunity to network, build friendships, and expand the reach of our organization. By bringing together two unique chapters, we were able to celebrate diversity, strengthen our presence, and show the power of cross-campus unity.",
    images: [UCLAXUCR1, UCLAXUCR2, UCLAXUCR3, UCLAXUCR4, UCLAXUCR5],
  },
  {
    title: "FDH Guest Speaker and Resume Workshop Event",
    date: "October 7, 2025",
    description:
      "As one of our Fall recruitment events open to all UCR students, we hosted guest speakers from FDH, a global supply-chain company. Their team provided an insightful overview of the company and shared valuable career advice for students exploring different professional paths. Following the speaker session, we led a resume workshop where we highlighted the key components of an effective resume and reviewed sample examples with participants.",
    images: [FDH1, FDH2, FDH3, FDH4, FDH5, FDH6, FDH7, FDH8, FDH9],
  },
  {
    title: "SHARP Collab",
    date: "October 30, 2025",
    description:
      "As part of our fraternity’s philanthropy efforts, we collaborated with SHARP UCR and several other organizations to create peanut butter and jelly sandwiches for individuals in need. This event allowed us to give back to the community while also creating a space to connect and socialize with members of PSE and our partner organizations.",
    images: [SHARP1, SHARP2, SHARP3, SHARP4, SHARP5],
  },
];
