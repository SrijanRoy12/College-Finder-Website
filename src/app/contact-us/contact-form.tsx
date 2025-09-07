"use client"

import { useState } from "react"
import { CheckCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectGroup, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduationYear: "",
    interestedProgram: "",
    message: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log(formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
        <p className="text-lg text-gray-600">Thank you for your interest. We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="graduationYear">Expected Graduation Year</Label>
          <Select
            name="graduationYear"
            required
            value={formData.graduationYear}
            onValueChange={(value) =>
                handleChange({
                target: { name: "graduationYear", value },
                } as React.ChangeEvent<HTMLInputElement>) 
            }
            >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="interestedProgram">Interested Program</Label>
        <Select
          name="interestedProgram"
          required
          value={formData.interestedProgram}
          onValueChange={(value) => handleChange({ target: { name: "interestedProgram", value } } as  React.ChangeEvent<HTMLInputElement>)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Program" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      <div className="flex items-center">
        <Checkbox id="terms" checked={formData.termsAccepted} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="terms" className="ml-2 text-sm text-gray-700">
          I have read and agree to the Terms and Conditions
        </Label>
      </div>
      <Button type="submit" className="w-full" disabled={!formData.termsAccepted}>
        Apply Now
      </Button>
    </form>
  )
}

