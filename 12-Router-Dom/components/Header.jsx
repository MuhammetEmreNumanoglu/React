import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
function Header() {
  return (
    <div>
        <div className='Header'>
            <Link to='/'> Anasayfa</Link>
            <Link to='about'> Hakkında</Link>
            <Link to='products'> Ürünler</Link>
            <Link to='contact'> İletişim</Link>
            <Link to='*'> Not Found</Link>
        </div>
    </div>
  )
}

export default Header