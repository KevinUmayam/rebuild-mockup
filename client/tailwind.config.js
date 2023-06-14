/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // custom sizes abajo
  theme: {
    extend: {
      colors: {

        'custom-gray': '#484848',
        'custom-green': '#006C45',
        'custom-light-gray': '#C4C4C4',
      },
      spacing: {
        '1180': '1180px',
        '1160': '1160px',
        '1024': '1024px',
        '96': '96vh',
        '90': '90vh',
        '600': '600px',
        '560': '560px',
        '480': '480px',
        '460': '460px',
        '260': '260px',
        '250': '250px',
        '240': '240px',
        '230': '230px',
        '220': '220px',
        '120': '120px',
        '78': '78px',
        '70': '70px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
        '30': '30px',
        '10px': '10px',
        'one': '1px',
      },
      fontSize: {
        '30': '30px', // Custom font 
        '25': '25px',
        '20': '20px',
      },
      gridTemplateColumns: {

        // Complex site-specific column configuration
        'recibir': 'repeat(4, 270px) 80px',
        'entrega': '100px 100px 260px 398px 148px 150px',
        'buscar': '100px 100px 100px 280px 278px 148px 150px',
        'clientes': '250px 60px 240px 308px 158px 140px',
        'prendas': '170px 596px 250px 140px',
      },
    },
  },
  plugins: [],
}

