const Header = () => {
  return ( 
<header>
    <div> Logo </div>
      <nav>
        <ul> 
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
        </ul>
      </nav>
  </header>
)
}

const Section = () => {
  return (
    <section>
    <h2>hello world</h2>
    <button>Click</button>    
    <button>Hello</button>
    <button>Submit</button>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempore odio accusantium ad placeat laudantium quod. Dignissimos, incidunt fuga, harum rem vel possimus perferendis eligendi, nostrum odio itaque quasi quis.     
    </p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est aliquam doloribus aspernatur sapiente, iusto similique temporibus quos magni animi suscipit harum eum culpa obcaecati error accusamus ea. Dolorem, non?</p>
  </section>
  )
}

const Footer = () => {
  return (<footer>
    <span>&copy; All rights reserved</span>
  </footer>)
}

const App = () => {
  return (
<div>
 <Header />
 <Section />
 <Footer />

  
</div>

  )
}



export default App

