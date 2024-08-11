/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       spacing: {
        'full-10': 'calc(100% + 10px)',
      },
       width: {
        'fill-available': '-webkit-fill-available',
      },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          primary: '#7F56D9',
          secondary: '#344054',
          light:'#ffffff',
          dark: '#101828', 
          gray: '#76787D',
          darkSecondary: '#344054',
          lightSecondary:'#F5F5F5',
          placeholder:'#667085',
          redPrimary: '#D9534F',
          border: '#D0D5DD',
          borderSecondary: '#F2F4F7',
          hover:'#F9FAFB'
      },
    },
  },
  plugins: [],
}

