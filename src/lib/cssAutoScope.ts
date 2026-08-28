/**
 * CSS Auto-Scoping Utility
 * 
 * Takes raw CSS and automatically prefixes all selectors with a scope class.
 * Helps prevent content snippets from polluting global styles.
 */

export function autoScopeCSS(css: string, scopeClass: string): string {
  if (!css || !css.trim()) return '';

  const scopePrefix = scopeClass.startsWith('.') ? scopeClass : `.${scopeClass}`;

  // 1. Remove CSS comments to avoid parsing issues
  let cleanCss = css.replace(/\/\*[\s\S]*?\*\//g, '');

  // 2. Protect @ rules like @media, @keyframes, @font-face
  // We'll extract them, scope their inner rules if necessary, and re-insert
  const atRules: string[] = [];
  cleanCss = cleanCss.replace(/(@[a-zA-Z0-9_-]+[^{]*\{)([\s\S]*?\n?)\s*\}(\s*\})/g, (match, atRuleStart, innerContent, atRuleEnd) => {
    // If it's a media query, we need to scope the rules inside it
    if (atRuleStart.trim().startsWith('@media')) {
      const scopedInner = scopeRules(innerContent, scopePrefix);
      atRules.push(`${atRuleStart}\n${scopedInner}\n}`);
    } else {
      // For @keyframes or others, leave as is
      atRules.push(match);
    }
    return `__AT_RULE_${atRules.length - 1}__`;
  });

  // Also handle simple at-rules that don't have nested blocks just in case
  cleanCss = cleanCss.replace(/@[a-zA-Z0-9_-]+[^{]*\{[\s\S]*?\}/g, (match) => {
     if (match.startsWith('@media')) return match; // Already handled above
     atRules.push(match);
     return `__AT_RULE_${atRules.length - 1}__`;
  });

  // 3. Scope normal rules
  let scopedCss = scopeRules(cleanCss, scopePrefix);

  // 4. Re-insert @ rules
  scopedCss = scopedCss.replace(/__AT_RULE_(\d+)__/g, (_, index) => {
    return atRules[parseInt(index, 10)];
  });

  return scopedCss;
}

function scopeRules(cssText: string, scopePrefix: string): string {
  // Regex to match a CSS rule set: selectors { declarations }
  return cssText.replace(/([^{]+)\s*\{([^}]*)\}/g, (match, selectorsRaw, declarations) => {
    // Process selectors
    const selectors = selectorsRaw.split(',').map((s: string) => s.trim()).filter(Boolean);
    
    const scopedSelectors = selectors.map((selector: string) => {
      // Skip styling root/dangerous elements directly
      if (/^(body|html|\*|:root)$/i.test(selector)) {
        return `${scopePrefix}`; // Replace with scope to neutralize
      }
      
      // If selector already contains the scope prefix, leave it
      if (selector.includes(scopePrefix)) {
         return selector;
      }

      // Add scope prefix
      // Handle pseudo-classes like :hover on the scope itself if needed, but normally just prepend
      return `${scopePrefix} ${selector}`;
    });

    return `${scopedSelectors.join(', ')} {\n${declarations}\n}`;
  });
}
