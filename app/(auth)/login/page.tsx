'use client'

import { useLoginMutation } from "@/services/auth"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "nextjs-toploader/app"
import { useState } from "react"
import toast from "react-hot-toast"

const page = () => {
    const [login, { isLoading }] = useLoginMutation()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const loginData = {
                email,
                password
            }

            const response = await login(loginData).unwrap()
            router.push('/upload')
        } catch (error: any) {
            return toast.error(error?.data?.message)
        }
    }
    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover rounded-none min-h-screen flex items-center justify-center">
            <div className='gradient-border shadow-lg max-w-[600px]'>
                <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>

                    <div className='flex flex-col text-center gap-2 items-center'>
                        <h1>Welcome Back!</h1>
                        <h2>Enter your details to continue your journey</h2>
                    </div>

                    <form onSubmit={handleLogin} className="">
                        <div className="form-div">

                            <label htmlFor="email">Email address</label>
                            <input placeholder="example@email.com" id="email" type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

                            <label htmlFor="password">Password</label>
                            <input placeholder="*********" id="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                                
                            <button disabled={isLoading} className="btn-primary font-semibold mt-5 flex items-center justify-center">{isLoading ? <Loader2 className="animate-spin" /> : 'Login'}</button>
                        </div>
                    </form>

                    <div className="flex gap-1 items-center w-full justify-center">
                        <p className="text-gray-500">Don't have an account?</p>
                        <Link href={'/signup'} className="text-blue-500 underline hover:text-blue-400 transition-colors">Signup</Link>
                    </div>

                </section>
            </div>
        </main>
    )
}

export default page