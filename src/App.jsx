import { useEffect } from 'react'
import './App.css'
import { useRandomFacts } from './hooks/useRandomFacts'
import { useRandomGiphy } from './hooks/useRandomGiphy'
export const App = () => {
  const { fact, firstThreeWords } = useRandomFacts()
  const { giphy, fetchRandomGiphy } = useRandomGiphy(firstThreeWords)
  useEffect(() => {
    fetchRandomGiphy()
  }, [fact])
  return (
    <main>
      {fact && <p>{fact}</p>}
      {giphy && <img src={giphy} />}
    </main>
  )
}
