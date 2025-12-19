'use client'

import Summary from "@/components/Summary"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
  const [feedback, setFeedback] = useState<Feedback | null>(null)


  useEffect(() => {
    const feedbackObject = localStorage.getItem('feedback')
    if (feedbackObject) {
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

      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section">
          <h2 className="text-4xl! font-bold">Resume Review</h2>
          {feedback ? (
            <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
              <Summary feedback={feedback}/>
            </div>
          ) : (
            <div>
              <img src="/images/resume-scan-2.gif" alt="resume scan" />
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default page