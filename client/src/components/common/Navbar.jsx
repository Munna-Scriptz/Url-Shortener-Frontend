import React, { useEffect, useState } from 'react'
import { Scissors, Menu, X } from 'lucide-react'
import Button from '../ui/Buttons'
import { Link } from 'react-router'
import { authServices } from '../../api'
import Loader from '../ui/Loader'
import userImg from '../../assets/userImage.png'

const Navbar = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const res = await authServices.getProfile()
                setUser(res)
                setTimeout(() => {
                    setLoading(false)
                }, 600);
            } catch (error) {
                console.log(error)
                setUser(null)
                setLoading(false)
            }
        })()
    }, [])

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'All Urls', path: '/dashboard' },
        { name: 'History', path: '/dashboard' }
    ]

    const handleNavClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
            {loading && <Loader />}
            <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-slate-900/40 border-b border-white/5">

                {/* ------------------ Logo ----------------  */}
                <Link to={'/'} className="cursor-pointer">
                    <div className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tighter cursor-pointer group">
                        <div
                            className="p-2 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-lg shadow-violet-500/20"
                        >
                            <Scissors className="text-white" size={20} />
                        </div>
                        <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">Rexurl</span>
                    </div>
                </Link>

                {/* ------------------ Navigation (Desktop) ----------------  */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    {navItems.map((item, i) => (
                        <Link key={i} to={item.path} className="relative group hover:text-white transition-colors cursor-pointer">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* ------------------ Mobile Menu Button ----------------  */}
                <button
                    className="md:hidden text-slate-400 hover:text-white transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* ------------------ Sign Up and Sign In (Desktop) ----------------  */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <>
                            <div className='bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>
                                <img src={userImg} alt="user Image" />
                            </div>
                            <h2 className='text-slate-300 font-medium'>{user?.fullname}</h2>
                            <Button variant='danger' className="cursor-pointer">Log out</Button>
                        </>
                    ) : (
                        <>
                            <Link to={'/sign-in'} className="cursor-pointer">
                                <Button variant='ghost' className="cursor-pointer">Sign In</Button>
                            </Link>
                            <Link to={'/sign-up'} className="relative px-3 text-sm font-bold text-white bg-slate-800 rounded-full overflow-hidden group border border-white/10">
                                <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <Button variant='signUp' className='relative z-10 px-0 py-0' >Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* ------------------ Mobile Menu Overlay ----------------  */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                {/* Blurred Backdrop */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`fixed top-20 right-0 w-72 h-screen bg-slate-900/98 backdrop-blur-lg border-l border-white/10 transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-6 p-6">
                        {/* Navigation Links */}
                        <div className="flex flex-col gap-3 border-b border-white/10 pb-6">
                            {navItems.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-medium text-base cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* User Section */}
                        {user ? (
                            <div className="flex flex-col gap-4">
                                <div className='flex items-center gap-3'>
                                    <div className='bg-linear-to-br from-violet-600 to-fuchsia-600 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                                        <img src={userImg} alt="user Image" />
                                    </div>
                                    <h2 className='text-slate-200 font-medium'>{user?.fullname}</h2>
                                </div>
                                <Button variant='danger' className="w-full cursor-pointer">Log out</Button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <Link to={'/sign-in'} onClick={handleNavClick} className="w-full cursor-pointer">
                                    <Button variant='ghost' className="w-full cursor-pointer">Sign In</Button>
                                </Link>
                                <Link to={'/sign-up'} onClick={handleNavClick} className="w-full relative text-sm font-bold text-white rounded-lg overflow-hidden group border border-fuchsia-500/50 hover:border-fuchsia-500 transition-all duration-300 cursor-pointer px-4 py-2 block text-center">
                                    <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    <span className="relative z-10">Sign Up</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar