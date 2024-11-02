import Header from "./Header/Header"
import List from "./List/List"
import Message from "./Message/Message"

 

 
const App = () => {
const isOnline = false
const age = 16
const filmsData =  [
{id: '1', 
  title: 'terminator'
},

{ id: '2', 
  title: 'conan'
},

{ id: '3', 
  title: 'predator'
}
]

const productsData =  [
  {id: '1', 
    title: 'Morkva'
  },
  
  { id: '2', 
    title: 'kapusta'
  },
  
  { id: '3', 
    title: 'pomidor'
  },
  
  { id: '4', 
    title: 'ogurec'
  }
  ]


  return (
<div>
 <Header />
<List title = 'Myfilms' data = {filmsData}/>

<List title = 'My pokupki 'data = {productsData}/>

{isOnline && <h1>welcome back</h1>}
{age > 18 ? <h2>тобі вже можна в Макдональдс</h2> : <h2>Підрости ще</h2>}

  <Message text='' author='Олена' />
  <Message text='Куплю золото' author='Валера' />
  <Message text='Куплю лопати' author='Михаїл' />


 
</div>
  )
}

export default App

