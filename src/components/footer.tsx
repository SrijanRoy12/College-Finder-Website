import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        {/* Mobile: Column Layout | Desktop: Grid Layout */}
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:underline">About Us</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:underline">Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:underline">Success Stories</Link></li>
              <li><Link href="/contact-us" className="text-muted-foreground hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:underline">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:underline">Webinars</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:underline">Guides</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-muted-foreground">support@meritnations.com</p>
            <p className="text-muted-foreground">+91 98109-21650</p>
            <p className="text-muted-foreground">P.S. - Abacus, Newtown, Action Area, IIE, Kolkata - 700161, 3rd Floor, Unit - 311</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <form className="space-y-2 flex flex-col items-center lg:items-start">
              <Input type="email" placeholder="Enter your email" className="w-full max-w-sm" />
              <Button className="w-full max-w-sm">Subscribe</Button>
            </form>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">{/* Social Media Icons Here */}</div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2023 MERIT NATIONS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
