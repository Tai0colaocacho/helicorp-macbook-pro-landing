import {
  BatteryCharging,
  Cpu,
  Gauge,
  HardDrive,
  Layers3,
  MonitorUp,
  Network,
  ShieldCheck,
  Sparkles,
  Weight,
} from "lucide-react";

export const specs = [
  {
    label: "Chip",
    value: "Apple M5",
    description: "Built for fast pro workflows and AI-ready performance.",
    icon: Cpu,
  },
  {
    label: "CPU",
    value: "10-core CPU",
    description: "Handles development, productivity and creative workloads.",
    icon: Gauge,
  },
  {
    label: "GPU",
    value: "10-core GPU",
    description: "Smooth graphics performance for design, media and previews.",
    icon: Layers3,
  },
  {
    label: "Neural Engine",
    value: "16-core",
    description: "Accelerates intelligent and machine learning tasks.",
    icon: Sparkles,
  },
  {
    label: "Memory Bandwidth",
    value: "153GB/s",
    description: "Keeps large apps and multitasking workflows responsive.",
    icon: Network,
  },
  {
    label: "Display",
    value: "Liquid Retina XDR",
    description: "High-detail display experience for visual precision.",
    icon: MonitorUp,
  },
  {
    label: "Storage",
    value: "512GB / 1TB / 2TB",
    description: "Flexible SSD options for projects, media and documents.",
    icon: HardDrive,
  },
  {
    label: "Battery",
    value: "All-day battery",
    description: "Designed for long working sessions away from the charger.",
    icon: BatteryCharging,
  },
  {
    label: "Security",
    value: "Privacy focused",
    description: "Hardware and software designed around user privacy.",
    icon: ShieldCheck,
  },
  {
    label: "Mobility",
    value: "Pro portable",
    description: "A compact workstation for class, office, café and travel.",
    icon: Weight,
  },
];