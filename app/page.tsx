"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Users, Shield, Zap, TrendingUp } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useState } from "react"

const translations = {
  en: {
    nav: {
      about: "About",
      solution: "Solution",
      roadmap: "Roadmap",
      docs: "Documentation",
      contact: "Contact Us",
    },
    hero: {
      title: "Revolutionizing Real Estate Bidding in Norway",
      subtitle: "Transforming property transactions through technology, automation, and verified trust systems",
      partnerBtn: "Partner With Us",
      roadmapBtn: "View Roadmap",
    },
    about: {
      title: "Meet the Founders",
      subtitle: "Two visionaries combining real estate expertise with technology to solve Norway's bidding challenges",
      marcus: {
        name: "Marcus Atrar",
        role: "Co-Founder & Real Estate Expert",
        description:
          "Experienced real estate agent who identified critical inefficiencies in Norway's current bidding process. Marcus brings deep market knowledge and firsthand understanding of the pain points that both buyers and sellers face in today's market.",
      },
      ruben: {
        name: "Ruben Tötterman",
        role: "Co-Founder",
        description:
          "Visionary technologist. Ruben architects the sophisticated systems that integrate with Finn.no, banking partners, and verification services to create seamless, trustworthy bidding experiences.",
      },
      whyTitle: "Why Tefi Exists",
      whyDescription:
        "Our goal is to change the bidding process, as it suffers from inefficiencies, lack of transparency, and trust issues. Tefi eliminates these problems through automation, verification, and seamless integration with existing platforms, creating a more efficient and trustworthy marketplace for all participants.",
    },
    solution: {
      title: "Our Technology Solution",
      subtitle:
        "Comprehensive platform integrating with Norway's real estate ecosystem to streamline and secure the bidding process",
      finn: {
        title: "Finn.no Integration",
        description:
          "Seamless connection with Norway's largest property platform for real-time listings and automated bid processing",
      },
      bank: {
        title: "Bank Partnerships",
        description:
          "Direct integration with major Norwegian banks for instant financing verification and secure transaction processing",
      },
      sms: {
        title: "SMS Verification",
        description:
          "Multi-layer identity verification system ensuring all participants are legitimate and qualified bidders",
      },
      investmentTitle: "Investment Opportunity",
      forUsers: "For Users",
      forInvestors: "For Investors",
      userBenefits: [
        "Transparent, real-time bidding process",
        "Reduced transaction times and costs",
        "Enhanced security and trust",
        "Streamlined financing verification",
      ],
      investorBenefits: [
        "Massive addressable market in Norway",
        "Scalable technology platform",
        "Strong partnerships with key players",
        "Experienced founding team",
      ],
    },
    roadmap: {
      title: "Our Roadmap",
      subtitle: "Strategic milestones for transforming Norway's real estate market",
      phases: {
        mvp: {
          status: "CURRENT",
          title: "MVP Development",
          description: "Building core platform with Finn.no integration and basic bidding functionality",
          tags: ["API Integration", "User Interface", "Security Framework"],
        },
        banking: {
          status: "NEXT",
          title: "Banking Partnerships",
          description:
            "Secure partnerships with major Norwegian banks for financing verification and payment processing",
          tags: ["Bank Integration", "Financial Partners", "Payment Gateway"],
        },
        beta: {
          status: "PHASE 3",
          title: "Beta Launch",
          description: "Limited beta release with select real estate agencies and verified users in Oslo region",
          tags: ["User Testing", "Agency Onboarding", "Feedback Loop"],
        },
        national: {
          status: "PHASE 4",
          title: "National Rollout",
          description: "Full platform launch across Norway with advanced features and comprehensive market coverage",
          tags: ["Nationwide Launch", "Mobile App", "AI Features"],
        },
        nordic: {
          status: "FUTURE",
          title: "Nordic Expansion",
          description:
            "Expand platform to Sweden, Denmark, and Finland, establishing Tefi as the Nordic real estate tech leader",
          tags: ["Sweden Launch", "Denmark Entry", "Finland Market"],
        },
      },
    },
    cta: {
      title: "Ready to Transform Real Estate?",
      subtitle:
        "Join us in revolutionizing Norway's real estate market. Connect with our team to explore investment opportunities and partnership possibilities.",
      meetingBtn: "Request Meeting",
      contact: "Contact: rubenmain@tutamail.com",
    },
  },
  no: {
    nav: {
      about: "Om Oss",
      solution: "Løsning",
      roadmap: "Veikart",
      docs: "Dokumentasjon",
      contact: "Kontakt Oss",
    },
    hero: {
      title: "Revolusjonerer Eiendomsbudgivning i Norge",
      subtitle: "Transformerer eiendomstransaksjoner gjennom teknologi, automatisering og verifiserte tillitssystemer",
      partnerBtn: "Bli Partner",
      roadmapBtn: "Se Veikart",
    },
    about: {
      title: "Møt Grunnleggerne",
      subtitle: "To visjonærer som kombinerer eiendomsekspertise med teknologi for å løse Norges budutfordringer",
      marcus: {
        name: "Marcus Atrar",
        role: "Medgrunnlegger & Eiendomsekspert",
        description:
          "Erfaren eiendomsmegler som identifiserte kritiske ineffektivitet i Norges nåværende budprosess. Marcus bringer dyp markedskunnskap og førstehånds forståelse av smertepunktene som både kjøpere og selgere møter i dagens marked.",
      },
      ruben: {
        name: "Ruben Tötterman",
        role: "Medgrunnlegger & Hovedutvikler",
        description:
          "Visjonær teknolog. Ruben arkitekterer de sofistikerte systemene som integreres med Finn.no, bankpartnere og verifikasjonstjenester for å skape sømløse, pålitelige budopplevelser.",
      },
      whyTitle: "Hvorfor Tefi Eksisterer",
      whyDescription:
        "Norges eiendomsmarked lider av ineffektivitet, mangel på åpenhet og tillitsproblemer i budprosessen. Tefi eliminerer disse problemene gjennom automatisering, verifisering og sømløs integrasjon med eksisterende plattformer, og skaper en mer effektiv og pålitelig markedsplass for alle deltakere.",
    },
    solution: {
      title: "Vår Teknologiløsning",
      subtitle:
        "Omfattende plattform som integreres med Norges eiendomsøkosystem for å strømlinjeforme og sikre budprosessen",
      finn: {
        title: "Finn.no Integrasjon",
        description:
          "Sømløs tilkobling med Norges største eiendomsplattform for sanntidsoppføringer og automatisert budbehandling",
      },
      bank: {
        title: "Bankpartnerskap",
        description:
          "Direkte integrasjon med store norske banker for øyeblikkelig finansieringsverifisering og sikker transaksjonsbehandling",
      },
      sms: {
        title: "SMS Verifisering",
        description:
          "Flerlags identitetsverifikasjonssystem som sikrer at alle deltakere er legitime og kvalifiserte budgivere",
      },
      investmentTitle: "Investeringsmulighet",
      forUsers: "For Brukere",
      forInvestors: "For Investorer",
      userBenefits: [
        "Transparent, sanntids budprosess",
        "Reduserte transaksjonstider og kostnader",
        "Forbedret sikkerhet og tillit",
        "Strømlinjeformet finansieringsverifisering",
      ],
      investorBenefits: [
        "Massivt adresserbart marked i Norge",
        "Skalerbar teknologiplattform",
        "Sterke partnerskap med nøkkelaktører",
        "Erfart grunnleggerteam",
      ],
    },
    roadmap: {
      title: "Vårt Veikart",
      subtitle: "Strategiske milepæler for å transformere Norges eiendomsmarked",
      phases: {
        mvp: {
          status: "NÅVÆRENDE",
          title: "MVP Utvikling",
          description: "Bygger kjerneplattform med Finn.no integrasjon og grunnleggende budfunksjonalitet",
          tags: ["API Integrasjon", "Brukergrensesnitt", "Sikkerhetsrammeverk"],
        },
        banking: {
          status: "NESTE",
          title: "Bankpartnerskap",
          description: "Sikre partnerskap med store norske banker for finansieringsverifisering og betalingsbehandling",
          tags: ["Bankintegrasjon", "Finansielle Partnere", "Betalingsgateway"],
        },
        beta: {
          status: "FASE 3",
          title: "Beta Lansering",
          description: "Begrenset beta-utgivelse med utvalgte eiendomsbyråer og verifiserte brukere i Oslo-regionen",
          tags: ["Brukertesting", "Byrå Onboarding", "Tilbakemeldingsløkke"],
        },
        national: {
          status: "FASE 4",
          title: "Nasjonal Utrulling",
          description: "Full plattformlansering over hele Norge med avanserte funksjoner og omfattende markedsdekning",
          tags: ["Landsomfattende Lansering", "Mobilapp", "AI Funksjoner"],
        },
        nordic: {
          status: "FREMTID",
          title: "Nordisk Ekspansjon",
          description:
            "Utvide plattformen til Sverige, Danmark og Finland, etablere Tefi som den nordiske eiendomsteknologilederen",
          tags: ["Sverige Lansering", "Danmark Inngang", "Finland Marked"],
        },
      },
    },
    cta: {
      title: "Klar til å Transformere Eiendom?",
      subtitle:
        "Bli med oss i å revolusjonere Norges eiendomsmarked. Ta kontakt med teamet vårt for å utforske investeringsmuligheter og partnerskapsmuligheter.",
      meetingBtn: "Be om Møte",
      contact: "Kontakt: rubenmain@tutamail.com",
    },
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "no">("en")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              className="text-xl font-semibold text-slate-900 dark:text-white focus:outline-none"
              aria-label="Go to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Tefi
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#solution"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.nav.solution}
              </a>
              <a
                href="#roadmap"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.nav.roadmap}
              </a>
              <a
                href="/docs"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.nav.docs}
              </a>
              <div className="flex items-center gap-2">
                <LanguageToggle language={language} onLanguageChange={(lang) => setLanguage(lang as "en" | "no")} />
                <ThemeToggle />
              </div>
              <Button
                variant="default"
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-sm"
              >
                <a href="#contact">{t.nav.contact}</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-6 py-2">
              <a href="#contact">{t.hero.partnerBtn}</a>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 border-slate-300 dark:border-slate-600 bg-transparent dark:text-white dark:hover:bg-slate-800"
            >
              <a href="#roadmap">{t.hero.roadmapBtn}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 bg-white dark:bg-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-slate-900 dark:text-white mb-4">{t.about.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-1">{t.about.marcus.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{t.about.marcus.role}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {t.about.marcus.description}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-1">{t.about.ruben.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{t.about.ruben.role}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {t.about.ruben.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-slate-50 dark:bg-slate-700 border-0">
              <CardContent className="p-0">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">{t.about.whyTitle}</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed">
                  {t.about.whyDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="solution" className="py-16 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-slate-900 dark:text-white mb-4">{t.solution.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{t.solution.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-0 text-center">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t.solution.finn.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{t.solution.finn.description}</p>
              </CardContent>
            </Card>

            <Card className="p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-0 text-center">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t.solution.bank.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{t.solution.bank.description}</p>
              </CardContent>
            </Card>

            <Card className="p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-0 text-center">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t.solution.sms.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{t.solution.sms.description}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardContent className="p-0">
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-6 text-center">
                {t.solution.investmentTitle}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">{t.solution.forUsers}</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {t.solution.userBenefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">{t.solution.forInvestors}</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {t.solution.investorBenefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 px-6 bg-white dark:bg-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-slate-900 dark:text-white mb-4">{t.roadmap.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{t.roadmap.subtitle}</p>
          </div>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-[120px] w-0.5 bg-slate-200 dark:bg-slate-600 hidden md:block"></div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {t.roadmap.phases.mvp.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {t.roadmap.phases.mvp.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {t.roadmap.phases.mvp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.roadmap.phases.mvp.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-slate-800"></div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800"></div>
              <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {t.roadmap.phases.banking.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {t.roadmap.phases.banking.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {t.roadmap.phases.banking.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.roadmap.phases.banking.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {t.roadmap.phases.beta.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {t.roadmap.phases.beta.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {t.roadmap.phases.beta.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.roadmap.phases.beta.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-slate-800"></div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>

            {/* Phase 4 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-slate-800"></div>
              <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        {t.roadmap.phases.national.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {t.roadmap.phases.national.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {t.roadmap.phases.national.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.roadmap.phases.national.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {t.roadmap.phases.nordic.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {t.roadmap.phases.nordic.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {t.roadmap.phases.nordic.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.roadmap.phases.nordic.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white dark:border-slate-800"></div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 px-6 bg-slate-900 dark:bg-slate-950 text-white transition-colors">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">{t.cta.title}</h2>
          <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>

          <div className="flex justify-center">
            <a
              href="mailto:rubenmain@tutamail.com?subject=Meeting Request - Tefi&body=Hello, I would like to schedule a meeting to discuss Tefi and potential investment opportunities."
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.cta.meetingBtn}
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 dark:border-slate-700">
            <p className="text-slate-400 text-sm">{t.cta.contact}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
