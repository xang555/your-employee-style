export interface StyleIcon {
  id: number;
  name: string;
  nameTh: string;
  icon: string;
  color: string;
  emoji: string;
}

export const styleIcons: StyleIcon[] = [
  {
    id: 1,
    name: 'The Security Seeker',
    nameTh: 'ผู้แสวงหาความปลอดภัย',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8" />
    </svg>`,
    color: 'bg-blue-100 text-blue-600',
    emoji: '🛡️'
  },
  {
    id: 2,
    name: 'The Social Connector',
    nameTh: 'ผู้เชื่อมโยงสังคม',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16v5" />
      <path d="M12 9V4" />
      <path d="M4 12h5" />
      <path d="M15 12h5" />
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M12 5l-2 2" />
      <path d="M12 19l-2-2" />
      <path d="M12 19l2-2" />
    </svg>`,
    color: 'bg-green-100 text-green-600',
    emoji: '🤝'
  },
  {
    id: 3,
    name: 'The Star Performer',
    nameTh: 'นักแสดงยอดเยี่ยม',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      <circle cx="12" cy="13" r="2" />
    </svg>`,
    color: 'bg-yellow-100 text-yellow-600',
    emoji: '⭐'
  },
  {
    id: 4,
    name: 'The Leader',
    nameTh: 'ผู้นำ',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 3L12 3" />
      <path d="M12 3C9 3 7 5 7 8" />
      <path d="M12 3C15 3 17 5 17 8" />
      <path d="M7 8v6" />
      <path d="M17 8v6" />
      <path d="M12 8v6" />
      <circle cx="12" cy="15" r="3" />
      <path d="M12 18v4" />
      <path d="M8 22h8" />
    </svg>`,
    color: 'bg-purple-100 text-purple-600',
    emoji: '👑'
  },
  {
    id: 5,
    name: 'The Reward Seeker',
    nameTh: 'ผู้แสวงหารางวัล',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 8h.01" />
      <path d="M16 11l-2 2 3 3" />
      <path d="M11 13h.01" />
      <path d="M12 13h.01" />
      <path d="M12 13h.01" />
    </svg>`,
    color: 'bg-emerald-100 text-emerald-600',
    emoji: '💰'
  },
  {
    id: 6,
    name: 'The Specialist',
    nameTh: 'ผู้เชี่ยวชาญ',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="12" cy="12" r="2" />
    </svg>`,
    color: 'bg-orange-100 text-orange-600',
    emoji: '🎯'
  },
  {
    id: 7,
    name: 'The Creative Innovator',
    nameTh: 'นักสร้างสรรค์นวัตกรรม',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a6 6 0 0 0-6 6v5.25a6 6 0 0 0 3.5 5.25" />
      <path d="M12 2a6 6 0 0 1 6 6v5.25a6 6 0 0 1-3.5 5.25" />
      <circle cx="12" cy="8" r="2" />
    </svg>`,
    color: 'bg-pink-100 text-pink-600',
    emoji: '💡'
  },
  {
    id: 8,
    name: 'The Autonomous',
    nameTh: 'ผู้ทำงานอิสระ',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
      <circle cx="12" cy="12" r="7" stroke-dasharray="2 2" />
    </svg>`,
    color: 'bg-cyan-100 text-cyan-600',
    emoji: '🚀'
  },
  {
    id: 9,
    name: 'The Entertainer',
    nameTh: 'ผู้บันเทิง',
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v8" />
      <path d="M12 20H8" />
      <path d="M12 20h4" />
      <path d="M16 6l2-2" />
      <path d="M8 6l-2-2" />
      <circle cx="15" cy="9" r="0.5" fill="currentColor" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <path d="M10 10q1-1 2 0" stroke-linecap="round" />
    </svg>`,
    color: 'bg-rose-100 text-rose-600',
    emoji: '🎭'
  }
];

export function getStyleIcon(id: number): StyleIcon | undefined {
  return styleIcons.find(icon => icon.id === id);
}

export function getStyleIconSVG(id: number): string {
  const icon = getStyleIcon(id);
  return icon?.icon || '';
}

export function getStyleIconColor(id: number): string {
  const icon = getStyleIcon(id);
  return icon?.color || 'bg-gray-100 text-gray-600';
}

export function getStyleIconEmoji(id: number): string {
  const icon = getStyleIcon(id);
  return icon?.emoji || '❓';
}

export function getStyleIconName(id: number, locale: 'en' | 'th' = 'en'): string {
  const icon = getStyleIcon(id);
  return locale === 'th' ? icon?.nameTh || icon?.name || '' : icon?.name || '';
}
