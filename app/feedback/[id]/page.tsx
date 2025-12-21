'use client'

import ATS from "@/components/ATS"
import Details from "@/components/Feedback"
import Summary from "@/components/Summary"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
  const [feedback, setFeedback] = useState<Feedback | null>(null)


  useEffect(() => {
    const feedbackString = localStorage.getItem('feedback')
    if (feedbackString) {
      const feedbackObject = JSON.parse(feedbackString)
      setFeedback(JSON.parse(feedbackObject))
    }

  }, [])

  return (
    <main className="pt-0!">
      <nav className="resume-nav">
        <Link href={'/'} className="back-button min-w-fit">
          <img src="/icons/back.svg" alt="back" className="size-3.5" />
          <span className="text-gray-800 text-sm font-semibold w-full">
            Back to Homepage
          </span>
        </Link>
      </nav>

      <div className="flex min-w-full items-center justify-center">
        <section className="feedback-section">
          <h2 className="text-4xl! font-bold">Resume Review</h2>
          {feedback ? (
            <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
              <Summary feedback={feedback}/>
              <ATS score={feedback?.ATS?.score || 0} suggestions={feedback?.ATS?.tips || [{type: 'good', tip: 'fff'}]}/>
              <Details feedback={feedback}/>
            </div>
          ) : (
            <div>
              <img src="/images/resume-scan-2.gif" alt="resume-scan"/>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default page