import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
        <Routes>
        <Route path ='/' element =  {<h2>Homepage</h2>} />
        <Route path ='/about' element =  {<h2>About page</h2>} />
        
              </Routes>
    </div>
  )
}

export default App




// src/components/App.jsx

// src/components/App.jsx

// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Products from '../pages/Products';
// import ProductDetails from '../pages/ProductDetails';
// import NotFound from '../pages/NotFound';
// import { AppBar } from './AppBar';
// import { Mission } from './Mission';
// import { Team } from './Team';
// import { Reviews } from './Reviews';
// import css from './App.module.css';

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <AppBar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };










// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
