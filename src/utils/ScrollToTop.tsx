import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Ao mudar de rota, leva o scroll pro topo
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default ScrollToTop
