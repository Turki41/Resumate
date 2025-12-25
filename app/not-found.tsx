import Link from "next/link"

const notFound = () => {
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover overflow-hidden min-w-screen flex flex-col space-y-6 items-center justify-center">
            <div className='flex items-center gap-2.5'>
                <h1>404</h1>
                <h1 className='font-bold text-4xl!'>page not found</h1>
            </div>
            <Link className="back-button w-fit" href={'/'}>
                <img src="/icons/back.svg" alt="back" className="size-4" />
                <h1 className="text-xl! pb-0.5">Back to homepage</h1>
            </Link>
        </main>
    )
}

export default notFound