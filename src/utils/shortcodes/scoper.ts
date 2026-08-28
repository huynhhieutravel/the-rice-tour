import { compile, serialize, stringify, middleware, prefixer } from 'stylis';

/**
 * Scopes raw CSS to a specific wrapper class using Stylis.
 * E.g., `.title { color: red; }` -> `.snippet-slug .title { color: red; }`
 */
export function scopeCss(css: string, slug: string): string {
  if (!css || !css.trim()) return '';
  const wrapperClass = `.snippet-${slug}`;
  const wrappedCss = `${wrapperClass} { ${css} }`;
  return serialize(compile(wrappedCss), middleware([prefixer, stringify]));
}
