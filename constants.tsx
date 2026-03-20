
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
    <img 
      src="https://i.imgur.com/SPlUPCE.jpeg" 
      alt="SBJ Group Logo" 
      className="h-10 md:h-12 w-auto object-contain rounded-lg"
      referrerPolicy="no-referrer"
      onError={(e) => {
        // Fallback to CSS logo if image fails
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement?.classList.add('flex');
      }}
    />
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
      { name: "SBJ Upstream Limited", division: "Oil and Gas Operations", logo: "https://i.imgur.com/12gBA90.jpeg" },
      { name: "Bojack Marine", division: "Oil and Gas Technical", logo: "https://i.imgur.com/cxlCaGQ.jpeg" },
      { name: "Lords Wonders Oceanic", division: "Oil and Gas Logistics", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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
      { name: "Bojack Marine", division: "Maritime Services", logo: "https://i.imgur.com/cxlCaGQ.jpeg" },
      { name: "SBJ Upstream Limited", division: "Maritime Division", logo: "https://i.imgur.com/12gBA90.jpeg" },
      { name: "Lords Wonders Oceanic", division: "Maritime Logistics", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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
      { name: "Kalabari Territorial Guards", division: "Surveillance Ops", logo: "https://i.imgur.com/fGjOy5v.png" },
      { name: "Cawthorne Channel Security Surveillance Limited", division: "Monitoring & Tactical Security", logo: "https://i.imgur.com/BVKtQRx.jpeg" }
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
      { name: "SBJ Upstream Limited", division: "Engineering & Construction", logo: "https://i.imgur.com/12gBA90.jpeg" },
      { name: "Bojack Marine", division: "Mechanical Services", logo: "https://i.imgur.com/cxlCaGQ.jpeg" },
      { name: "Lords Wonders Oceanic", division: "Construction Support", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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
      { name: "Lords Wonders Oceanic", division: "Logistics Services", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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
      { name: "SBJ Upstream Limited", division: "Industrial Procurement", logo: "https://i.imgur.com/12gBA90.jpeg" },
      { name: "Cawthorne Channel Security Surveillance Limited", division: "Export and Import", logo: "https://i.imgur.com/BVKtQRx.jpeg" },
      { name: "Lords Wonders Oceanic", division: "General Trading", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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
      { name: "Bojack Marine", division: "Waste & Retail Ops", logo: "https://i.imgur.com/cxlCaGQ.jpeg" },
      { name: "Lords Wonders Oceanic", division: "Communication Services", logo: "https://i.imgur.com/SPlUPCE.jpeg" }
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

export const SUBSIDIARIES: Subsidiary[] = [
  { name: "Kalabari Territorial Guards", division: "Security & Surveillance", logo: "https://i.imgur.com/fGjOy5v.png" },
  { name: "SBJ Upstream Limited", division: "Oil & Gas Operations", logo: "https://i.imgur.com/12gBA90.jpeg" },
  { name: "Bojack Marine", division: "Maritime & Offshore", logo: "https://i.imgur.com/cxlCaGQ.jpeg" },
  { name: "Cawthorne Channel Security Surveillance Limited", division: "Asset Protection", logo: "https://i.imgur.com/BVKtQRx.jpeg" },
  { name: "Lords Wonders Oceanic", division: "Logistics & Trading", logo: "https://i.imgur.com/SPlUPCE.jpeg" },
  { name: "SBJ Business Solutions Limited", division: "Business Consulting", logo: "https://i.imgur.com/LA2gsAt.jpeg" }
];
