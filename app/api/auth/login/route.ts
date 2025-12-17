import { createClient } from "@/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            console.log('Missing values in login')
            return NextResponse.json({ message: 'Please fill all fields' }, { status: 400 })
        }

        const supabase = await createClient()

        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email, password })

        if (loginError) {
            console.log('Error in supabase login', loginError)
            return NextResponse.json({ message: 'Invaid email or password' }, { status: 400 })
        }

        const loginUser = await supabase.from('Users').select('*').eq('id', loginData.user.id).single()

        return NextResponse.json({ loginUser }, { status: 200 })
        
    } catch (error) {
        console.log('Error in login route controller', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }

}