import { createClient } from "@/lib/supabaseServer"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { userName, email, password } = await req.json()

        if (!email || !password || !userName) {
            console.log('Missing fields in signup')
            return NextResponse.json({ message: 'Please fill all fields' }, { status: 400 })
        }

        const supabase = await createClient()

        const { data: authData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        })

        if (signUpError) {
            console.log('Error in Signining up auth', signUpError)
            return NextResponse.json({ message: signUpError.message }, { status: 400 })
        }

        const inserUser = {
            id: authData.user!.id,
            email,
            userName: userName,
        }
        const { data: newUser, error: insertError } = await supabase.from('Users').insert(inserUser).select()


        if (insertError) {
            console.log('Error in inserting signed up user to db', insertError)
            return NextResponse.json({ message: 'Error signing up' }, { status: 400 })
        }


        return NextResponse.json(
            {
                message: 'User created successfully',
                newUserDB: newUser
            },
            { status: 201 }
        )
    } catch (error: any) {
        console.error("Error in signup api", error.message)
        return NextResponse.json(
            { message: 'Internal server error' }, { status: 500 }
        )
    }
}