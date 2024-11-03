// const App = () => {
// return (

import { useState } from "react";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

//   <div></div>
// )

// }

// export default App




const App = () => {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <LangSwitcher value={lang} onSelect={setLang} />

      <FeedbackForm />

    </div>    
)  
};

export default App















// import Header from "./Header/Header"
// import List from "./List/List"
// import Message from "./Message/Message"

 

 
// const App = () => {
// const isOnline = false
// const age = 16
// const filmsData =  [
// {id: '1', 
//   title: 'terminator'
// },

// { id: '2', 
//   title: 'conan'
// },

// { id: '3', 
//   title: 'predator'
// }
// ]

// const productsData =  [
//   {id: '1', 
//     title: 'Morkva'
//   },
  
//   { id: '2', 
//     title: 'kapusta'
//   },
  
//   { id: '3', 
//     title: 'pomidor'
//   },
  
//   { id: '4', 
//     title: 'ogurec'
//   }
//   ]


//   return (
// <div>
//  <Header />
// <List title = 'Myfilms' data = {filmsData}/>

// <List title = 'My pokupki 'data = {productsData}/>

// {isOnline && <h1>welcome back</h1>}
// {age > 18 ? <h2>тобі вже можна в Макдональдс</h2> : <h2>Підрости ще</h2>}

//   <Message text='' author='Олена' />
//   <Message text='Куплю золото' author='Валера' />
//   <Message text='Куплю лопати' author='Михаїл' />


 
// </div>
//   )
// }

// export default App

