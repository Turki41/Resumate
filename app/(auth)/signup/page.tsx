'use client'

import { useSignupMutation } from "@/services/auth"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const page = () => {
  const [signup, { isLoading }] = useSignupMutation()
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const userData = {
        userName,
        email,
        password
      }

      const response = await signup(userData).unwrap()
      toast.success('signed up')
      router.push('/upload')
      
    } catch (error: any) {

      console.log('Error', error)
      return toast.error(error?.data?.message)
    }
  }

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover rounded-none min-h-screen flex items-center justify-center">
      <div className='gradient-border shadow-lg'>
        <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>

          <div className='flex flex-col text-center gap-2 items-center'>
            <h1>Welcome!</h1>
            <h2>Enter your details to start your journey</h2>
          </div>

          <form onSubmit={handleSignup} className="">
            <div className="form-div">

              <label htmlFor="username">Full Name</label>
              <input placeholder="First Last" id="username" type="text" value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />

              <label htmlFor="email">Email address</label>
              <input placeholder="example@email.com" id="email" type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

              <label htmlFor="password">Password</label>
              <input placeholder="*********" id="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
              <button disabled={isLoading} className="btn-primary font-semibold mt-5 flex items-center justify-center">{isLoading ? <Loader2 className="animate-spin" /> : 'Signup'}</button>
            </div>
          </form>

          <div className="flex gap-1 items-center w-full justify-center">
            <p className="text-gray-500">Already have an account?</p>
            <Link href={'/login'} className="text-blue-500 underline hover:text-blue-400 transition-colors">Login</Link>
          </div>

        </section>
      </div>
    </main>
  )
}

export default page