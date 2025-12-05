import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href={'/'}>
                <p className="text-2xl font-bold text-gradient">RESUMATE</p>
            </Link>

            <Link href={'/upload'} className="btn-primary w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}

export default Navbar