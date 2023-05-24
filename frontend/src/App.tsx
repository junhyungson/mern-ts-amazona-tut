import { sampleProducts } from './data'
import './App.css'

function App() {

  return (
    <div>
      <header>TS amazona</header>
      <main>
        <ul>
          {
            sampleProducts.map((p) => (
              <li key={p.name}>
                <img className="product-image" src={p.image} alt={p.name} />
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <p>${p.price}</p>
              </li>
            ))
          }
        </ul>
      </main>
      <footer>All rights dongo </footer>
    </div>
  )
}

export default App
