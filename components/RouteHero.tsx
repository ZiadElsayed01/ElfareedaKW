// العنصر المميز للصفحة: خط رحلة متقطع يربط "البيت القديم" بـ"البيت الجديد"
// وشاحنة متحركة تجسد فكرة "النقل" بصريًا — هوية الشركة في شكل واحد
export default function RouteHero() {
  return (
    <div className="route-hero relative w-full overflow-hidden">
      <svg viewBox="0 0 800 160" className="w-full" aria-hidden="true">
        <path
          d="M40 120 C 200 120, 250 40, 400 40 S 600 120, 760 120"
          fill="none"
          stroke="var(--color-navy)"
          strokeOpacity="0.25"
          strokeWidth="3"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />

        {/* بيت قديم */}
        <g transform="translate(14,96)" fill="var(--color-navy)">
          <path d="M0 24 L26 4 L52 24 V52 H0 Z" opacity="0.85" />
          <rect x="20" y="32" width="12" height="20" fill="var(--color-sand)" />
        </g>

        {/* بيت جديد */}
        <g transform="translate(724,90)" fill="var(--color-rust)">
          <path d="M0 26 L28 2 L56 26 V58 H0 Z" />
          <rect x="22" y="34" width="14" height="24" fill="var(--color-sand)" />
        </g>

        {/* الشاحنة المتحركة */}
        <g className="route-truck">
          <g transform="translate(-24,-12)" fill="var(--color-rust)">
            <rect x="0" y="6" width="30" height="18" rx="2" />
            <path d="M30 10h10l8 8v6H30v-14Z" />
            <circle cx="9" cy="26" r="4.2" fill="var(--color-navy)" />
            <circle cx="34" cy="26" r="4.2" fill="var(--color-navy)" />
          </g>
        </g>
      </svg>

      <style>{`
        .route-truck {
          offset-path: path("M40 120 C 200 120, 250 40, 400 40 S 600 120, 760 120");
          animation: drive 7s ease-in-out infinite;
        }
        @keyframes drive {
          0%   { offset-distance: 0%; }
          50%  { offset-distance: 100%; }
          100% { offset-distance: 0%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .route-truck { animation: none; offset-distance: 50%; }
        }
      `}</style>
    </div>
  );
}
