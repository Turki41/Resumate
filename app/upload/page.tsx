'use client'

import FileUploader from "@/components/FileUploader"
import Navbar from "@/components/Navbar"
import { useFeedbackMutation } from "@/services/ai"
import { useUploadMutation } from "@/services/upload"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const page = () => {
    const [upload] = useUploadMutation()
    const [feedback] = useFeedbackMutation()

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

        if (!file) return

        try {
            const formData = new FormData()
            formData.append('file', file)

            setIsProcessing(true)
            setStatusText('uploading file...')

            const { path } = await upload(formData).unwrap()

            setStatusText('Analyzing...')

            const { responce } = await feedback({ path }).unwrap()

            console.log(responce)
            setStatusText('Analyzing complete, redirecting...')
            toast.success("good")
        } catch (error) {
            setIsProcessing(false)
            setStatusText('')
            toast.error('Something went wrong please try again')
        } finally {
            setIsProcessing(false)
            setStatusText('')
        }

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex flex-col">
            <Navbar />

            <section className="main-section max-w-[1200px] mx-auto mb-auto sm:mt-20">

                <div className="page-heading">
                    <h1 className="pb-1">Smart feedback for your future job</h1>
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