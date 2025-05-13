import { useState } from "react";
import { Button } from "./ui/button";
import * as React from "react";

export default function Skills() {
  const [skills] = useState([
    {
      id: 1,
      name: "HTML",
      level: "Advanced",
      experience: "3+ years",
      description: "Solid understanding of semantic HTML and accessibility.",
    },
    {
      id: 2,
      name: "CSS",
      level: "Advanced",
      experience: "3+ years",
      description: "Expertise in responsive design, Flexbox, and Grid.",
    },
    {
      id: 3,
      name: "JavaScript",
      level: "Intermediate",
      experience: "2+ years",
      description: "Proficient in ES6+, DOM manipulation, and basic async patterns.",
    },
    {
      id: 4,
      name: "TailwindCSS",
      level: "Intermediate",
      experience: "1.5+ years",
      description: "Efficient in utility-first styling and customizing themes.",
    },
    {
      id: 4,
      name: "Bootsrapt CSS",
      level: "Intermediate",
      experience: "1.5+ years",
      description: "Efficient in utility-first styling and customizing themes.",
    },
    {
      id: 5,
      name: "React",
      level: "Intermediate",
      experience: "1.5+ years",
      description: "Efficient in utility-first styling and customizing themes.",
    },
    {
      id: 6,
      name: "Laravel",
      level: "Intermediate",
      experience: "1.5+ years",
      description: "Efficient in utility-first styling and customizing themes.",
    },
    {
      id: 7,
      name: "Express.js",
      level: "Intermediate",
      experience: "1.5+ years",
      description: "Efficient in utility-first styling and customizing themes.",
    },
  ]);

  const [isShow, setShow] = React.useState(true);
  const handleToogle = () => {
    setShow(!isShow);
  };

  return (
    <div className="mt-10">
      <Button onClick={handleToogle} className="mb-2">
        {isShow ? "Hide Skills" : "Show Skills"}
      </Button>

      <div className="bg-card border rounded-xl p-4 shadow-sm">
        {isShow && (
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-muted/40 rounded-xl p-4 shadow-inner"
              >
                <h4 className="font-semibold text-base text-foreground">
                  {skill.name}
                </h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>Level: {skill.level}</span>
                  <span>Experience: {skill.experience}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
