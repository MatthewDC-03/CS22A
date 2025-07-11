"use client"

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export interface InvalidType {
    name: boolean,
    email: boolean,
    message: boolean
}

export interface popType {
    pop: boolean
}

const Feedback = ()=>{


    const form = useRef<HTMLFormElement>(null); 
    const [invalid,setInvalid] = useState<InvalidType>({
        name: true,
        email: true,
        message: true
    })
    const [pop,setPop] = useState<popType>({
        pop: false
    })

    
    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault()

        /* Invalid & Empty  */
        
        /* Getting the Attributes */
        const nameField: HTMLInputElement | null = document.querySelector('#name');
        const emailField: HTMLInputElement | null = document.querySelector('#email');
        const messageField: HTMLTextAreaElement | null = document.querySelector('#message');
        

        /* Checking it if the field is empty */
        if (!nameField?.value.trim() || !emailField?.value.trim() || !messageField?.value.trim()) {
            console.log("One or more required fields are empty. Form submission prevented.");
            setInvalid({
                name: false,
                email: false,
                message: false
            })
            setPop({pop: false})
            console.log(invalid)
            return;
        }
        else {
            setInvalid({
                name: true,
                email: true,
                message: true
            })
            setPop({pop: true})
                setTimeout(()=>{
                setPop({pop: false})
                },3000)
            console.log(pop.pop)
        }
    
    /* Email to Admin */
    if (!form || !form.current) {
        console.error('Form reference is null.');
        return;
    }

    emailjs
        .sendForm('service_f89oubt', 'template_ywspujb', form.current, {
            publicKey: 'P6CCi2HwWiekPlnHn',
        })
        .then(
            () => {
                console.log('Admin: SUCCESS!');
            },
            (error) => {
                console.log('Admin: FAILED...', error.text);
            }
        );

        /* Email to User */
        if (!form || !form.current) {
            console.error('Form reference is null.');
            return;
        }
    
        emailjs
            .sendForm('service_f89oubt', 'template_fj6y5p7', form.current, {
                publicKey: 'P6CCi2HwWiekPlnHn',
            })
            .then(
                () => {
                    console.log('User: SUCCESS!');
                },
                (error) => {
                    console.log('User: FAILED...', error.text);
                }
            );

  };

    return (
        <form onSubmit={sendEmail} ref={form} className="w-full h-full flex justify-between items-center
                                                        /* << TABLET/IPAD RESPONSIVE */ max-lg:flex-col max-lg:pt-16 max-lg:gap-7
                                                        /* << DESKTOP RESPONSIVE */ max-2xl:flex-rowmax-2xl:gap-12
        "  >
            <div className={`${pop.pop == true ? "visible" : "hidden"} fixed py-4 px-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40vh] z-50 bg-[#1E1E1E] rounded-lg text-[#F6F6F6]`} >Thank you for giving us your feedback ✔</div>
            <div className=" h-full grid place-items-center
                            /* << TABLET/IPAD RESPONSIVE */ max-lg:w-full
                            /* << DESKTOP RESPONSIVE */ max-2xl:w-1/2 
            ">
                <section className="px-10 flex flex-col gap-5 text-[#1E1E1E]
                                    /* << TABLET/IPAD RESPONSIVE */ max-lg:px-5
                " >
                    <h1 className="text-5xl font-bold 
                                    /* << TABLET/IPAD RESPONSIVE */ max-lg:text-3xl max-lg:text-center
                    " >We Value Your Opinion!</h1>
                    <p className=" text-xl leading-8 font-medium
                                /* << TABLET/IPAD RESPONSIVE */ max-lg:text-base max-lg:text-justify
                    " >We appreciate you taking the time to visit our web blog! Your opinions and suggestions are invaluable to us as we strive to improve our content and user experience. Please share your thoughts on what you enjoyed, any areas for improvement, or any topics you'd like to see covered in the future. Thank you for helping us make our blog even better!</p>
                </section>
            </div>
            <div className=" h-fit w-full grid place-items-center px-5
                            /* << TABLET/IPAD RESPONSIVE */ max-lg:w-full
                            /* << DESKTOP RESPONSIVE */ max-2xl:w-1/2
                            ">
                <section className="w-3/4 h-fit flex flex-col gap-10
                                    /* << TABLET/IPAD RESPONSIVE */ max-lg:w-full
                " >
                    <input id="name" type="text" name="name" placeholder="Name" className={`w-full z-10 bg-transparent border-0 border-b-2 ${invalid.name ? "border-[#1E1E1E]" : "border-red-400"} placeholder-[#1E1E1E] outline-none text-[#1E1E1E]`} />
                    <input id="email" type="email" name="email" placeholder="Email" className={`w-full z-10 bg-transparent border-0 border-b-2 ${invalid.email ? "border-[#1E1E1E]" : "border-red-400"} placeholder-[#1E1E1E] outline-none text-[#1E1E1E]`} />
                    <textarea id="message" name="message" placeholder="Comment here..." className={`w-full z-10 h-[200px] bg-transparent border-2 rounded-lg p-2 ${invalid.message ? "border-[#1E1E1E]" : "border-red-400"} placeholder-[#1E1E1E] outline-none text-[#1E1E1E]`}></textarea>
                   <div className="w-full h-fit grid place-items-end" >
                   <button type="submit" className="border-2 z-10 border-[#1E1E1E] hover:border-[#008DDA] hover:text-[#008DDA] text-[#1E1E1E] h-fit w-fit px-7 text-lg font-semibold rounded-full py-1" >Submit</button>
                   </div>
                </section>
            </div>
        </form>
    )
}

export default Feedback