'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const params = useParams()
  const [feedback, setFeedback] = useState<Feedback | null>(null)


  useEffect(() => {
    const feedbackObject = localStorage.getItem('feedback')
    if (feedbackObject) {
      setFeedback(JSON.parse(feedbackObject))
    }
  }, [])
  
  return (
    <div>page {JSON.stringify(feedback)}</div>
  )
}

export default page