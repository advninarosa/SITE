import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'monogramOnly' | 'card' | 'badge';
  className?: string;
  size?: number;
}

export const MonogramNR: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={(size * 240) / 200}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-md ${className}`}
    >
      <defs>
        {/* Luxury rich gold gradient matching official brand */}
        <linearGradient id="nrGoldGradient" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#fdf0cf" />
          <stop offset="35%" stopColor="#eccd80" />
          <stop offset="70%" stopColor="#cf9f4c" />
          <stop offset="100%" stopColor="#aa7c30" />
        </linearGradient>
      </defs>

      {/* 
        Exact stroke-by-stroke vectorization of Dra. Nina Rosa's official monogram:
        1. Left vertical stem of N
        2. Diagonal of N rising to peak
        3. Top arch of N
        4. Middle vertical stem of N
        5. Flowing flourish and upper bowl of R
        6. Right vertical stem of R
        7. Diagonal leg of R
      */}

      {/* 1. N: Left vertical stem */}
      <path
        d="M 47 36 L 45 148"
        stroke="url(#nrGoldGradient)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />

      {/* 2 & 3 & 4. N: Diagonal rising to peak arch and descending vertically */}
      <path
        d="M 45 140 Q 64 85 86 28 C 88 23 92 23 94 28 L 94 186"
        fill="none"
        stroke="url(#nrGoldGradient)"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5. R: Bottom-left flourish crossing through middle stem into the sweeping upper bowl */}
      <path
        d="M 72 135 C 77 118 85 104 94 100 C 108 92 142 86 150 116 C 158 145 133 169 107 170"
        fill="none"
        stroke="url(#nrGoldGradient)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />

      {/* 6. R: Right vertical stem (starts inside bowl, extends down) */}
      <path
        d="M 107 125 L 107 228"
        stroke="url(#nrGoldGradient)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />

      {/* 7. R: Diagonal leg */}
      <path
        d="M 107 170 L 152 193"
        stroke="url(#nrGoldGradient)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size = 56 }) => {
  if (variant === 'monogramOnly') {
    return <MonogramNR size={size} className={className} />;
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-12 h-12 rounded-full border border-[#c8a261]/40 flex items-center justify-center bg-gradient-to-br from-[#4e0921] via-[#2d0513] to-[#120207] shadow-lg shrink-0">
          <MonogramNR size={32} />
        </div>
        <div className="text-left">
          <span className="font-display text-lg tracking-[0.2em] font-bold text-[#fcfaf7] block leading-none">
            NINA ROSA
          </span>
          <span className="text-[9px] tracking-[0.28em] text-[#dfbe75] uppercase block font-semibold mt-1">
            ADVOCACIA CRIMINAL
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`flex items-center gap-4 p-3 rounded-2xl bg-[#44091d]/80 border border-[#c8a261]/35 backdrop-blur-md ${className}`}>
        <MonogramNR size={44} />
        <div className="text-left">
          <span className="font-display text-base font-bold tracking-[0.18em] text-[#fdfbf7] uppercase block">
            NINA ROSA
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#dfbe75] uppercase font-semibold block">
            ADVOCACIA E CONSULTORIA JURÍDICA
          </span>
          <span className="text-[9px] font-mono text-[#e5caa2] block mt-0.5">
            OAB/MG nº 243.206
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    // Exact digital representation of Page 1 of the official brand identity
    return (
      <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-[#540b25] via-[#3a0618] to-[#1d030c] border border-[#c8a261]/40 shadow-2xl text-center relative overflow-hidden">
        {/* Subtle radial inner glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#c8a261]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <MonogramNR size={96} />
          
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#fbf7f0] uppercase mt-5">
            NINA ROSA
          </h2>
          
          <p className="text-[11px] sm:text-xs tracking-[0.32em] text-[#dfbe75] uppercase font-medium mt-1">
            ADVOCACIA E CONSULTORIA JURÍDICA
          </p>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#dfbe75]/60 to-transparent my-4" />

          <p className="text-[11px] font-mono text-[#ecd8b0] tracking-wider">
            OAB/MG nº 243.206 · Plantão 24h
          </p>
        </div>
      </div>
    );
  }

  // Full default variant: Centered official brand
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <MonogramNR size={size} />
      <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#fbf7f0] uppercase mt-3">
        NINA ROSA
      </span>
      <span className="text-[10px] sm:text-[11px] tracking-[0.32em] text-[#dfbe75] uppercase font-medium mt-1">
        ADVOCACIA E CONSULTORIA JURÍDICA
      </span>
    </div>
  );
};
