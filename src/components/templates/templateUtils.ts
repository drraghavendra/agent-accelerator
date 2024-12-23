import { Bot, Database, Shield, Rocket, ChartBar, Coins, Brain } from "lucide-react";

export const categoryColors = {
  beginner: "bg-green-500/10 text-green-500",
  intermediate: "bg-yellow-500/10 text-yellow-500",
  advanced: "bg-red-500/10 text-red-500"
};

export const templates = [
  {
    title: "Market Analysis Agent",
    description: "Create AI agents for market analysis and trading signals",
    icon: ChartBar,
    category: "advanced",
    arcRequired: "150 ARC"
  },
  {
    title: "DAO Governance Agent",
    description: "Automate DAO governance and proposal management",
    icon: Brain,
    category: "beginner",
    arcRequired: "50 ARC"
  },
  {
    title: "DeFi Trading Bot",
    description: "Build automated trading bots for DeFi protocols",
    icon: Bot,
    category: "intermediate",
    arcRequired: "100 ARC"
  },
  {
    title: "Real Estate Investment Analyzer Agent",
    description: "Analyze real estate investment opportunities",
    icon: Database,
    category: "advanced",
    arcRequired: "250 ARC"
  },
  {
    title: "Liquidity Pool Optimizer",
    description: "Optimize liquidity pool positions and yields",
    icon: Coins,
    category: "advanced",
    arcRequired: "200 ARC"
  },
  {
    title: "MEV Protection Agent",
    description: "Protect transactions from MEV and frontrunning",
    icon: Shield,
    category: "intermediate",
    arcRequired: "150 ARC"
  },
  {
    title: "NFT Market Intelligence",
    description: "Track and analyze NFT market trends",
    icon: Rocket,
    category: "advanced",
    arcRequired: "225 ARC"
  },
];