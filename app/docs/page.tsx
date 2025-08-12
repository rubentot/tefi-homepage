"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Target, Workflow, Building2, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  const [language, setLanguage] = useState<"en" | "no">("en")

  const content = {
    en: {
      title: "Technical Documentation",
      subtitle: "Comprehensive development roadmap and technical specifications",
      backToHome: "Back to Home",
      sections: {
        summary: {
          title: "Executive Summary",
          content:
            'Tefi is designed to streamline the real estate bidding process in Norway by integrating with finn.no and partnering with banks. This roadmap outlines our strategy to enable bidders to start bids via finn.no\'s "gi bud" button, redirecting them to Tefi for verification, and implement an SMS-based verification system to confirm bids.',
        },
        goals: {
          title: "Business Goals",
          items: [
            {
              icon: Target,
              title: "Market Penetration",
              description: "Leverage finn.no's large user base and bank partnerships to attract bidders.",
            },
            {
              icon: Workflow,
              title: "Automation & UX",
              description:
                "Partner with banks to automate financing verification, eliminating manual uploads and reducing friction.",
            },
            {
              icon: Shield,
              title: "Trust & Security",
              description: "Use SMS verification to ensure bid legitimacy, reduce fraud, and build confidence.",
            },
            {
              icon: TrendingUp,
              title: "Scalability",
              description:
                "Build flexible infrastructure supporting multiple bidders, properties, and automated loan checks.",
            },
          ],
        },
        workflow: {
          title: "Core Workflow",
          steps: [
            {
              step: "1",
              title: "Bid Initiation",
              description: "Finn.no redirects with property ID to Tefi",
            },
            {
              step: "2",
              title: "Verification",
              description: "Tefi checks financing through bank API or manual upload",
            },
            {
              step: "3",
              title: "Notification",
              description: "SMS with unique code sent for bid confirmation",
            },
            {
              step: "4",
              title: "Confirmation",
              description: "Bidder enters code to confirm bid status",
            },
          ],
        },
        partnerships: {
          title: "Bank Partnerships",
          content:
            "Partnerships with banks provide access to dedicated APIs under PSD2 regulations. These APIs enable real-time verification of financing amounts with user consent via BankID. This automation replaces manual uploads with accurate, fast, and compliant verification processes.",
        },
        development: {
          title: "Development Steps",
          steps: [
            'Partnership with Finn.no: Apply and integrate Finn.no\'s API for "gi bud" redirects',
            "Bank API Integration: Negotiate and build API connections for automated financing checks",
            "Database Setup: Store property-bidder mappings and verification codes securely",
            "Backend Development: Build APIs for SMS sending, financing verification, and code generation",
            "Frontend Development: Handle redirects and provide user-friendly interface",
            "Bidder Verification Interface: Create secure page for code input and bid confirmation",
            "Testing & Deployment: Thorough testing to ensure robust production-ready system",
          ],
        },
        enhancements: {
          title: "Future Enhancements",
          items: [
            "Expand partnerships with more banks for broader API coverage",
            "Add analytics to track bid success rates and investor insights",
            "Implement advanced fraud detection algorithms",
            "Develop mobile applications for iOS and Android",
          ],
        },
      },
    },
    no: {
      title: "Teknisk Dokumentasjon",
      subtitle: "Omfattende utviklingsplan og tekniske spesifikasjoner",
      backToHome: "Tilbake til Hjem",
      sections: {
        summary: {
          title: "Sammendrag",
          content:
            'Tefi er designet for å effektivisere budprosessen i eiendomsmarkedet i Norge ved å integrere med finn.no og samarbeide med banker. Denne planen beskriver vår strategi for å la budgivere starte bud via finn.no\'s "gi bud" knapp, omdirigere dem til Tefi for verifisering, og implementere et SMS-basert verifiseringssystem.',
        },
        goals: {
          title: "Forretningsmål",
          items: [
            {
              icon: Target,
              title: "Markedspenetrasjon",
              description: "Utnytte finn.no's store brukerbase og bankpartnerskap for å tiltrekke budgivere.",
            },
            {
              icon: Workflow,
              title: "Automatisering & UX",
              description: "Samarbeide med banker for å automatisere finansieringsverifisering og redusere friksjon.",
            },
            {
              icon: Shield,
              title: "Tillit & Sikkerhet",
              description: "Bruke SMS-verifisering for å sikre budlegitimitet, redusere svindel og bygge tillit.",
            },
            {
              icon: TrendingUp,
              title: "Skalerbarhet",
              description:
                "Bygge fleksibel infrastruktur som støtter flere budgivere, eiendommer og automatiserte lånsjekker.",
            },
          ],
        },
        workflow: {
          title: "Arbeidsflyt",
          steps: [
            {
              step: "1",
              title: "Budinitiering",
              description: "Finn.no omdirigerer med eiendoms-ID til Tefi",
            },
            {
              step: "2",
              title: "Verifisering",
              description: "Tefi sjekker finansiering gjennom bank-API eller manuell opplasting",
            },
            {
              step: "3",
              title: "Varsling",
              description: "SMS med unik kode sendes for budbekreftelse",
            },
            {
              step: "4",
              title: "Bekreftelse",
              description: "Budgiver legger inn kode for å bekrefte budstatus",
            },
          ],
        },
        partnerships: {
          title: "Bankpartnerskap",
          content:
            "Partnerskap med banker gir tilgang til dedikerte API-er under PSD2-regelverket. Disse API-ene muliggjør sanntidsverifisering av finansieringsbeløp med brukersamtykke via BankID. Denne automatiseringen erstatter manuelle opplastinger med nøyaktige, raske og regelverkskompatible verifiseringsprosesser.",
        },
        development: {
          title: "Utviklingssteg",
          steps: [
            'Partnerskap med Finn.no: Søke og integrere Finn.no\'s API for "gi bud" omdirigeringer',
            "Bank API-integrasjon: Forhandle og bygge API-tilkoblinger for automatiserte finansieringsjekker",
            "Database-oppsett: Lagre eiendom-budgiver-koblinger og verifiseringskoder sikkert",
            "Backend-utvikling: Bygge API-er for SMS-sending, finansieringsverifisering og kodegenerering",
            "Frontend-utvikling: Håndtere omdirigeringer og gi brukervennlig grensesnitt",
            "Budgiver-verifiseringsgrensesnitt: Lage sikker side for kodeinntasting og budbekreftelse",
            "Testing og distribusjon: Grundig testing for å sikre robust produksjonsklart system",
          ],
        },
        enhancements: {
          title: "Fremtidige Forbedringer",
          items: [
            "Utvide partnerskap med flere banker for bredere API-dekning",
            "Legge til analyser for å spore budsuksessrater og investorinnsikt",
            "Implementere avanserte svindeldeteksjonsalgoritmer",
            "Utvikle mobilapplikasjoner for iOS og Android",
          ],
        },
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {currentContent.backToHome}
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === "no" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("no")}
                className="text-xs"
              >
                NO
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{currentContent.title}</h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{currentContent.subtitle}</p>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">
              {currentContent.sections.summary.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentContent.sections.summary.content}
            </p>
          </CardContent>
        </Card>

        {/* Business Goals */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">{currentContent.sections.goals.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {currentContent.sections.goals.items.map((goal, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <goal.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{goal.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Workflow */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">
              {currentContent.sections.workflow.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentContent.sections.workflow.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{step.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bank Partnerships */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Building2 className="w-5 h-5" />
              {currentContent.sections.partnerships.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentContent.sections.partnerships.content}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">PSD2 Compliance</Badge>
              <Badge variant="secondary">BankID Integration</Badge>
              <Badge variant="secondary">Real-time Verification</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Development Steps */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">
              {currentContent.sections.development.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentContent.sections.development.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Enhancements */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">
              {currentContent.sections.enhancements.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {currentContent.sections.enhancements.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
