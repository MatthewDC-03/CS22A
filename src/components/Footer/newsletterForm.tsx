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

const NewsletterForm: FC<NewsletterTypes> = ({ status, message, onValidated }) => {
    const [ error, setError ] = useState("");
  const [ email, setEmail ] = useState("");

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = (event: any) => {
    event?.preventDefault()

    setError("");

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event: any ) => {
    setError("");
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: any) => {
    if (!message || typeof message !== 'string') {
        return null;
    }
    const result = message.split('-');
    if ("0" !== result[0]?.trim()) {
        return message;
    }
    const formattedMessage = result[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
}

const errorMessage = error || getMessage(message);
    return (
        <>
            <form onSubmit={handleFormSubmit} className="absolute left-1/2 -translate-x-1/2 rounded-lg shadow-2xl w-3/4 z-10 h-[420px]
                                                        /* << TABLET/IPAD RESPONISVE */ max-lg:w-[90%] max-lg:h-[300px] max-lg:top-20
            " >
                <div className="h-full w-full text-[#F6F6F6] z-10 p-4 flex flex-col justify-center items-center gap-5
                                  /* << TABLET/IPAD RESPONISVE */ max-lg:gap-2
                " >
                    <h1 className="uppercase text-5xl font-bold w-fit
                                  /* << TABLET/IPAD RESPONISVE */ max-lg:text-base max-lg:font-medium
                                  /* LAPTOP RESPONSIVE */ max-xl:text-4xl
                    ">subscribe to our newsletter!</h1>
                    <p className="text-center text-xl
                                  /* << TABLET/IPAD RESPONISVE */ max-lg:text-xs max-lg:text-justify
                                  ">Stay updated with the latest from CS22A! Subscribe to our newsletter for insights, course highlights, and important announcements. Be the first to know about guest speaker sessions, hands-on coding tips, and study group activities. Join our community and stay informed on all things CS22A. Subscribe now!</p>
                    <input onChange={(e) => setEmail(e.target.value)} onKeyDown={handleInputKeyEvent} value={email} type="text" placeholder="Email" 
                    className={`${error && "border-red-500 text-red-500"} w-full h-16 px-4 py-3 text-lg text-[#1E1E1E] border-[3px] border-grey-100 outline-none rounded-lg
                                            /* << TABLET/IPAD RESPONISVE */ max-lg:h-10 max-lg:text-base max-lg:border-[1px] max-lg:rounded-md
                    `} />
                    <div id="statusForm" className="text-lg" >
                    { 'sending' === status ? <div>sending</div> : null }
                    {status === 'error' || error ? (
                            <div className="text-red-700 pt-2" dangerouslySetInnerHTML={{ __html: errorMessage || '' }} />
                        ) : null}
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: message }} />
        )}
                    </div>
                    <button type="submit" 
                    className="bg-[#008DDA] px-20 py-3 rounded-lg text-xl
                                /* << TABLET/IPAD RESPONISVE */ max-lg:text-base max-lg:w-full
                                  ">Subscribe</button>
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
