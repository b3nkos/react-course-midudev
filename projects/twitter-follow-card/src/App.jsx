import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export default function App() {

  const formatHandler = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard
        formatUsername={formatHandler}
        userName="b3nkos"
        name="Cristian Martinez" 
      />
      
      <TwitterFollowCard
        formatUsername={formatHandler}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      
      <TwitterFollowCard
        formatUsername={formatHandler}
        userName="pheralb"
        name="Pablo Hernandez"
      />
      
      <TwitterFollowCard
        formatUsername={formatHandler}
        userName="teovelilla"
        name="Juan Mateo Velilla"
      />
      
      <TwitterFollowCard
        formatUsername={formatHandler}
        userName="nicobytes"
        name="Nicolas Mora"
      />
    </section>
  )
}