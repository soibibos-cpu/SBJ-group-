
// Added React import to define React.ReactNode type
import React from 'react';

export enum ServicePillar {
  Energy = 'Energy & Upstream Operations',
  Maritime = 'Maritime, Shipping & Port Services',
  Civil = 'Civil Engineering & Fabrication',
  Security = 'Security, Surveillance & Intelligence',
  Logistics = 'Logistics, Transportation & Haulage',
  Procurement = 'Procurement & General Trading',
  Diversified = 'Diversified Industrial Services'
}

export interface Subsidiary {
  name: string;
  division?: string;
}

export interface ExecutiveOfficer {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Partner {
  name: string;
  logo: string;
  type: string;
}

export interface PillarData {
  id: string;
  title: ServicePillar;
  description: string;
  focus: string[];
  subsidiaries: Subsidiary[];
  icon: React.ReactNode;
  gridSpan: string;
  image: string;
}