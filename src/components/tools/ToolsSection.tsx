import React from 'react';
import { SKILLS } from '../../data/portfolio';
import { ToolCategory } from './ToolCategory';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-16 px-6 bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[0.7rem] font-bold text-primary uppercase tracking-[0.2em] mb-4">Tech Stack</h2>
          <h3 className="text-4xl font-sans font-extrabold tracking-tight text-text-main">Tools & EcoSystem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <ToolCategory category={SKILLS.tools[0].category} items={SKILLS.tools[0].items} />
          <ToolCategory category={SKILLS.tools[1].category} items={SKILLS.tools[1].items} />
          <ToolCategory category={SKILLS.tools[5].category} items={SKILLS.tools[5].items} />

          {/* Row 2 */}
          <ToolCategory category={SKILLS.tools[2].category} items={SKILLS.tools[2].items} />
          <ToolCategory category={SKILLS.tools[3].category} items={SKILLS.tools[3].items} />
          <ToolCategory category={SKILLS.tools[6].category} items={SKILLS.tools[6].items} />

          {/* Row 3 */}
          <ToolCategory category={SKILLS.tools[4].category} items={SKILLS.tools[4].items} />
          <ToolCategory category={SKILLS.tools[7].category} items={SKILLS.tools[7].items} />
          <ToolCategory category={SKILLS.tools[8].category} items={SKILLS.tools[8].items} />
        </div>

        <div className="mt-14 text-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent mx-auto mb-8" />
          <p className="text-text-dim italic font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            “{SKILLS.quote}”
          </p>
        </div>
      </div>
    </section>
  );
};
