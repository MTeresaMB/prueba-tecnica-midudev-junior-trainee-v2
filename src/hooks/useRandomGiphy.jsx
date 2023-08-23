import { useState } from 'react'
import { GIPHY_PREFIX_SEARCH, API_KEY } from '../common/common.const'

export const useRandomGiphy = (firstThreeWords) => {
  const [giphy, setGiphy] = useState('')
  const fetchRandomGiphy = () => {
    fetch(`${GIPHY_PREFIX_SEARCH}${firstThreeWords}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        const giphy = response.data[0].images.original.url
        setGiphy(giphy)
      })
  }
  return { giphy, fetchRandomGiphy }
}
