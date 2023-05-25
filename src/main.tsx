import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/About/index'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/Not Found'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/post/:id' element={<Post />}/>
        <Route path='/redirect' element={<Redirect />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
