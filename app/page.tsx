"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Button } from "@/components/ui/Button"
import { CardCarousel } from "@/components/ui/CardCarousel"
import { useLanguage } from "@/i18n/LanguageContext"

import {
  HiShieldCheck,
  HiLibrary,
  HiCalendar,
  HiLightningBolt,
  HiVideoCamera,
  HiMicrophone,
  HiGlobeAlt,
  HiChevronRight,
} from "react-icons/hi"
import { FaHandshake } from "react-icons/fa"

/* ─── Animation Variants ─── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

/* ─── Data ─── */
const capabilities = [
  {
    keyPrefix: "capabilities.items.tech",
    icon: <HiShieldCheck className="w-8 h-8 text-[#e50113]" />,
  },
  {
    keyPrefix: "capabilities.items.advocacy",
    icon: <HiLibrary className="w-8 h-8 text-[#e50113]" />,
  },
  {
    keyPrefix: "capabilities.items.events",
    icon: <HiCalendar className="w-8 h-8 text-[#e50113]" />,
  },
  {
    keyPrefix: "capabilities.items.activation",
    icon: <HiLightningBolt className="w-8 h-8 text-[#e50113]" />,
  },
  {
    keyPrefix: "capabilities.items.production",
    icon: <HiVideoCamera className="w-8 h-8 text-[#e50113]" />,
  },
  {
    keyPrefix: "capabilities.items.podcast",
    icon: <HiMicrophone className="w-8 h-8 text-[#e50113]" />,
  },
]

const featuredEvents = [
  {
    keyPrefix: "events.items.jgf",
    year: "2023",
  },
  {
    keyPrefix: "events.items.acs",
    year: "2023",
  },
  {
    keyPrefix: "events.items.ieis",
    year: "2022",
  },
  {
    keyPrefix: "events.items.green",
    year: "2022",
  },
  {
    keyPrefix: "events.items.cyber",
    year: "2023",
  },
  {
    keyPrefix: "events.items.cross",
    year: "2024",
  },
]

const clientLogos = [
  "Kementerian Pertahanan RI",
  "European Union (EU)",
  "UNODC",
  "EuroCham Indonesia",
  "Badan Intelijen Negara (BIN)",
  "Thales",
  "DPR RI",
  "Google",
  "Adobe",
  "BP2MI",
  "IKEA",
  "Zoho",
  "BNN",
  "BNPT",
  "Embassy of the USA",
  "Mirage Defence",
]

const stats = [
  { number: "12+", labelKey: "hero.stats.years" },
  { number: "16,000+", labelKey: "hero.stats.contacts" },
  { number: "50+", labelKey: "hero.stats.events" },
  { number: "8", labelKey: "hero.stats.verticals" },
]

const bannerImages = [
  "/banner (1).jpeg",
  "/banner (2).jpeg",
  "/banner (3).jpeg",
]

const brands = [
  {
    name: "Tricatha Sempiternal Asia",
    abbr: "TSA",
    taglineKey: "ecosystem.tags.tsa",
    color: "#e50113",
  },
  {
    name: "Gema Waskita Interaktifa",
    abbr: "GWI",
    taglineKey: "ecosystem.tags.gwi",
    color: "#e50113",
  },
  {
    name: "GovAdv Consulting",
    abbr: "GovAdv",
    taglineKey: "ecosystem.tags.govadv",
    color: "#00174c",
  },
  {
    name: "DNA Podcast Studio",
    abbr: "DNA",
    taglineKey: "ecosystem.tags.dna",
    color: "#00174c",
  },
  {
    name: "Enchantee Kitchen",
    abbr: "EK",
    taglineKey: "ecosystem.tags.ek",
    color: "#e50113",
  },
  {
    name: "Diplomacy In Motion",
    abbr: "DIM",
    taglineKey: "ecosystem.tags.dim",
    color: "#00174c",
  },
]

const whyTSA = [
  {
    keyPrefix: "why_tsa.items.network",
    icon: <HiGlobeAlt className="w-7 h-7" />,
  },
  {
    keyPrefix: "why_tsa.items.security",
    icon: <HiShieldCheck className="w-7 h-7" />,
  },
  {
    keyPrefix: "why_tsa.items.protocol",
    icon: <FaHandshake className="w-7 h-7" />,
  },
  {
    keyPrefix: "why_tsa.items.execution",
    icon: <HiLightningBolt className="w-7 h-7" />,
  },
]

const teamMembers = [
  {
    name: "Dina E. Saksono",
    roleKey: "team.roles.ceo",
    descKey: "team.desc.ceo",
    abbr: "CEO",
    image: "/team-ceo.png",
  },
  {
    name: "R. Januardy",
    roleKey: "team.roles.cto",
    descKey: "team.desc.cto",
    abbr: "CTO",
    image: "/team-cto.png",
  },
  {
    name: "Joseph Saryuf",
    roleKey: "team.roles.creative",
    descKey: "team.desc.creative",
    abbr: "CD",
    image: "/team-creative.png",
  },
  {
    name: "Raditya Pratama",
    roleKey: "team.roles.production",
    descKey: "team.desc.production",
    abbr: "PMS",
    image: "/team-production.png",
  },
]

export default function HomePage() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center bg-[#00174c] overflow-hidden">
        {/* Background Image Slideshow — Crossfade */}
        {bannerImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`TSA Banner ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00174c]/90 via-[#00174c]/80 to-[#00174c]/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00174c] via-transparent to-[#00174c]/50 z-[1]" />

        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#e50113] to-transparent z-[2]" />

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-[#e50113] w-6" : "bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

        <Container className="relative z-10 pt-20 pb-12 md:pt-28 md:pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-6"
            >
              <span className="inline-block text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase border border-[#e50113]/30 px-4 py-1.5 rounded-full">
                {t('hero.eyebrow')}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {t('hero.title_start')}
              <span className="text-[#e50113]">{t('hero.title_highlight')}</span>
              {t('hero.title_end')}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/business-group/event-management">
                <Button size="lg" className="text-sm tracking-wide">
                  {t('hero.btn_primary')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-sm tracking-wide border-white/30 text-white hover:bg-white hover:text-[#00174c]">
                  {t('hero.btn_secondary')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10 border-t border-white/10 pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center md:px-6">
                <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{t(stat.labelKey)}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ════════════ ABOUT OUR STORY ════════════ */}
      <SectionWrapper bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('about.eyebrow')}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                {t('about.title_start')}{" "}
                <span className="text-[#e50113]">{t('about.title_highlight')}</span>
              </h2>
              <p className="text-[#00174c]/60 text-lg leading-relaxed mb-6">
                {t('about.p1')}
              </p>
              <p className="text-[#00174c]/60 leading-relaxed mb-8">
                {t('about.p2')}
              </p>
              <Link href="/brands/tsa">
                <Button variant="outline" className="text-sm tracking-wide group flex items-center">
                  {t('about.btn')}
                  <HiChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Image / Visual side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/banner (1).jpeg"
                  alt="TSA Team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00174c]/30 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-xl shadow-xl p-5 border border-neutral-100 flex flex-col items-center justify-center min-w-[140px]">
                <p className="text-4xl font-serif font-bold text-[#e50113] mb-1">12+</p>
                <p className="text-[#00174c]/50 text-[10px] tracking-widest uppercase font-bold text-center">
                  {t('about.stat_years')}
                </p>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#e50113]/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ════════════ CORE CAPABILITIES ════════════ */}
      <SectionWrapper bg="light">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('capabilities.eyebrow')}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              {t('capabilities.title')}
            </h2>
            <p className="text-[#00174c]/60 text-lg max-w-2xl mx-auto">
              {t('capabilities.subtitle')}
            </p>
          </div>
          <CardCarousel>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.keyPrefix}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-xl p-8 hover:bg-[#00174c] hover:text-white transition-all duration-500 border border-neutral-200/50 hover:border-[#e50113]/20 h-full shadow-sm hover:shadow-xl"
              >
                <span className="text-4xl mb-5 block">{cap.icon}</span>
                <h3 className="font-serif text-xl font-bold mb-3">{t(`${cap.keyPrefix}.title`)}</h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-80">{t(`${cap.keyPrefix}.desc`)}</p>
              </motion.div>
            ))}
          </CardCarousel>
        </Container>
      </SectionWrapper>

      {/* ════════════ WHY TSA ════════════ */}
      <SectionWrapper bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Title */}
            <div className="lg:col-span-2">
              <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('why_tsa.eyebrow')}</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-6">
                {t('why_tsa.title')}
              </h2>
              <p className="text-[#00174c]/60 leading-relaxed mb-6">
                {t('why_tsa.desc')}
              </p>
              <Link href="/services">
                <Button className="text-sm tracking-wide group">
                  {t('why_tsa.btn')}
                  <HiChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right - Grid cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyTSA.map((item, i) => (
                <motion.div
                  key={item.keyPrefix}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#f1f1f1] rounded-xl p-6 hover:shadow-lg transition-shadow border border-neutral-200/50"
                >
                  <div className="w-12 h-12 bg-[#00174c] rounded-lg flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{t(`${item.keyPrefix}.title`)}</h3>
                  <p className="text-[#00174c]/60 text-sm leading-relaxed">{t(`${item.keyPrefix}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ════════════ MEET THE TEAM ════════════ */}
      <SectionWrapper bg="navy">
        <Container>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase"
            >
              {t('team.eyebrow')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white"
            >
              {t('team.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg max-w-2xl mx-auto"
            >
              {t('team.subtitle')}
            </motion.p>
          </div>

          {/* Zigzag Team Cards */}
          <div className="space-y-12 md:space-y-20">
            {teamMembers.map((member, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* Photo */}
                  <div className="relative group w-full md:w-2/5 flex-shrink-0">
                    <div className="relative aspect-[3/4] max-w-[320px] mx-auto rounded-2xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay on photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00174c]/60 via-transparent to-transparent" />
                      {/* Role tag on photo */}
                      <div className="absolute bottom-4 left-4 bg-[#e50113] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                        {member.abbr}
                      </div>
                    </div>
                    {/* Decorative border */}
                    <div className={`absolute -top-3 ${isEven ? '-right-3' : '-left-3'} w-full h-full max-w-[320px] mx-auto border-2 border-[#e50113]/20 rounded-2xl -z-10`} />
                  </div>

                  {/* Info */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="text-[#e50113] text-xs font-semibold tracking-[0.15em] uppercase">
                        {t(member.roleKey)}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        {member.name}
                      </h3>
                      <p className={`text-white/50 leading-relaxed max-w-lg mx-auto ${isEven ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
                        {t(member.descKey)}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* View Full Team Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/leadership" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#e50113] font-semibold tracking-wide transition-colors group">
              {t('team.btn')}
              <HiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ════════════ BRAND ECOSYSTEM ════════════ */}
      <SectionWrapper bg="light">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('ecosystem.eyebrow')}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              {t('ecosystem.title')}
            </h2>
            <p className="text-[#00174c]/60 text-lg max-w-2xl mx-auto">
              {t('ecosystem.subtitle')}
            </p>
          </div>
          <CardCarousel>
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#00174c] rounded-xl p-8 border border-[#00174c]/10 hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 font-serif font-bold text-xl text-white"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.abbr.charAt(0)}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {brand.name}
                </h3>
                <span className="text-[#e50113] text-xs font-semibold tracking-wider uppercase">
                  {brand.abbr}
                </span>
                <p className="text-[#00174c]/60 text-sm leading-relaxed mt-3">
                  {t(brand.taglineKey)}
                </p>
              </motion.div>
            ))}
          </CardCarousel>
        </Container>
      </SectionWrapper>

      {/* ════════════ FEATURED EVENTS ════════════ */}
      <SectionWrapper bg="light">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('events.eyebrow')}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                {t('events.title')}
              </h2>
            </div>
            <Link href="/events" className="text-sm text-[#e50113] font-semibold tracking-wide hover:underline flex items-center gap-1 group">
              {t('events.btn')}
              <HiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <CardCarousel>
            {featuredEvents.map((event, i) => (
              <motion.div
                key={event.keyPrefix}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-8 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 h-full"
              >
                <span className="text-[#e50113] text-xs font-bold tracking-wider">{event.year}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3">{t(`${event.keyPrefix}.title`)}</h3>
                <p className="text-[#00174c]/50 text-sm leading-relaxed">{t(`${event.keyPrefix}.desc`)}</p>
              </motion.div>
            ))}
          </CardCarousel>
        </Container>
      </SectionWrapper>

      {/* ════════════ CLIENTS LOGO CAROUSEL ════════════ */}
      <SectionWrapper bg="white">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">{t('clients.eyebrow')}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              {t('clients.title')}
            </h2>
            <p className="text-[#00174c]/60 max-w-xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </div>
          {/* Dual-row marquee */}
          <div className="space-y-4">
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee gap-8">
                {[...clientLogos.slice(0, 8), ...clientLogos.slice(0, 8)].map((logo, i) => (
                  <div
                    key={`a-${logo}-${i}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-[#f1f1f1] rounded-lg border border-neutral-200/50"
                  >
                    <span className="text-[#00174c]/50 font-semibold text-sm whitespace-nowrap tracking-wide">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-reverse gap-8">
                {[...clientLogos.slice(8), ...clientLogos.slice(8)].map((logo, i) => (
                  <div
                    key={`b-${logo}-${i}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-[#f1f1f1] rounded-lg border border-neutral-200/50"
                  >
                    <span className="text-[#00174c]/50 font-semibold text-sm whitespace-nowrap tracking-wide">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/clients-partners" className="text-sm text-[#e50113] font-semibold tracking-wide hover:underline flex items-center justify-center gap-1 group">
              {t('clients.btn')}
              <HiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* ════════════ CTA ════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner (3).jpeg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#00174c]/85" />
        </div>
        <Container className="relative z-10 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              {t('cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-sm tracking-wide">
                  {t('cta.btn_primary')}
                </Button>
              </Link>
              <Link href="/featured-works">
                <Button variant="outline" size="lg" className="text-sm tracking-wide border-white/30 text-white hover:bg-white hover:text-[#00174c]">
                  {t('cta.btn_secondary')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
