import React from 'react'
import Container from './common/Container'
import { Link } from 'react-router-dom'
import chevron from '../../svg/chevron-down-solid.svg'
import Avatar from './common/Avatar'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
  const { currentUser } = useAuth()

  return (
    <div className='header'>
      <Container>
        <div className='header__nav nav'>
          <div className='nav__item'>
            <Link className='nav-link' to='/'>
              Социальная сеть
            </Link>
          </div>

          <div className='nav__item nav-buttons'>
            <div className='nav-buttons__item'>
              {currentUser ? (
                <Link className='nav-link' to='/users'>
                  Все пользователи
                </Link>
              ) : (
                <Link className='nav-link' to='/auth'>
                  Вход
                </Link>
              )}
            </div>
            {currentUser && (
              <div className='nav-buttons__item'>
                <div className='nav-link'>
                  <div className='nav__profile-menu profile-menu'>
                    <div className='profile-menu__photo'>
                      <Avatar src={currentUser.image} />
                    </div>
                    <img className='profile-menu__icon' src={chevron} alt='' />
                  </div>
                </div>
              </div>
            )}
          </div>

          <ul className='profile-menu__list menu-list'>
            <li className='menu-list__item'>
              <Link className='menu-link' to='/logout'>
                Выйти
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header
