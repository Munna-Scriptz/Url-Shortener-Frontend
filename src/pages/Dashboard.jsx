import React, { useEffect, useState } from 'react';
import DashHeader from '../components/dashboard/DashHeader';
import DashTable from '../components/dashboard/DashTable';
import { urlServices } from '../api';
import Loader from '../components/ui/Loader';

const Dashboard = () => {

  const [links, setLinks] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
  }, [])

  console.log(links)
  return (
    <>
      {
        loading === true ?
          <Loader />
          :
          <section id='Dashboard'>
            <div className="container">
              <div id="Dashboard-Row" className="min-h-screen text-white relative overflow-hidden py-10">
                <DashHeader totalClicks={'1,238'} />

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