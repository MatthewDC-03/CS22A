import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
        display: ["group-hover"],
        'backface-hidden': 'hidden',
    },
    
},
  theme: {
    extend: {
      perspective: {
      1000: '1000px',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      showContent: 'showContent 1s linear forwards',
      showImage: 'showImage 0.5s linear 1 forwards',
      showThumbnail: 'showThumbnail .5s linear 1 forwards',
      transformThumbnail: 'transformThumbnail .5s linear 1 forwards',
      outImage: 'outImage .5s linear 1 forwards',
      animateContentOut: 'animateContentOut 1.5s linear 1 forwards',
      timeRunning: 'timeRunning 3s linear 1 forwards',
      numTranslate: 'numTranslate .5s linear 1 forwards',
      numBlackTranslate: 'numBlackTranslate .5s linear 1 forwards',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite'
    },
    keyframes: {
      bounce: {
        '0%': {
            transform: "translateY(-25%)",

        },
        "50%": {
          transform: "translateY(0)"
        },
        '100%': {
          transform: "translateY(-25%)",

      }
      },
      pulse: {
        '0%, 100%': {
          opacity: "1"
        },
        '50%': {
          opacity: '.5'
        }
      },
      numTranslate:{
        'to': {
          left: '0',
          bottom: '0',
          opacity: '1',
          fontSize: '22px',
          color: '#F6F6F6',
        }
      },
      numBlackTranslate:{
        'to': {
          left: '5px',
          bottom: '0',
          opacity: '1',
          fontSize: '17px',
          color: 'rgba(255,255,255,.2)'
        }
      },
      animateContentOut: {
        'to': {
          transform: 'translateY(-150px)',
          filter: 'blur(20px)',
          opacity: '0',
        }
      },
      showContent: {
        'to': { 
          filter: 'blur(0)',
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      showImage: {
        'to': {
          width: '100%',
          height: '100%',
          left: '0',
          bottom: '0',
          borderRadius: '0',
        }
      },
      showThumbnail: {
        'to': {
          width: '208px',
        }
      },
      transformThumbnail: {
        'to': {
          transform: 'translateX(0)',
        }
      },
      outImage: {
        'to': {
          width: '208px',
          height: '128px',
          left: '727px',
          bottom: "197px"
        }
      },
      timeRunning: {
        'to': {
          width: '0',
        }
      }
    },
  },
  plugins: [],
};
export default config;
