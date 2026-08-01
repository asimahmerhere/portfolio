export const ReactLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="7" fill="none">
      <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(0 64 64)" />
      <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)" />
      <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)" />
    </g>
  </svg>
)

export const NextjsLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="58" fill="black" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
    <path d="M42 38V90M86 38V90L46 38" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const NodejsLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 8L112 36V92L64 120L16 92V36L64 8Z" fill="#339933" />
    <path d="M64 22L98 42V86L64 106L30 86V42L64 22Z" fill="#182318" />
    <path d="M64 45V83M48 54L64 45L80 54M48 74L64 83L80 74" stroke="#5FA04E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ExpressLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="28" fill="#1C1C1E" />
    <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="42" letterSpacing="-1">
      ex
    </text>
    <circle cx="102" cy="34" r="6" fill="#6df4ff" />
  </svg>
)

export const MongoLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 6C64 6 28 42 28 78C28 97.9 44.1 114 64 114C83.9 114 100 97.9 100 78C100 42 64 6 64 6Z" fill="#13AA52" />
    <path d="M64 6V114C64.9 114 65.8 113.9 66.7 113.8C85.4 111.4 100 95.8 100 77.2C100 42.6 65.3 7 64.3 6C64.2 6 64.1 6 64 6Z" fill="#116149" />
    <path d="M64 26V108" stroke="#E6FFFA" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
  </svg>
)

export const TypescriptLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#3178C6" />
    <path d="M36 46H74M55 46V100" stroke="white" strokeWidth="11" strokeLinecap="round" />
    <path d="M78 90C82 96 89 100 98 100C109 100 116 93 116 84C116 74 108 71 96 67L90 65C83 63 79 60 79 55C79 50 84 46 92 46C99 46 104 49 107 55" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const TailwindLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 44C37 32 47 26 62 26C80 26 84 39 94 40C101 41 106 37 110 30C105 42 95 48 80 48C62 48 58 35 48 34C41 33 36 37 32 44Z" fill="#38BDF8" />
    <path d="M18 78C23 66 33 60 48 60C66 60 70 73 80 74C87 75 92 71 96 64C91 76 81 82 66 82C48 82 44 69 34 68C27 67 22 71 18 78Z" fill="#38BDF8" />
  </svg>
)

export const PostgresLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#336791" />
    <path d="M64 24C44 24 32 38 32 58C32 82 46 104 64 104C82 104 96 82 96 58C96 38 84 24 64 24Z" fill="#336791" stroke="white" strokeWidth="6" />
    <circle cx="50" cy="50" r="6" fill="white" />
    <circle cx="78" cy="50" r="6" fill="white" />
    <path d="M48 76C54 82 74 82 80 76" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export const DockerLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#1D63ED" />
    <rect x="28" y="58" width="16" height="14" rx="2" fill="white" />
    <rect x="48" y="58" width="16" height="14" rx="2" fill="white" />
    <rect x="68" y="58" width="16" height="14" rx="2" fill="white" />
    <rect x="48" y="40" width="16" height="14" rx="2" fill="white" />
    <rect x="68" y="40" width="16" height="14" rx="2" fill="white" />
    <rect x="68" y="22" width="16" height="14" rx="2" fill="white" />
    <path d="M16 80C28 78 36 82 48 82C68 82 76 74 98 74C108 74 114 80 116 88C110 102 92 106 64 106C36 106 18 96 16 80Z" fill="white" opacity="0.9" />
  </svg>
)

export const GitLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#F05032" />
    <path d="M96 56L68 28C64 24 58 24 54 28L28 54C24 58 24 64 28 68L56 96C60 100 66 100 70 96L96 70C100 66 100 60 96 56Z" fill="none" stroke="white" strokeWidth="8" />
    <circle cx="50" cy="50" r="7" fill="white" />
    <circle cx="78" cy="50" r="7" fill="white" />
    <circle cx="78" cy="78" r="7" fill="white" />
    <path d="M50 50V78H78" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export const RestApiLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#0D9488" />
    <circle cx="38" cy="64" r="14" stroke="white" strokeWidth="6" />
    <circle cx="90" cy="40" r="14" stroke="white" strokeWidth="6" />
    <circle cx="90" cy="88" r="14" stroke="white" strokeWidth="6" />
    <path d="M50 60L78 44M50 68L78 84" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export const UiUxLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="url(#ui-grad)" />
    <path d="M38 38H64V90H38V38Z" stroke="white" strokeWidth="6" strokeLinejoin="round" />
    <circle cx="90" cy="64" r="22" stroke="white" strokeWidth="6" />
    <defs>
      <linearGradient id="ui-grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F43F5E" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
)

export const PerfLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#EAB308" />
    <path d="M72 20L32 72H64L56 108L96 56H64L72 20Z" fill="white" stroke="white" strokeWidth="3" strokeLinejoin="round" />
  </svg>
)

export const GraphqlLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#E535AB" />
    <path d="M64 26L98 46V84L64 104L30 84V46L64 26Z" stroke="white" strokeWidth="6" fill="none" />
    <circle cx="64" cy="26" r="6" fill="white" />
    <circle cx="98" cy="46" r="6" fill="white" />
    <circle cx="98" cy="84" r="6" fill="white" />
    <circle cx="64" cy="104" r="6" fill="white" />
    <circle cx="30" cy="84" r="6" fill="white" />
    <circle cx="30" cy="46" r="6" fill="white" />
  </svg>
)

export const ReduxLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#764ABC" />
    <path d="M40 34C51 26 64 26 79 28C92 29 99 37 99 48C99 58 91 65 79 69C72 71 62 73 55 76C46 80 41 86 41 94C41 102 48 108 58 108C72 108 82 102 89 92" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M67 34L85 60L67 87" stroke="#A78BFA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M52 44H60" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export const RedisLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#DC382D" />
    <path d="M32 36C40 29 51 26 64 26C80 26 92 31 96 41C92 47 80 51 64 51C48 51 36 47 32 36Z" fill="#FFB39A" opacity="0.9" />
    <path d="M32 55C40 48 51 45 64 45C80 45 92 50 96 60C92 66 80 70 64 70C48 70 36 66 32 55Z" fill="#FFD4CA" opacity="0.9" />
    <path d="M32 74C40 67 51 64 64 64C80 64 92 69 96 79C92 85 80 89 64 89C48 89 36 85 32 74Z" fill="#FFE8E2" opacity="0.9" />
    <path d="M48 42C52 42 56 45 56 49C56 53 52 56 48 56C44 56 40 53 40 49C40 45 44 42 48 42Z" fill="#DC382D" />
    <path d="M72 61C76 61 80 64 80 68C80 72 76 75 72 75C68 75 64 72 64 68C64 64 68 61 72 61Z" fill="#DC382D" />
    <path d="M48 79C52 79 56 82 56 86C56 90 52 93 48 93C44 93 40 90 40 86C40 82 44 79 48 79Z" fill="#DC382D" />
  </svg>
)

export const BullMqLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#111827" />
    <path d="M34 32H94V96H34V32Z" stroke="#F97316" strokeWidth="8" strokeLinejoin="round" />
    <path d="M52 46H76V62H52V46ZM52 68H76V84H52V68Z" fill="#F97316" />
    <path d="M86 44L96 56L86 68" stroke="#FDBA74" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const PrismaLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#0F172A" />
    <path d="M64 24L96 84L56 102L32 56L64 24Z" fill="#2D3748" stroke="#6EE7F9" strokeWidth="4" strokeLinejoin="round" />
    <path d="M64 24L56 102L96 84L64 24Z" fill="#38BDF8" opacity="0.8" />
    <path d="M48 56L64 24L80 56" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
