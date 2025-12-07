import { createClient } from "@/app/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json()

        const supabase = await createClient()

        const response = await supabase.auth.signInWithPassword({ email, password })

        const {data: loginUser, error: loginError} = response

        if(loginError) {
            console.log('Error in login route contoller')
            return NextResponse.json({message: 'Invaid email or password'}, {status: 400})
        }

        return NextResponse.json({loginUser})
    } catch (error) {

    }



}