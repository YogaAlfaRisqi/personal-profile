import { MoreHorizontal, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
     <div className="header">
       {/* Header Image */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('src/assets/images/banner.jpg')` }}
      >
        {/* Avatar */}
        <img
          src="src\assets\images\profile.jpg"
          alt="Profile"
          className="absolute bottom-[-45px] left-6 w-20 h-20 rounded-full border-4 border-background shadow-md"
        />
      </div>

      {/* Profile Info */}
      <div className="pt-14 px-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold">Yoga Alfa Risqi</h1>
            <p className="text-muted-foreground">
              I&apos;m a Fullstack App Developer based in Indonesia.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
            {/* <Button variant="outline" size="sm"><Video className="w-4 h-4 mr-1" /> Video call</Button> */}
            <Button variant="secondary" size="sm">
              <MessageSquare className="w-4 h-4 mr-1" /> Hire Me
            </Button>
          </div>
        </div>
        </div>
     </div>
  );
}