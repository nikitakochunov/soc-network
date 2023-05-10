import React from 'react'
import Title from './common/Title'
import TextMuted from './common/TextMuted'
import Wrapper from './common/Wrapper'
import Button from './common/Button'
import Avatar from './common/Avatar'

const ProfileInfo = () => {
  return (
    <Wrapper>
      <div className='profile'>
        <div className='profile__item'>
          <div className='profile-photo'>
            <Avatar />
          </div>
        </div>
        <div className='profile__item'>
          <div className='profile-info'>
            <div className='profile-info__item'>
              <div>
                <Title>Никита Кочунов</Title>
              </div>
              <div className='profile-info-text'>
                <TextMuted>22 года</TextMuted>
              </div>
            </div>
            <div className='profile-info__item'>
              <ul className='info-list'>
                <ul className='info-list__item'>Санкт-Петербург</ul>
                <ul className='info-list__item'>СПбГМТУ (бывш. ЛКИ)</ul>
              </ul>
            </div>
          </div>
        </div>
        <div className='profile__item'>
          <Button>Добавить в друзья</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileInfo
