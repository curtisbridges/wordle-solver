import { useState, useEffect, useRef } from 'react'

export const useFetch = (file) => {
  const cache = useRef({});
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!file) return

    const fetchData = async () => {
      setStatus('fetching')
      if (cache.current[file]) {
        const data = cache.current[file]
        setData(data)
        setStatus('fetched')
      } else {
        const response = await fetch(file)
        const text = await response.text()
        const data = text.split('\n')
        cache.current[file] = data
        setData(data)
        setStatus('fetched')
      }
    }

    fetchData()
  }, [file])

  return { status, data }
}
