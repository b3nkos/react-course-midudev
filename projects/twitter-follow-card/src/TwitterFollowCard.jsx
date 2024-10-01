import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({ formatUsername, userName, name }) {

  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt={`${name} Avatar`} className='tw-followCard-avatar'
          title={`${name} Avatar`}
        />

        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside> 
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
  formatUsername: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}