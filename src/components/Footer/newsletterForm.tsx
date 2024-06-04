/* Import */
import { useState } from "react"
import React, { FC } from "react"
import Image from "next/image"

/* Images */
import CS22A from "../../../public/images/HomepagePhotos/OurSection.svg"

export interface NewsletterTypes {
    status: any,
    message: any,
    onValidated: any
}

interface ErrorType {
    error: string | null
}

const NewsletterForm: FC<NewsletterTypes> = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState<ErrorType>({ error: null })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.endsWith('@gmail.com');
    }

    const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault()
        }
        setError({ error: null })

        if (!email) {
            setError({ error: "Please enter an email address" });
            return;
        }

        if (!validateEmail(email)) {
            setError({ error: "Please enter a valid email address" });
            return;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        return email && email.indexOf('@') > -1 && isFormValidated
    }

    const handleInputKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError({ error: null })
        // 13 is the 'Enter' key on the keyboard
        if (e.keyCode === 13) {
            e.preventDefault()
            handleSubmit()
        }
    }

    const getMessage = (message: string) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ('0' == result?.[0]?.trim()) {
            return message
        }
        const formattedMessage = result?.[1]?.trim() ?? null
        return formattedMessage ? message : null
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="absolute left-1/2 -translate-x-1/2 rounded-lg shadow-2xl w-3/4 z-10 h-[420px]" >
                <div className="h-full w-full text-[#F6F6F6] z-50 p-4 flex flex-col justify-center items-center gap-5" >
                    <h1 className="uppercase text-5xl font-bold w-fit">subscribe to our newsletter!</h1>
                    <p className="text-center text-xl">Stay updated with the latest from CS22A! Subscribe to our newsletter for insights, course highlights, and important announcements. Be the first to know about guest speaker sessions, hands-on coding tips, and study group activities. Join our community and stay informed on all things CS22A. Subscribe now!</p>
                    <input onChange={(e) => setEmail(e.target.value)} onKeyDown={handleInputKeyEvent} value={email} type="text" placeholder="Email" className={`${error.error && "border-red-500 text-red-500"} w-full h-16 px-4 py-3 text-lg text-[#1E1E1E] border-[3px] border-grey-100 outline-none rounded-lg`} />
                    <div id="statusForm" className="text-lg" >
                        {
                            `sending` === status && <div>Sending...</div>
                        }
                        {
                            error.error && (
                                <div className="text-red-500">{error.error}</div>
                            )
                        }
                        {
                            'error' === status && !error.error && (
                                <div className="text-red-500">{getMessage(message) || ''}</div>
                            )
                        }
                        {
                            'success' === status && !error.error && (
                                <div>{message}</div>
                            )
                        }
                    </div>
                    <button type="submit" className="bg-[#008DDA] px-20 py-3 rounded-lg text-xl">Subscribe</button>
                </div>
                <div className="absolute left-0 brightness-50 -z-10 top-0 h-full rounded-lg overflow-hidden shadow-2xl w-full">
                    <Image src={CS22A} alt="..." className="w-full h-full object-cover object-center" width={500} height={500} />
                </div>
            </form>
            <div className="w-full h-[340px]" ></div>
        </>
    )
}

export default NewsletterForm
