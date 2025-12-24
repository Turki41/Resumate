'use client'

import { createClient } from "@/lib/supabaseClient"
import { useLogoutMutation } from "@/services/auth"
import { Session } from "@supabase/supabase-js"
import Link from "next/link"
import { useRouter } from "nextjs-toploader/app"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Navbar = () => {
    const [logout, { isLoading }] = useLogoutMutation()
    const router = useRouter()

    const [session, setSession] = useState<Session | null>()
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            router.push('/')
            setSession(null)
            toast.success('Logged out')
        } catch (error: any) {
            toast.error(error?.data?.message)
        }
    }

    useEffect(() => {
        const getSession = async () => {
            const supabase = createClient()
            await supabase.auth.getSession().then((({ data }) => {
                setSession(data.session)
                setLoading(false)
            }))
        }

        getSession()
    }, [])
    return (
        <nav className="navbar">
            <Link href={'/'}>
                <p className="text-2xl font-bold text-gradient">RESUMATE</p>
            </Link>

            {loading ? (
                <div className="w-24 h-10 bg-transparent rounded-full animate-pulse" />
            ) : session ? (
                <button disabled={isLoading} onClick={handleLogout} className="btn-primary w-fit font-semibold">Logout </button>
            ) : (
                <div className="flex items-center gap-2">
                    <Link className="btn-primary font-semibold" href="/signup">Signup</Link>
                    <Link className="rounded-full  hover:bg-slate-100 transition-colors px-4 py-2 font-semibold" href="/login">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar