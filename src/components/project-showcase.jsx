import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "JOYMATH Website",
    description: "Website Pembelajaran",
    image: "src/assets/images/Projek1.png",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with cart and checkout flow.",
    image: "src/assets/images/e-commerce.jpg",
    link: "https://ecommerce-demo-link.com",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page for a product launch.",
    image: "src/assets/images/e-commerce.jpg",
    link: "https://landing-page-link.com",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page for a product launch.",
    image: "src/assets/images/e-commerce.jpg",
    link: "https://landing-page-link.com",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page for a product launch.",
    image: "src/assets/images/e-commerce.jpg",
    link: "https://landing-page-link.com",
  },
];

export default function ProjectShowcase() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-6">Recent Projects</h2>
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
        <div>
            
        </div>
        {/* Projects Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[25%] max-w-sm bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-600 hover:underline"
                >
                  🔗 Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
