import { aiText } from "@/constants"
import { createClient } from "@/lib/supabaseServer"
import { GoogleGenAI } from "@google/genai"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { path } = await req.json()

        if (!path) {
            console.log('No path provided in ai controller')
            return NextResponse.json({ message: 'No file found' }, { status: 400 })
        }

        const supabase = await createClient()

        const { data: file, error: fileFetchError } = await supabase.storage.from('FIles').download(path)

        if (fileFetchError) {
            console.log('Error in fetching file from storage in ai controller', fileFetchError)
            return NextResponse.json({ message: 'No file found' }, { status: 400 })
        }

        if (!file) {
            console.log('No file found in ai controller')
            return NextResponse.json({ message: 'No file found' }, { status: 400 })
        }

        const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

        const contents = [
            { text: aiText },
            {
                inlineData: {
                    mimeType: 'application/pdf',
                    data: Buffer.from(await file.arrayBuffer()).toString('base64')
                }
            }
        ]

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',    
            contents: contents
        })

        return NextResponse.json({ response: response?.text || 'Unable to generate response' }, { status: 200 })

    } catch (error) {
        console.log('Error in ai feedback controller', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}