import { ArrowRight, Link } from 'lucide-react'
import React, { useState } from 'react'
import { urlServices } from '../../api';
import ShortenerReveal from './ShortenerReveal';
import Button from '../ui/Buttons';
import { Bounce, toast } from 'react-toastify';

const ShortenerInput = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    // -------------------- Handle Shortener ------------------
    const handleShorten = async () => {
        if (!longUrl) return setErrorMessage('please enter your url');
        try {
            // ------------------- Api Call
            const res = await urlServices.createUrl(longUrl)
            setIsLoading(true);

            setTimeout(() => {
                setShortUrl(`http://localhost:8000/${res.shortUrl}`);
                setIsLoading(false);
                toast.success(`Url Created Successfully!`, { theme: "dark", transition: Bounce, });
            }, 1200);

        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data)
            setShortUrl('')
            // --------------- Toaster 
            toast.error(`Oops! ${error.response.data}`, { theme: "dark", transition: Bounce, });
        }

    };


    return (
        <>
            <div className="w-full max-w-3xl relative group z-20">
                <div className="absolute -inset-1 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-20 blur group-hover:opacity-60 transition duration-500"></div>

                <div className="relative flex flex-col md:flex-row items-center gap-2 p-2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl">
                    <div className="flex-1 flex items-center px-4 h-14 w-full">
                        <Link className="text-slate-500 mr-3 group-focus-within:text-violet-400 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Paste your insanely long URL here..."
                            className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600 h-full text-lg"
                            value={longUrl}
                            onChange={(e) => { setLongUrl(e.target.value), setErrorMessage('') }}
                        />
                    </div>
                    <Button
                        variant='none'
                        onClick={handleShorten}
                        disabled={isLoading}
                        className="w-full md:w-auto px-8 h-12 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 relative"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>Shorten <ArrowRight size={18} /></>
                        )}
                    </Button>
                </div>

                <div className={`${errorMessage ? '' : 'hidden'} absolute -bottom-15 w-full flex justify-center px-2`}>
                    <div className="animate-error flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                        {/* Glowing Dot */}
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>

                        {/* Error Text */}
                        <p className="text-[10px] md:text-xs font-black tracking-[0.15em] text-red-400 uppercase">
                            [ Url.Error ]: {errorMessage}
                        </p>

                        {/* Decorative corner accent */}
                        <div className="h-2 w-0.5 bg-red-500/40 ml-1"></div>
                    </div>
                </div>
            </div>

            {/* ------------------- Shortener Reveal ----------------------- */}
            <ShortenerReveal shortUrl={shortUrl} setIsCopied={setIsCopied} isCopied={isCopied} />
        </>
    )
}

export default ShortenerInput