'use client'

import FileUploader from "@/components/FileUploader"
import Navbar from "@/components/Navbar"
import { useState } from "react"

const page = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const handleFileSelect = (file: File | null) => {
        if (!file) {
            return
        }
        setFile(file)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(file)
    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex flex-col">
            <Navbar />

            <section className="main-section max-w-[1200px] mx-auto mb-auto sm:mt-20">
             
                    <div className="page-heading">
                        <h1>Smart feedback for your future job</h1>
                        {isProcessing ?
                            (
                                <>
                                    <h2>{statusText}</h2>
                                    <img src="/images/resume-scan.gif" alt="scan-img" className="max-w-md mx-auto object-contain" />
                                </>
                            )
                            :
                            (
                                <h2>Drop your resume for an ATS score and improvement tips</h2>
                            )
                        }

                    </div>
                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit}>
                            <FileUploader onFileSelect={handleFileSelect} />
                            <button className="btn-primary">Analyze Resume</button>
                        </form>
                    )}
                
            </section>

        </main>
    )
}

export default page