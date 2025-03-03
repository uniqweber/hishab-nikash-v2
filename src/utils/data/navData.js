import { Bot, SquareTerminal } from 'lucide-react';

export const dashboardRoutes = [
  {
    title: 'Playground',
    url: '#',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: 'History',
        url: '#',
      },
      {
        title: 'Starred',
        url: '#',
      },
      {
        title: 'Settings',
        url: '#',
      },
    ],
  },
  {
    title: 'Models',
    url: '#',
    icon: Bot,
    items: [
      {
        title: 'Genesis',
        url: '#',
      },
    ],
  },
];
