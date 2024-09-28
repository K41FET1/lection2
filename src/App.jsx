import Card from './components/card/Card'
import './App.css'

function App() {

  return (
    <div>
      <header></header>
      <Card 
      name={'giorgi'} 
      age={12} 
      desc={'some desc21'}
      bg = {'red'}
      />
      <Card 
      name={'luka'} 
      age={21} 
      desc={'some desc15'}
        bg={'blue'}
      />
      <Card 
      name={'mariami'} 
      age={42} 
      desc={'some desc12'}
      bg={'cyan'}
      />
      <Card 
      name={'black man'} 
      age={16} 
      bg={'green'}
      />
    </div>
  )
}

export default App
