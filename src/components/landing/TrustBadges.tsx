import { Clock, CheckCircle, Star } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: Clock,
      label: '24/7 Service',
    },
    {
      id: 2,
      icon: CheckCircle,
      label: 'Trusted by travelers',
    },
    {
      id: 3,
      icon: Star,
      label: '4.9 Stars',
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.id}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-white sm:text-sm">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
