import { useState, useEffect } from 'react'
import { CAT_ENDPOINT_RANDOM_FACT } from '../common/common.const'

export const useRandomFacts = () => {
  const [fact, setFact] = useState('')
  const fetchRandomFacts = () => {
    fetch(`${CAT_ENDPOINT_RANDOM_FACT}`)
      .then(res => res.json())
      .then(data => {
        const fact = data.fact
        setFact(fact)
      })
  }
  const firstThreeWords = fact?.split(' ', 3)?.join(' ')
  useEffect(() => { fetchRandomFacts() }, [])
  return { fact, firstThreeWords }
}
