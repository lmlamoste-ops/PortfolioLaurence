from pathlib import Path

path = Path(r'c:\Clients\Portfolio_laurence\components\portfolio\projects-section.tsx')
text = path.read_text(encoding='utf-8')
start = text.index('          {projects.map((project, index) => {')
end = text.index('          })}', start) + len('          })}')
replacement = '        <div class="grid md:grid-cols-2 gap-6">\n          {projects.map((project, index) => (\n            <ProjectCard key={project.title} project={project} delay={index * 0.1} />\n          ))}\n        </div>\n'
path.write_text(text[:start] + replacement + text[end:], encoding='utf-8')
print('updated')
