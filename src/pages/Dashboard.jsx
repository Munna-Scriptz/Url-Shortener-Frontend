import React, { useEffect, useState } from 'react';
import DashHeader from '../components/dashboard/DashHeader';
import DashTable from '../components/dashboard/DashTable';
import { urlServices, authServices } from '../api';
import Loader from '../components/ui/Loader';
import { Link } from 'react-router';
import Button from '../components/ui/Buttons';
import { Lock } from 'lucide-react';

const Dashboard = () => {

  const [links, setLinks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await authServices.getProfile()
        setUser(res)
      } catch (error) {
        console.log(error)
        setUser(null)
      } finally {
        setUserLoading(false)
      }
    })()
  }, [])

  useEffect(() => {
    if (user) {
      (async () => {
        setLoading(true)
        try {
          const res = await urlServices.urlHistory()
          setLinks(res)
          setTimeout(() => {
            setLoading(false)
          }, 600);
        } catch (error) {
          console.log(error)
          setLinks(null)
          setLoading(false)
        }
      })()
    }
  }, [user])

  if (userLoading) {
    return <Loader />
  }

  if (!user) {
    return (
      <section id='Dashboard' className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container">
          <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden py-20 px-4">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10 text-center max-w-lg">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-2xl shadow-2xl shadow-violet-500/50">
                  <Lock className="text-white" size={48} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Dashboard Access
              </h1>

              <p className="text-slate-300 mb-3 text-lg">
                Sign in to your account
              </p>

              <p className="text-slate-400 mb-10 text-base leading-relaxed">
                View and manage all your shortened URLs, track click analytics, and access your complete URL history in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={'/sign-in'} className="flex-1 sm:flex-none">
                  <Button variant='ghost' className="w-full cursor-pointer px-8 py-3 font-semibold transition-all hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
                <Link to={'/sign-up'} className="flex-1 sm:flex-none relative px-8 py-3 text-base font-semibold text-white rounded-lg overflow-hidden group border border-fuchsia-500/50 hover:border-fuchsia-500 transition-all duration-300 cursor-pointer block text-center">
                  <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10">Create Account</span>
                </Link>
              </div>

              <p className="text-slate-500 text-sm mt-8">
                Don't have an account? <span className="text-fuchsia-400 font-medium">Sign up now</span> to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {
        loading === true ?
          <Loader />
          :
          <section id='Dashboard'>
            <div className="container">
              <div id="Dashboard-Row" className="min-h-screen text-white relative overflow-hidden py-10">
                <DashHeader totalClicks={links} />

                {/* --- main dashboard table --- */}
                <DashTable links={links} />

              </div>
            </div>
          </section>
      }
    </>
  );
};

export default Dashboard;