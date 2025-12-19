import { createClient } from "@/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as File

        if (!file) {
            console.log('No file found in upload file controller')
            return NextResponse.json({ message: 'No file found' }, { status: 400 })
        }

        const buffer = Buffer.from(await file.arrayBuffer())

        const supabase = await createClient()

        const fileUUID = crypto.randomUUID()
        const filePath = `resumes/${fileUUID}.pdf`

        const { data: uploadData, error: uploadError } = await supabase.storage.from('FIles').upload(filePath, buffer, { contentType: file.type })

        if (uploadError) {
            console.log('Error uploading file to storage in upload controller', uploadError)
            return NextResponse.json({ message: 'Unable to upload file' }, { status: 400 })
        }

        return NextResponse.json({
            path: uploadData.path,
            fullPath: uploadData.fullPath,
            fileUUID,
        }, { status: 201 })

    } catch (error) {
        console.log('Error in upload controller', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}