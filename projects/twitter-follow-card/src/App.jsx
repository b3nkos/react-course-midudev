import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    name: 'Cristian Martinez',
    userName: 'b3nkos',
    isFollowing: false
  },
  {
    name: 'Miguel Ángel Durán',
    userName: 'midudev',
    isFollowing: true
  },
  {
    name: 'Pablo Hernandez',
    userName: 'pheralb',
    isFollowing: false
  },
  {
    name: 'Nicolas Molina',
    userName: 'nicobytes',
    isFollowing: false
  },
  {
    name: 'Juan Mateo Velilla',
    userName: 'teovelilla',
    isFollowing: true
  },
  {
    name: 'Brais Moure',
    userName: 'mouredev',
    isFollowing: true
  },
];

export default function App() {

  const formatHandler = (userName) => `@${userName}`

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              formatUsername={formatHandler}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
  )
}