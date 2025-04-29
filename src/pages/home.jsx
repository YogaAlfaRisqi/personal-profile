import { Button } from "@/components/ui/button"
import { MoreHorizontal, Video, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto mt-6 rounded-2xl overflow-hidden bg-muted/10 shadow-sm border border-border">
      {/* Header Image */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('src/assets/react.svg')` }}>
        {/* Avatar */}
        <img
          src="src\assets\react.svg"
          alt="Profile"
          className="absolute bottom-[-45px] left-6 w-20 h-20 rounded-full border-4 border-background shadow-md"
        />
      </div>

      {/* Profile Info */}
      <div className="pt-14 px-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold">Yoga Alfa Risqi</h1>
            <p className="text-muted-foreground">I&apos;m a Fullstack App Developer based in Indonesia.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
            {/* <Button variant="outline" size="sm"><Video className="w-4 h-4 mr-1" /> Video call</Button> */}
            <Button variant="secondary" size="sm"><MessageSquare className="w-4 h-4 mr-1" /> Message</Button>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-2">
          <h2 className="font-semibold text-sm mb-1">Experience</h2>
          <p className="text-muted-foreground text-sm">I specialise in UX/UI design, brand strategy, and Webflow development.</p>
        </div>

        {/* About */}
        <div className="mt-6">
          <h2 className="font-semibold text-sm mb-1">About me</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I&apos;m a Product Designer based in Melbourne, Australia. I enjoy working on product design and Webflow projects. I occasionally take on freelance work.
            <br /><br />
            I’ve worked with some of the world’s most exciting companies, including Coinbase, Stripe, and Linear. I’m passionate about helping startups grow, improve their UX and customer experience, and to fundraise through good design.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm text-muted-foreground">
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-white">🇦🇺 Melbourne, AU</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Website</p>
            <a href="https://laylahevans.com" className="hover:underline">laylahevans.com ↗</a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Portfolio</p>
            <a href="https://instagram.com/laylahevans" className="hover:underline">@laylahevans ↗</a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <a href="mailto:hi@laylahevans.com" className="hover:underline">hi@laylahevans.com ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
