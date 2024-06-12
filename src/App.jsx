// import { useState, useEffect } from 'react';
// import HomePage from './components/pages/HomePage';
// import macbookImage from './assets/macbook.jpg';
// import iphone7Image from './assets/iphone7.jpg';
// import iphonexrImage from './assets/iphonexr.jpg';
// import ps4Image from './assets/ps4.jpg';
// import iphonexImage from './assets/iphonex.jpg';
// import iphone8Image from './assets/iphone8.jpg';
// import iphone13proMaxImage from './assets/iphone13promax.jpg';
// import appleWatchImage from './assets/applewatch.jpg';

// const products = [
//   {
//     image: macbookImage,
//     title: 'MacBook Pro A1278 13" i5 4GB RAM',
//     price: '$239.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: iphone7Image,
//     title: 'iPhone 7',
//     price: '$139.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: iphonexrImage,
//     title: 'iPhone XR',
//     price: '$229.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: ps4Image,
//     title: 'Playstation 4 - 500GB con control',
//     price: '$169.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: iphonexImage,
//     title: 'iPhone X',
//     price: '$229.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: iphone8Image,
//     title: 'iPhone 8',
//     price: '$159.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: iphone13proMaxImage,
//     title: 'iPhone 13 Pro Max',
//     price: '$799.990',
//     tag: 'CYBER WEEK'
//   },
//   {
//     image: appleWatchImage,
//     title: 'Apple Watch Serie 6',
//     price: '$249.990',
//     tag: 'CYBER WEEK'
//   },
// ];

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//     const userPreference = localStorage.getItem('theme');

//     if (userPreference) {
//       setDarkMode(userPreference === 'dark');
//     } else {
//       setDarkMode(prefersDarkScheme.matches);
//     }

//     const handleChange = (e) => {
//       if (!userPreference) {
//         setDarkMode(e.matches);
//       }
//     };

//     prefersDarkScheme.addListener(handleChange);

//     return () => {
//       prefersDarkScheme.removeListener(handleChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <HomePage darkMode={darkMode} toggleTheme={toggleTheme} products={products} />
//   );
// }

// export default App;


import  { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import WhatsAppButton from './components/atoms/WhatsAppButton'; // Importar el botón de WhatsApp
import macbookImage from './assets/macbook.jpg';
import iphone7Image from './assets/iphone7.jpg';
import iphonexrImage from './assets/iphonexr.jpg';
import ps4Image from './assets/ps4.jpg';
import iphonexImage from './assets/iphonex.jpg';
import iphone8Image from './assets/iphone8.jpg';
import iphone13proMaxImage from './assets/iphone13promax.jpg';
import appleWatchImage from './assets/applewatch.jpg';

const products = [
  {
    image: macbookImage,
    title: 'MacBook Pro A1278 13" i5 4GB RAM',
    price: '$239.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone7Image,
    title: 'iPhone 7',
    price: '$139.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphonexrImage,
    title: 'iPhone XR',
    price: '$229.990',
    tag: 'CYBER WEEK'
  },
  {
    image: ps4Image,
    title: 'Playstation 4 - 500GB con control',
    price: '$169.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphonexImage,
    title: 'iPhone X',
    price: '$229.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone8Image,
    title: 'iPhone 8',
    price: '$159.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone13proMaxImage,
    title: 'iPhone 13 Pro Max',
    price: '$799.990',
    tag: 'CYBER WEEK'
  },
  {
    image: appleWatchImage,
    title: 'Apple Watch Serie 6',
    price: '$249.990',
    tag: 'CYBER WEEK'
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const userPreference = localStorage.getItem('theme');

    if (userPreference) {
      setDarkMode(userPreference === 'dark');
    } else {
      setDarkMode(prefersDarkScheme.matches);
    }

    const handleChange = (e) => {
      if (!userPreference) {
        setDarkMode(e.matches);
      }
    };

    prefersDarkScheme.addListener(handleChange);

    return () => {
      prefersDarkScheme.removeListener(handleChange);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <HomePage darkMode={darkMode} toggleTheme={toggleTheme} products={products} />
      <WhatsAppButton /> {/* Añadir el botón de WhatsApp */}
    </>
  );
}

export default App;
