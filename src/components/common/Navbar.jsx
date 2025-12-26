import React, { useEffect, useState } from 'react'
import { Scissors, User } from 'lucide-react'
import Button from '../ui/Buttons'
import { Link } from 'react-router'
import { authServices } from '../../api'
import Loader from '../ui/Loader'
import userImg from '../../assets/userImage.png'
const Navbar = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

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
    
    return (
        <>
            {loading && <Loader />}
            <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-slate-900/40 border-b border-white/5">

                {/* ------------------ Logo ----------------  */}
                <Link to={'/'}>
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer group">
                        <div
                            className="p-2 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-lg shadow-violet-500/20"
                        >
                            <Scissors className="text-white" size={20} />
                        </div>
                        <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">SnipIt.</span>
                    </div>
                </Link>

                {/* ------------------ Navigation ----------------  */}

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    {['Home', 'Dashboard', 'All URLs', 'History'].map((item) => (
                        <a key={item} href="#" className="relative group hover:text-white transition-colors">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>


                {/* ------------------ Sign Up and Sign In ----------------  */}
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div className='bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center'>
                                <img src={userImg} alt="user Image" />
                            </div>
                            <h2 className='text-slate-300 font-medium'>{user?.fullname}</h2>
                            <div>
                                <Button variant='danger' >Log out</Button>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-2">
                            <Link to={'/sign-in'}>
                                <Button variant='ghost' >Sign In</Button>
                            </Link>
                            <Link to={'/sign-up'} className="relative px-3 text-sm font-bold text-white bg-slate-800 rounded-full overflow-hidden group border border-white/10">
                                <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <Button variant='signUp' className='relative z-10 px-0 py-0' >Sign Up</Button>
                            </Link>
                        </div>
                }
            </nav>
        </>
    )
}

export default Navbar