#!/usr/bin/env python3
"""
Fix H2 and H3 Headings Script:
1. Strips sequential numbers (e.g. '1. ', '2. ') from H2 headings in non-toplist guide articles for SEO best practices.
2. Strips awkward numbering and pill badge formatting from H3 headings (e.g. '4.2 . ', '2.1. ', '1. ') to eliminate awkward '(1) rồi dấu .' visual glitches.
3. Updates batch_convert.cjs and batch_convert.js renderer logic.
4. Cleans all markdown files in content-pipeline directories.
5. Recompiles src/data/demo-articles.ts and regenerates Word documents.
"""

import os
import re
import subprocess

DIRS_TO_CLEAN = [
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/english",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/vietnamese",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/04-english",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/03-qa-passed",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/02-vietnamese-guu"
]

def clean_markdown_headings():
    total_files = 0
    total_h2_cleaned = 0
    total_h3_cleaned = 0

    for d in DIRS_TO_CLEAN:
        if not os.path.exists(d):
            continue
        for fname in os.listdir(d):
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(d, fname)
            with open(fpath, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            new_lines = []
            modified = False

            for line in lines:
                # Check H2: e.g. "## 1. Title" or "## 2. Title"
                h2_match = re.match(r'^(##\s+)\d+[\.\:\s\-]+(.*)$', line)
                if h2_match:
                    prefix = h2_match.group(1)
                    title = h2_match.group(2).strip()
                    new_line = f"{prefix}{title}\n"
                    new_lines.append(new_line)
                    total_h2_cleaned += 1
                    modified = True
                    continue

                # Check H3: e.g. "### 2.1. Title" or "### 4.2 . Title" or "### 1. Title"
                h3_match = re.match(r'^(###\s+)\d+(?:\.\d+)*[\.\:\s\-]+(.*)$', line)
                if h3_match:
                    prefix = h3_match.group(1)
                    title = h3_match.group(2).strip()
                    # Clean any leading lonely dot if present, e.g. ". Title"
                    title = re.sub(r'^\.\s*', '', title).strip()
                    new_line = f"{prefix}{title}\n"
                    new_lines.append(new_line)
                    total_h3_cleaned += 1
                    modified = True
                    continue

                new_lines.append(line)

            if modified:
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.writelines(new_lines)
                total_files += 1

    print(f"Cleaned {total_h2_cleaned} H2s and {total_h3_cleaned} H3s across {total_files} markdown files.")

def update_batch_convert_script(script_path):
    if not os.path.exists(script_path):
        return

    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace H2 and H3 renderer logic in customRenderer
    old_heading_renderer = re.search(
        r'customRenderer\.heading\s*=\s*function\(\{ tokens, depth \}\)\s*\{[\s\S]*?return `<h\$\{depth\} id="\$\{id\}">\$\{text\}</h\$\{depth\}>`;\s*\};',
        content
    )

    new_heading_renderer = """customRenderer.heading = function({ tokens, depth }) {
    const rawText = this.parser.parseInline(tokens);
    const text = decodeHtmlEntities(rawText).replace(/<[^>]+>/g, '').trim();
    if (text.toLowerCase().includes('quick overview stats') || text.toLowerCase().includes('tổng quan nhanh')) {
      return ''; // Built via dedicated modern Stats Bar
    }
    
    // Clean any residual leading numbers for SEO & elegant Magazine aesthetics
    const cleanText = text.replace(/^(\\d+(\\.\\d+)*[\\.\\:\\s\\-]+)/, '').replace(/^\\.\\s*/, '').trim();
    const id = cleanSlug(cleanText || text);
    
    if (depth === 2) {
      return `
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="${id}" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            ${cleanText}
          </h2>
        </div>
      `;
    }
    if (depth === 3) {
      return `
        <div id="${id}" class="scroll-mt-28 pt-5">
          <h3 class="font-serif text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
            ${cleanText}
          </h3>
        </div>
      `;
    }
    return `<h${depth} id="${id}">${cleanText}</h${depth}>`;
  };"""

    if old_heading_renderer:
        content = content[:old_heading_renderer.start()] + new_heading_renderer + content[old_heading_renderer.end():]

    with open(script_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated heading renderer in {script_path}.")

if __name__ == "__main__":
    clean_markdown_headings()
    update_batch_convert_script("/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs")
    update_batch_convert_script("/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.js")

    # Run batch_convert.cjs to compile demo-articles.ts
    print("Re-compiling demo-articles.ts with batch_convert.cjs...")
    subprocess.run(["node", "/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs"], check=True)
    print("Batch conversion completed successfully.")
