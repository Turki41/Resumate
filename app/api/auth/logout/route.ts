import { createClient } from "@/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const supabase = await createClient()

        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log('Error in supabase logout ', error)
            return NextResponse.json({ message: 'Error logging out' }, { status: 400 })
        }

        return NextResponse.json({ message: 'Logged out' }, { status: 200 })
    } catch (error) {
        console.log('Error in logout controller', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}