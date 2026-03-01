"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Button } from "@/components/ui/Button"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

interface FormData {
    name: string
    email: string
    company: string
    subject: string
    message: string
}

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setStatus("sending")

        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

        if (!publicKey || !serviceId || !templateId) {
            console.error("EmailJS environment variables are not configured. Please check your .env.local file.")
            setStatus("error")
            return
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    company: data.company,
                    subject: data.subject,
                    message: data.message,
                },
                publicKey
            )
            setStatus("success")
            reset()
            setTimeout(() => setStatus("idle"), 5000)
        } catch (error) {
            console.error("EmailJS Error:", error)
            setStatus("error")
            setTimeout(() => setStatus("idle"), 5000)
        }
    }

    const inputClasses =
        "w-full bg-white border border-[#00174c]/10 rounded-lg px-4 py-3 text-sm text-[#00174c] placeholder:text-[#00174c]/30 focus:outline-none focus:border-[#e50113]/50 focus:ring-1 focus:ring-[#e50113]/20 transition-all"

    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#00174c] pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00174c] via-[#001a57] to-[#000d30]" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">Get in Touch</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            Contact Us
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            Ready to discuss how TSA can support your strategic objectives? Reach out to our team.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Form & Info */}
            <SectionWrapper bg="white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[#00174c]/50 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            placeholder="Your full name"
                                            className={inputClasses}
                                        />
                                        {errors.name && (
                                            <p className="text-[#e50113] text-xs mt-1">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[#00174c]/50 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            placeholder="your@email.com"
                                            className={inputClasses}
                                        />
                                        {errors.email && (
                                            <p className="text-[#e50113] text-xs mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[#00174c]/50 mb-2">
                                            Company / Organization
                                        </label>
                                        <input
                                            {...register("company")}
                                            placeholder="Your organization"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[#00174c]/50 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            {...register("subject", { required: "Subject is required" })}
                                            placeholder="How can we help?"
                                            className={inputClasses}
                                        />
                                        {errors.subject && (
                                            <p className="text-[#e50113] text-xs mt-1">{errors.subject.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold tracking-wider uppercase text-[#00174c]/50 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        placeholder="Tell us about your project or inquiry..."
                                        rows={6}
                                        className={inputClasses + " resize-none"}
                                    />
                                    {errors.message && (
                                        <p className="text-[#e50113] text-xs mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === "sending"}
                                    size="lg"
                                    className="w-full sm:w-auto mt-2"
                                >
                                    {status === "sending" ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>

                                {/* Status Messages */}
                                <AnimatePresence>
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-green-50 text-green-700 text-sm p-4 rounded-lg border border-green-200 flex items-center gap-2"
                                        >
                                            <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                                            Your message has been sent successfully. We will get back to you shortly.
                                        </motion.div>
                                    )}
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-red-50 text-red-700 text-sm p-4 rounded-lg border border-red-200 flex items-center gap-2"
                                        >
                                            <HiXCircle className="w-5 h-5 flex-shrink-0" />
                                            Something went wrong. Please check your EmailJS configuration or try again later.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-3">Office Address</h4>
                                    <p className="text-sm text-[#00174c]/70 leading-relaxed">
                                        Jakarta, Indonesia<br />
                                        (Full address available upon request)
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-3">Phone</h4>
                                    <p className="text-sm text-[#00174c]/70">+62 21 XXXX XXXX</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-3">Email</h4>
                                    <p className="text-sm text-[#00174c]/70">info@tsa.co.id</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-3">Business Hours</h4>
                                    <p className="text-sm text-[#00174c]/70">
                                        Monday – Friday<br />
                                        09:00 – 18:00 WIB
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-[#f1f1f1] rounded-xl border border-neutral-200/50">
                                <h4 className="font-serif font-bold text-sm mb-2">For Government & Institutional Inquiries</h4>
                                <p className="text-xs text-[#00174c]/60 leading-relaxed">
                                    For matters requiring confidential discussion, please contact us directly via phone or submit a formal inquiry through our contact form. All communications are handled with strict confidentiality.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </SectionWrapper>
        </>
    )
}
