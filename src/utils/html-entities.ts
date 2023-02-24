import entities from "./html-entities.json";

export function namedEntityToHexCode(html: string): string {
  return html.replace(/&([a-z0-9]{2,8});/gi, (match, p1) => {
    const anyEntities = entities as any;
    if (anyEntities[p1]) {
      return `&#${anyEntities[p1]};`;
    }
    return match;
  });
}
