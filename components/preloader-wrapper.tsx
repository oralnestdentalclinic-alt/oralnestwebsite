"use client"

import { useState, useEffect } from "react"
import { Preloader } from "@/components/preloader"

export function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return <Preloader isLoading={isLoading} />
}
