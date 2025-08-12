"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onLanguageChange(language === "en" ? "no" : "en")}
      className="h-9 px-3 gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "en" ? "NO" : "EN"}</span>
    </Button>
  )
}
