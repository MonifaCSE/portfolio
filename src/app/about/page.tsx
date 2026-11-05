import type { Metadata } from "next";
import {
  getProfileData,
  getTeachingExperience,
  getProfessionalExperience,
  getEducationList,
  getCredentialsList,
  getSkillsList,
  getSiteData,
} from "@/lib/content";
import { Timeline } from "@/components/ui/Timeline";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { getBasePath } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About",
  description:
    "Web Developer and IT Lecturer based in Chattogram. Read about Monifa Sultana's professional roles, teaching history, education, research, and technical stack.",
};

export default function AboutPage() {
  const profile = getProfileData();
  const teachingExp = getTeachingExperience();
  const professionalExp = getProfessionalExperience();
  const education = getEducationList();
  const credentials = getCredentialsList();
  const skills = getSkillsList();
  const siteData = getSiteData();

  const practicalSkills = skills.filter((s) => s.level === "practical-project");
  const broaderSkills = skills.filter((s) => s.level === "broader-proficiency");

  const researchInterests = ["HAR (Human Activity Recognition)", "AI", "ML", "Deep Learning", "Neural Networks"];

  return (
    <article className="py-12 md:py-20 bg-ink-950 min-h-screen">
      <div className="max-w-content mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 hairline-bottom pb-8">
          <div className="text-xs font-mono tracking-widest text-ember-500 uppercase font-semibold">
            01 — About & Credentials
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-bone leading-tight">
            About {profile.name}
          </h1>
          <p className="text-lg sm:text-xl text-textSoft font-sans max-w-3xl leading-relaxed">
            Web developer by practice. Computer science educator by habit.
          </p>
        </div>

        {/* Main Grid: Sticky Nav (Desktop) + Content Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky Anchor Navigation (Desktop cols 1-3) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-3 font-mono text-xs text-textMute border-l border-ink-700 pl-4">
            <div className="text-bone font-semibold uppercase tracking-wider mb-2">
              On this page
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#summary" className="hover:text-ember-400 transition-colors">
                  01. Summary
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-ember-400 transition-colors">
                  02. Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-ember-400 transition-colors">
                  03. Education
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-ember-400 transition-colors">
                  04. Research & Dissertation
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-ember-400 transition-colors">
                  05. Credentials
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-ember-400 transition-colors">
                  06. Technical Skills
                </a>
              </li>
              <li>
                <a href="#cv-download" className="hover:text-ember-400 transition-colors">
                  07. Download CV
                </a>
              </li>
            </ul>
          </aside>

          {/* Right Content Column (Cols 4-12 on desktop, full width on mobile) */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* 01. Summary */}
            <section id="summary" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Professional Summary
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Secondary Personal Brand Visual */}
                <div className="md:col-span-4 space-y-3">
                  <div className="relative rounded-lg border border-ink-700 bg-ink-850 p-1.5 shadow-xl overflow-hidden group">
                    <img
                      src={`${getBasePath()}/images/monifa-sultana-about.jpg`}
                      alt="Monifa Sultana — Web Developer and IT Lecturer"
                      width={280}
                      height={280}
                      className="w-full aspect-square object-cover object-top rounded-md transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-inset ring-ember-500/20" />
                  </div>
                  <div className="text-center md:text-left px-1">
                    <div className="text-sm font-serif text-bone font-medium">
                      Monifa Sultana
                    </div>
                    <div className="text-xs font-mono text-ember-400">
                      Web Developer & IT Lecturer
                    </div>
                    <div className="text-xs font-mono text-textMute pt-0.5">
                      Chattogram, Bangladesh
                    </div>
                  </div>
                </div>

                {/* Bio Text */}
                <div className="md:col-span-8 space-y-4 text-textSoft leading-relaxed font-sans text-base sm:text-lg">
                  {profile.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* 02. Professional & Academic Timeline */}
            <section id="timeline" className="space-y-8">
              {/* Professional Roles Group */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 hairline-bottom pb-3">
                  <h2 className="text-2xl font-serif text-bone">
                    Professional Role
                  </h2>
                  <Tag variant="accent">Current Professional Position</Tag>
                </div>
                <Timeline entries={professionalExp} />
              </div>

              {/* Teaching & Academic Roles Group */}
              <div className="space-y-4 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-4 hairline-bottom pb-3">
                  <h3 className="text-xl font-serif text-bone">
                    Teaching & Academic Roles
                  </h3>
                  <Tag variant="muted">Teaching & Lab Instruction</Tag>
                </div>
                <p className="text-sm text-textMute font-sans">
                  Academic appointments, lab instructions, and course lecturing since 2022. Software engineering projects are documented separately in the Selected Work section.
                </p>
                <Timeline entries={teachingExp} />
              </div>
            </section>

            {/* 03. Education */}
            <section id="education" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Education & Qualifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-lg border border-ink-700 bg-ink-850 space-y-3"
                  >
                    <div className="text-xs font-mono text-ember-400 font-semibold">
                      {edu.dates}
                    </div>
                    <h3 className="text-lg font-serif text-bone font-medium">
                      {edu.degree}
                    </h3>
                    <div className="text-sm text-textSoft font-sans">
                      {edu.institution}
                    </div>
                    <div className="text-xs font-mono text-bone bg-ink-900 px-2.5 py-1 rounded inline-block border border-ink-700">
                      Result: {edu.result}
                    </div>
                    {edu.details && (
                      <p className="text-xs text-textMute font-sans pt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Research & Dissertation */}
            <section id="research" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Research & Undergraduate Dissertation
              </h2>
              <div className="p-6 sm:p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-4">
                <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold">
                  B.Sc CSE Undergraduate Dissertation
                </div>
                <h3 className="text-xl font-serif text-bone leading-snug">
                  &ldquo;Hybrid Deep Learning approach for smartphone sensor-based activity intensity pattern recognition in prognosis of Insomnia&rdquo;
                </h3>
                <p className="text-sm text-textSoft leading-relaxed font-sans">
                  Submitted as part of B.Sc in Computer Science and Engineering at International Islamic University Chittagong (IIUC). Focuses on feature extraction and neural network classification of accelerometer/gyroscope sensor patterns.
                </p>
                
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-mono text-textMute uppercase">Research Interests</div>
                  <div className="flex flex-wrap gap-2">
                    {researchInterests.map((interest) => (
                      <Tag key={interest} variant="default">
                        {interest}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 05. Credentials & Certifications */}
            <section id="credentials" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Credentials & Professional Certifications
              </h2>
              <div className="space-y-4">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-5 rounded-lg border border-ink-700 bg-ink-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-base font-serif text-bone font-medium">
                        {cred.title}
                      </div>
                      <div className="text-xs font-mono text-textMute">
                        Issued by {cred.issuer}
                      </div>
                    </div>
                    <Tag variant="muted" className="self-start sm:self-auto">
                      Certified
                    </Tag>
                  </div>
                ))}
              </div>
            </section>

            {/* 06. Technical Skills with Evidence */}
            <section id="skills" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Technical Skills & Verified Evidence
              </h2>

              <div className="space-y-6">
                {/* Practical Tier */}
                <div className="p-6 rounded-lg border border-ink-700 bg-ink-850 space-y-3">
                  <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold">
                    Tier 1 — Practical Project Tools
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {practicalSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 rounded border border-ink-600 bg-ink-900 text-bone text-xs font-mono"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Broader Tier */}
                <div className="p-6 rounded-lg border border-ink-700 bg-ink-850 space-y-3">
                  <div className="text-xs font-mono text-textMute uppercase tracking-wider font-semibold">
                    Tier 2 — Broader Study & Lab Proficiency
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {broaderSkills.map((skill) => (
                      <Tag key={skill.name} variant="muted">
                        {skill.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 07. Public CV Download */}
            <section id="cv-download" className="space-y-6">
              <h2 className="text-2xl font-serif text-bone hairline-bottom pb-3">
                Curriculum Vitae Download
              </h2>
              <div className="p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif text-bone">
                    Public Edition Curriculum Vitae
                  </h3>
                  <p className="text-xs font-sans text-textMute">
                    Clean web PDF edition omitting referee personal phone numbers and private contact details.
                  </p>
                </div>
                <Button variant="primary" href={siteData.cvLink.href} external showArrow className="shrink-0">
                  Download CV (PDF)
                </Button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </article>
  );
}
