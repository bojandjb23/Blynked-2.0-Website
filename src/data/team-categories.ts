export interface TeamCategory {
  id: string;
  label: string;
  color: string;
  description: string;
  memberIndexes: number[]; // indexes into teamMembers array
}

export const teamCategories: TeamCategory[] = [
  {
    id: "leadership",
    label: "Leadership",
    color: "#FF7120",
    description:
      "The strategic minds driving Blynked's vision, operations, and innovation across every client partnership.",
    memberIndexes: [0, 1, 2], // Wesley, Thijmen, Bojan
  },
  {
    id: "growth-strategy",
    label: "Growth Strategy",
    color: "#8B5CF6",
    description:
      "Architects of positioning, ABM, and full-funnel strategy that turn complex markets into systematic pipelines.",
    memberIndexes: [3, 6], // Benedicte, Erik
  },
  {
    id: "sales-pipeline",
    label: "Sales & Pipeline",
    color: "#10B981",
    description:
      "Pipeline builders who design sales processes, manage deal flow, and ensure every lead converts predictably.",
    memberIndexes: [4, 7], // Jeroen, Ram
  },
  {
    id: "outbound-execution",
    label: "Outbound Execution",
    color: "#F59E0B",
    description:
      "Multi-channel outreach specialists who keep client calendars filled with qualified conversations daily.",
    memberIndexes: [5, 9], // Teun, Emil
  },
  {
    id: "content-demand-gen",
    label: "Content & Demand Gen",
    color: "#EF4444",
    description:
      "Content strategists who turn thought leadership into a demand generation engine that feeds the pipeline.",
    memberIndexes: [8], // Rick
  },
];
