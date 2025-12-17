import { createClient } from "@/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as File

        if (!file) {
            console.log('No file found in upload file controller')
            return NextResponse.json({message: 'No file found'}, {status: 400})
        }

        const buffer = Buffer.from(await file.arrayBuffer())

        const supabase = await createClient()
        /* // should only run once
        const { data: bucketData, error:bucketError } = await supabase.storage.createBucket('Files')
        
        if(bucketError) {
            console.log('error uploading file in upload controller', bucketError)
            return NextResponse.json({message: 'Error uploading file'}, {status: 400})
        }
         */
        const filePath = `resumes/${crypto.randomUUID()}.pdf`

        const {data: uploadData, error: uploadError} = await supabase.storage.from('FIles').upload(filePath, buffer, {contentType: file.type})

        if(uploadError) {
            console.log('Error uploading file to storage in upload controller', uploadError)
            return NextResponse.json({message: 'Unable to upload file'}, {status: 400})
        }

        return NextResponse.json({
            path: uploadData.path,
            fullPath: uploadData.fullPath
        }, {status: 201})

    } catch (error) {
        console.log('Error in upload controller', error)
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}