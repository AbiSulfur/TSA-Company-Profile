"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { dictionaries, Language } from './dictionaries'

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    // Load saved language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('tsa_language') as Language
        if (savedLang && ['en', 'id'].includes(savedLang)) {
            setLanguage(savedLang)
        }
        setMounted(true)
    }, [])

    // Save changes to localStorage
    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem('tsa_language', lang)
    }

    // Translation hook that searches paths like 'hero.title'
    const t = (path: string) => {
        const keys = path.split('.')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = dictionaries[language]

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`)
                return path
            }
            current = current[key]
        }
        return current as string
    }

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return <div className="min-h-screen bg-[#00174c]" /> // Prevents flash of unstyled content
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
