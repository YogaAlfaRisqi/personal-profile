import Header from "@/components/header";
import ProjectShowcase from "@/components/project-showcase";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 rounded-2xl bg-muted/10 shadow-sm border border-border">
      <Header />

      {/* About Section */}
      <div className="px-4 py-6 sm:px-6">
        <h2 className="font-semibold text-sm mb-2">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-2/3">
          {/* Bio Text */}
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a fresh graduate of Informatics from Universitas Mercu Buana Yogyakarta with expertise in system development, data analysis, and business process digitization. Proficient in React, Laravel, MySQL, PostgreSQL, Tailwind CSS, and more. Experienced in e-commerce and company profile website development. Certified in Microsoft Azure AI Fundamentals. I’m ambitious to grow in innovative web and mobile app development and contribute to digital innovation at PT Bukit Asam Tbk.
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 gap-x-30 text-sm text-muted-foreground w-full lg:w-1/3">
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p>Indonesia</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Website</p>
              <a href="https://laylahevans.com" className="hover:underline">
                laylahevans.com ↗
              </a>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Github</p>
              <a
                href="https://github.com/YogaAlfaRisqi"
                className="hover:underline"
              >
                YogaAlfaRisqi ↗
              </a>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a
                href="mailto:yogariysqi3@gmail.com"
                className="hover:underline"
              >
                yogariysqi3@gmail.com ↗
              </a>
            </div>
          </div>
      
        </div>

        {/* Experience */}
        <div className="mt-10">
          <h2 className="font-semibold text-sm mb-1">Experience</h2>
          <p className="text-muted-foreground text-sm">
            I specialise in UX/UI design, brand strategy, and Webflow development.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="px-4 sm:px-6">
        <Skills />
      </div>

      {/* Projects Section */}
      <div className="px-4 sm:px-6 py-6">
        <ProjectShowcase />
      </div>
    </div>
  );
}
