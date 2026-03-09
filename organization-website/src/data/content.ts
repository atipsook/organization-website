// Financial Club Content Data for School Project

export const companyInfo = {
  name: "NextGen Finance Club",
  tagline: "Learn Money. Lead the future",
  taglineFull: "Where students Become Smart Investors",
  mission: "NextGenFinance is a non-profit organisation emphasising financial literacy for the youth. Financial literacy is often neglected in general education, however, it is an essential skill to lead a good life. We hope to equip the youth with key money habits, and saving and investing concepts to help better prepare them for the future. Meet the Team",
  vision: "To create a future where every young person has the knowledge and confidence to make smart financial decisions.",
  email: "contact@supersatang.com",
  phone: "+66 (0) 2-963-5800",
  address: "Room 307, International school Bangkok",
  established: "2025",
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "https://www.instagram.com/isb.nextgenfinance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  }
};

export const councilMembers = [
  {
    id: 1,
    name: "Tanawat Cheevarunthai",
    role: "Founder/president",
    credentials: "",
    image: "https://images.unsplash.com/6359142-bphoto-1573498d87734a5a2?w=600&h=800&fit=crop&crop=face",
    bio: "Professor of Finance with 15 years of Wall Street experience."
  },
  {
    id: 2,
    name: "Atip Sookruksawong",
    role: "Club vice president",
    credentials: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    bio: "Incoming analyst at Goldman Sachs, stock market competitor."
  },
  {
    id: 3,
    name: "Napakapol Pitakteeratham",
    role: "Head of Media and Marketing",
    credentials: "Founder of Versain",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
    bio: "Research analyst, Bloomberg terminal certified."
  },
  {
    id: 4,
    name: "Sorathon Chungsawanant",
    role: "Treasury Director",
    credentials: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    bio: "Manages club portfolio, CPA prep track."
  },
  {
    id: 5,
    name: "Bino Kim",
    role: "Scretary",
    credentials: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    bio: "Manages club portfolio, CPA prep track."
  }
];

export const events = [
  {
    id: 1,
    title: "Wharton Investment Competition",
    date: "September 29, 2025",
    location: "Online",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop",
    category: "Competition",
    attendees: "1000+",
    exclusive: false
  },
  {
    id: 2,
    title: "IFF Fair Booth",
    date: "February 07, 2026",
    location: "International School Bangkok",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Booth",
    attendees: "50+",
    exclusive: false
  },
  {
    id: 3,
    title: "Topp Jirayut Financial Guest speaker",
    date: "November 07, 2025",
    location: "International School Bangkok",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    category: "Guest Speaker",
    attendees: "50+",
    exclusive: false
  },
  {
    id: 4,
    title: "Build Real world Financial skill Guest speaker",
    date: "February 17, 2026",
    location: "Room 3-321, International School Bangkok",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&h=600&fit=crop",
    category: "Guest speaker",
    attendees: "10+",
    exclusive: false
  }
];

export const marketIndices = [
  { symbol: "S&P 500", value: "4,958.61", change: "+1.24%", positive: true },
  { symbol: "NASDAQ", value: "15,628.90", change: "+1.87%", positive: true },
  { symbol: "DOW JONES", value: "38,519.84", change: "+0.42%", positive: true },
  { symbol: "FTSE 100", value: "7,682.33", change: "-0.18%", positive: false },
  { symbol: "GOLD", value: "2,042.30", change: "+0.56%", positive: true },
  { symbol: "BTC/USD", value: "67,234.50", change: "+3.21%", positive: true },
  { symbol: "VIX", value: "13.45", change: "-2.34%", positive: true },
];

export const performanceData = [
  { month: 'Jan', aureaus: 2.4, sp500: 1.2 },
  { month: 'Feb', aureaus: 3.1, sp500: 1.8 },
  { month: 'Mar', aureaus: 1.9, sp500: 0.9 },
  { month: 'Apr', aureaus: 4.2, sp500: 2.1 },
  { month: 'May', aureaus: 3.8, sp500: 1.5 },
  { month: 'Jun', aureaus: 5.1, sp500: 2.4 },
  { month: 'Jul', aureaus: 4.7, sp500: 2.2 },
  { month: 'Aug', aureaus: 3.2, sp500: 1.1 },
  { month: 'Sep', aureaus: 2.8, sp500: 0.8 },
  { month: 'Oct', aureaus: 3.9, sp500: 1.9 },
  { month: 'Nov', aureaus: 4.5, sp500: 2.3 },
  { month: 'Dec', aureaus: 5.8, sp500: 2.9 },
];

export const statsData = [
  { value: "5000", label: "Club Portfolio" },
  { value: "20+", label: "Active Members" },
  { value: "2+", label: "Years Active" },
  { value: "3+", label: "Competition Wins" }
];

export const privileges = [
  {
    id: 1,
    title: "Stock Pitch Competitions",
    description: "Compete in internal and national stock pitch competitions with real money prizes.",
    icon: "TrendingUp"
  },
  {
    id: 2,
    title: "Investment Workshops",
    description: "Learn financial modeling, valuation, and analysis from industry professionals.",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Financial office tours",
    description: "An opportunity for students to visit a financial office, explore how the industry works, and learn about different careers in finance.",
    icon: "Monitor"
  },
  
];
