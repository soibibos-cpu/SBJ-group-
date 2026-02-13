
import React from 'react';
import { 
  Droplet, 
  Anchor, 
  Construction, 
  ShieldAlert, 
  Truck, 
  ShoppingCart, 
  Hexagon
} from 'lucide-react';
import { ServicePillar, Subsidiary, ExecutiveOfficer, Partner, PillarData } from './types.ts';

export const BRAND_CONFIG = {
  logoUrl: "https://photos.app.goo.gl/a5PYWsVum8eMNh8w9",
  vision: "To establish higher benchmarks of excellence across the industries through innovative, sustainable and customer-focused solutions, that will foster long-term partnership.",
  mission: "We drive transformative growth by delivering outstanding services, leveraging cutting-edge technologies and a customer-centric approach to consistently enhance positive operational outcome.",
  qualityPolicy: "We are committed to maintaining the highest standards of quality to ensure customer satisfaction, by delivering exceptional product and services that consistently meet and exceed customer’s expectation.",
  contact: {
    address: "40 Railway Close, D/Line, Port Harcourt, Rivers State, Nigeria",
    phone: ["08022444369", "09152022524"],
    email: ["sbjgroupltd@gmail.com", "sbjupstreamltd@gmail.com"]
  }
};

export const SBJLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    <div className="w-2 md:w-3 h-8 md:h-10 bg-safety flex-shrink-0"></div>
    <div className="flex flex-col leading-[0.85]">
      <span className="font-display font-black text-white text-xl md:text-2xl tracking-tighter uppercase">
        SBJ GROUP
      </span>
      <span className="font-display font-medium text-silt text-[0.6em] md:text-[0.7em] tracking-[0.5em] uppercase">
        LTD
      </span>
    </div>
  </div>
);

export const OpuamakubaPattern: React.FC = () => (
  <div className="w-full h-8 flex overflow-hidden opacity-30 pointer-events-none select-none">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="flex-shrink-0 w-32 h-full border-r border-navy/20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-silt/40 rotate-45 transform origin-center"></div>
      </div>
    ))}
  </div>
);

export const PILLARS: PillarData[] = [
  {
    id: 'energy',
    title: ServicePillar.Energy,
    description: "Specialized in upstream oil and gas services, field maintenance, and energy infrastructure development across the Niger Delta.",
    focus: ["Upstream Operations", "Field Maintenance", "Energy Infrastructure"],
    subsidiaries: [
      { name: "SBJ Upstream", division: "Oil and Gas Operations" },
      { name: "SBJ Energy", division: "Oil and Gas Division" },
      { name: "SBJ Construction", division: "Oil and Gas Services" },
      { name: "Bojack Marine Offshore and Onshore", division: "Oil and Gas Technical" },
      { name: "Lords Wonders Oceanic", division: "Oil and Gas Logistics" }
    ],
    icon: <Droplet size={24} />,
    gridSpan: "md:col-span-2 md:row-span-2",
    image: ""
  },
  {
    id: 'maritime',
    title: ServicePillar.Maritime,
    description: "Comprehensive port services, shipping logistics, and offshore support for major industrial operators in the Gulf of Guinea.",
    focus: ["Port Services", "Offshore Support", "Shipping Logistics"],
    subsidiaries: [
      { name: "Bojack Marine Offshore and Onshore", division: "Maritime Services" },
      { name: "SBJ Upstream", division: "Maritime Division" },
      { name: "SBJ Energy", division: "Maritime Support" },
      { name: "SBJ Construction", division: "Maritime & Port Services" },
      { name: "Lords Wonders Oceanic", division: "Maritime Logistics" }
    ],
    icon: <Anchor size={24} />,
    gridSpan: "md:col-span-2",
    image: ""
  },
  {
    id: 'security',
    title: ServicePillar.Security,
    description: "Cutting-edge surveillance, tactical infrastructure protection, and intelligence-led safety solutions for critical national assets.",
    focus: ["Critical Infrastructure Protection", "Intelligence Gathering", "Tactical Security"],
    subsidiaries: [
      { name: "Kalabari Territorial Guards", division: "Surveillance Ops" },
      { name: "Cawthorne Channel Surveillance", division: "Monitoring Services" },
      { name: "Cawthorne Channel Security Services", division: "Tactical Security" }
    ],
    icon: <ShieldAlert size={24} />,
    gridSpan: "md:col-span-1",
    image: ""
  },
  {
    id: 'civil',
    title: ServicePillar.Civil,
    description: "Precision civil engineering, structural fabrication, and large-scale industrial construction projects.",
    focus: ["Structural Fabrication", "Industrial Construction", "Civil Works"],
    subsidiaries: [
      { name: "SBJ Construction", division: "Fabrication & Mechanical" },
      { name: "SBJ Upstream", division: "Engineering & Construction" },
      { name: "SBJ Energy", division: "Civil Construction" },
      { name: "Bojack Marine Offshore and Onshore", division: "Mechanical Services" },
      { name: "Lords Wonders Oceanic", division: "Construction Support" }
    ],
    icon: <Construction size={24} />,
    gridSpan: "md:col-span-1",
    image: ""
  },
  {
    id: 'logistics',
    title: ServicePillar.Logistics,
    description: "Heavy-duty transportation, haulage networks, and integrated supply chain management across West Africa.",
    focus: ["Heavy Haulage", "Supply Chain Management", "Regional Transport"],
    subsidiaries: [
      { name: "Lords Wonders Oceanic", division: "Logistics Services" },
      { name: "SBJ Energy", division: "Logistics Division" },
      { name: "SBJ Construction", division: "Transportation & Haulage" }
    ],
    icon: <Truck size={24} />,
    gridSpan: "md:col-span-1",
    image: ""
  },
  {
    id: 'procurement',
    title: ServicePillar.Procurement,
    description: "Global sourcing and industrial procurement services, ensuring the seamless acquisition of high-spec machinery and parts.",
    focus: ["Global Sourcing", "Industrial Supplies", "Strategic Procurement"],
    subsidiaries: [
      { name: "SBJ Construction", division: "General Procurement" },
      { name: "SBJ Upstream", division: "Industrial Procurement" },
      { name: "Cawthorne Channel Security", division: "Export and Import" },
      { name: "Lords Wonders Oceanic", division: "General Trading" }
    ],
    icon: <ShoppingCart size={24} />,
    gridSpan: "md:col-span-1",
    image: ""
  },
  {
    id: 'diversified',
    title: ServicePillar.Diversified,
    description: "Strategic investments and specialized industrial services providing integrated support to diverse economic sectors.",
    focus: ["Strategic Investments", "Technical Support", "Industrial Consultancy"],
    subsidiaries: [
      { name: "SBJ Construction", division: "Agro-Allied & Real Estate" },
      { name: "Bojack Marine Offshore and Onshore", division: "Waste & Retail Ops" },
      { name: "SBJ Construction", division: "Printing & Media" },
      { name: "Lords Wonders Oceanic", division: "Communication Services" }
    ],
    icon: <Hexagon size={24} />,
    gridSpan: "md:col-span-1",
    image: ""
  }
];

export const EXECUTIVES: ExecutiveOfficer[] = [
  {
    name: "Chief Samuel B. Johnson",
    role: "Chairman & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "With over three decades of engineering leadership, Chief Johnson has steered SBJ Group from a specialized upstream service provider into a global industrial force."
  },
  {
    name: "Engr. Oluchi Adebayo",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "A registered engineer with deep expertise in offshore logistics and terminal management, overseeing the operational efficiency of all group divisions."
  },
  {
    name: "Barr. Chidi Okafor",
    role: "Executive Director, Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Driving the group's intelligence-led security framework and strategic partnerships within the Gulf of Guinea economic corridor."
  }
];

export const PARTNERS: Partner[] = [
  { name: "Shell Nigeria", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png", type: "Energy Sector" },
  { name: "Chevron", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png", type: "Technical Partner" },
  { name: "NPA", logo: "https://nigerianports.gov.ng/wp-content/uploads/2021/05/NPA-LOGO-NEW.png", type: "Maritime Regulator" },
  { name: "NNPC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/NNPC_Limited_logo.svg/1200px-NNPC_Limited_logo.svg.png", type: "National Oil Co." },
  { name: "TotalEnergies", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_TotalEnergies.svg/1200px-Logo_TotalEnergies.svg.png", type: "Strategic Partner" }
];
