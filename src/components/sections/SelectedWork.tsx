import * as React from "react";
import { Project } from "@/lib/schemas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectFeature } from "@/components/project/ProjectFeature";
import { Reveal } from "@/components/ui/Reveal";

export interface SelectedWorkProps {
  projects: Project[];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects }) => {
  return (
    <section id="work" className="py-20 md:py-28 hairline-bottom bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            index="02"
            label="Selected Work"
            title="Database-driven applications, built for real operations."
            accentWord="real"
            description="Case studies of single-vendor e-commerce, training institute management, and digital agency platforms."
          />

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <ProjectFeature
                key={project.slug}
                project={project}
                index={idx + 1}
              />
            ))}
          </div>

          {/* Closing Notice */}
          <div className="pt-12 text-center text-xs font-mono text-textMute">
            More projects will be added as they&apos;re documented.
          </div>
        </Reveal>
      </div>
    </section>
  );
};
