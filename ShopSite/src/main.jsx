import React from 'react'
import ReactDOM from 'react-dom/client'
import { ItemShop } from './ItemShop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <ItemShop title="Título" description="Descripcion" price={ 19.99 }/> }
  </React.StrictMode>
)
