"use client" // Added use client for context usage

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  Trophy,
  Users,
  Star,
  MapPin,
  ChevronRight,
  UtensilsCrossed,
  ArrowRight,
  Languages,
} from "lucide-react"
import * as motion from "motion/react-client"
import { useLanguage } from "@/lib/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LandingPage() {
  const { language, setLanguage, t, isRTL } = useLanguage()

  return (
    <div
      className={`flex flex-col min-h-screen bg-background font-sans overflow-x-hidden ${isRTL ? "font-arabic" : ""}`}
    >
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Ate Logo" width={40} height={40} className="w-auto h-8" />
            <span className="text-2xl font-bold tracking-tight text-white">ATE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.features}
            </Link>
            <Link href="#gamification" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.rewards}
            </Link>
            <Link href="#restaurants" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.restaurants}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Languages className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-white/10">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="font-bold">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className="font-bold">
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")} className="font-bold font-arabic text-right">
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link href="#download">{t.nav.download}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* ... existing floating elements code ... */}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge
                variant="outline"
                className="mb-6 border-primary/50 text-primary px-4 py-1 rounded-full bg-primary/5 uppercase tracking-widest text-[10px] font-bold"
              >
                {t.hero.tag}
              </Badge>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-balance uppercase leading-[0.9]">
                {t.hero.title.split(".").map((part: string, i: number) => (
                  <span key={i}>
                    {i === 2 ? <span className="text-primary italic">{part}</span> : part}
                    {i < 2 && (
                      <>
                        . <br className="hidden md:block" />
                      </>
                    )}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 text-pretty leading-relaxed"
            >
              {t.hero.description}
            </motion.p>
            {/* ... rest of hero showcase code ... */}
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 bg-card/30 border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-20 ${isRTL ? "text-right" : "text-left"}`}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
                {t.features.dishLevel} <span className="text-primary italic">{t.features.intelligence}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{t.features.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
                  title: t.features.dishReviews.title,
                  description: t.features.dishReviews.description,
                },
                {
                  icon: <ChefHat className="w-8 h-8 text-primary" />,
                  title: t.features.discovery.title,
                  description: t.features.discovery.description,
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: t.features.social.title,
                  description: t.features.social.description,
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    className={`p-8 h-full bg-card border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
                  >
                    <div
                      className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-32 h-32 bg-primary/5 blur-3xl rounded-full ${isRTL ? "-ml-16" : "-mr-16"} -mt-16 group-hover:bg-primary/10 transition-colors`}
                    />
                    <div
                      className={`mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 ${isRTL ? "mr-0 ml-auto" : ""}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gamification Section */}
        <section id="gamification" className="py-32 relative overflow-hidden">
          <div
            className={`container mx-auto px-4 flex flex-col ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-20`}
          >
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <Badge className="bg-primary text-white mb-6 px-4 py-1 rounded-none uppercase font-bold tracking-tighter">
                {t.gamification.tag}
              </Badge>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase">
                {t.gamification.title.split(" ").map((word: string, i: number) => (
                  <span key={i}>
                    {i === 2 ? (
                      <>
                        <br /> <span className="text-primary italic">{word}</span>
                      </>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h2>
              <ul className="space-y-8">
                {[
                  { icon: <Star />, text: t.gamification.points },
                  { icon: <Trophy />, text: t.gamification.levels },
                  { icon: <ChevronRight className={isRTL ? "rotate-180" : ""} />, text: t.gamification.challenges },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`flex items-center gap-4 text-xl font-medium ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span className="p-2 bg-primary/10 rounded-full text-primary">{item.icon}</span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: isRTL ? -5 : 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full max-w-lg lg:max-w-none"
            >
              <div className="bg-primary p-1 rounded-[3rem] shadow-2xl shadow-primary/40 relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className={`absolute -top-12 ${isRTL ? "-left-8" : "-right-8"} bg-black border-4 border-primary p-6 rounded-full z-20`}
                >
                  <Trophy className="w-12 h-12 text-primary" />
                </motion.div>

                <div className="bg-background rounded-[2.8rem] p-12 text-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-50" />
                  <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">{t.gamification.goldLevel}</h3>
                  <p className="text-muted-foreground font-bold mb-10">{t.gamification.goldBadge}</p>
                  <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden mb-6">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                      className="bg-primary h-full shadow-[0_0_20px_rgba(255,0,54,0.5)]"
                    />
                  </div>
                  <div
                    className={`flex justify-between text-sm font-black uppercase tracking-widest text-primary ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span>850 PTS</span>
                    <span>1000 PTS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <div className="py-12 bg-primary border-y-4 border-black overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: isRTL ? ["-50%", "0%"] : ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className={`flex gap-12 items-center text-4xl font-black text-black uppercase tracking-tighter italic ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <span key={i} className={`flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {t.marquee} <ArrowRight className={`w-10 h-10 ${isRTL ? "rotate-180" : ""}`} />
                </span>
              ))}
          </motion.div>
        </div>

        {/* For Restaurants */}
        <section id="restaurants" className="py-32 relative overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                {t.forRestaurants.title.split(" ").map((word: string, i: number) => (
                  <span key={i}>
                    {i === 1 && language === "en" ? (
                      <>
                        <span className="text-primary">{word}</span> <br />
                      </>
                    ) : (
                      word + " "
                    )}
                    {language === "fr" && i === 2 && (
                      <>
                        <span className="text-primary">{word}</span> <br />
                      </>
                    )}
                    {language === "ar" && i === 0 && (
                      <>
                        <span className="text-primary">{word}</span> <br />
                      </>
                    )}
                  </span>
                ))}
              </h2>
              <p className="max-w-3xl mx-auto text-xl md:text-2xl mb-16 text-muted-foreground font-medium">
                {t.forRestaurants.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {t.forRestaurants.tags.map((tag: string, i: number) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#FF0036", color: "#FFFFFF" }}
                  className="bg-white/5 border border-white/10 p-8 rounded-none font-black uppercase tracking-tighter text-xl transition-all cursor-default"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="py-32 border-t border-white/5 bg-gradient-to-b from-background to-black/50 overflow-hidden"
        >
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-black mb-10 tracking-tighter uppercase italic"
            >
              {t.download.ready.split(" ").map((word: string, i: number) => (
                <span key={i}>
                  {word === "Eat?" || word === "manger" || word === "للأكل؟" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word + " "
                  )}
                </span>
              ))}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 md:p-20 bg-card border-2 border-primary/30 relative overflow-hidden group rounded-none">
                {/* ... existing card svg background code ... */}
                <div className="relative z-10">
                  <Badge className="bg-primary text-white mb-10 px-6 py-2 rounded-none font-black text-sm uppercase tracking-widest">
                    {t.download.available}
                  </Badge>
                  <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                    {t.download.version}
                  </h3>
                  <p className="text-2xl text-muted-foreground mb-12 font-medium">{t.download.size}</p>

                 <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-black hover:text-primary hover:border-2 hover:border-primary text-white rounded-none h-20 px-16 text-2xl font-black uppercase tracking-tighter transition-all shadow-[0_20px_40px_rgba(255,0,54,0.3)] hover:shadow-none"
                  >
                    <a
                      href="https://github.com/Ashreeef/ate_website/releases/download/v1.0.0/app-debug.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.download.button}
                    </a>
                  </Button>

                  <div
                    className={`mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-sm font-black uppercase tracking-widest opacity-60 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> {t.download.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" /> {t.download.waitlisted}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-8 ${isRTL ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Image src="/images/logo.svg" alt="Ate Logo" width={30} height={30} />
              <span className="text-xl font-bold text-white uppercase tracking-wider">ATE</span>
            </div>
            <div className={`flex gap-8 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-xs text-muted-foreground/50 italic">© 2025 ATE Social. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
