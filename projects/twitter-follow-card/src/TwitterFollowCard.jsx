import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({ formatUsername, userName, name, initialIsFollowing = false }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

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
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
  formatUsername: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool
}