// utils/flatten.ts
export function flatten(nav: any[]): any[] {
  return nav.flatMap((item) => {
    if (item.items) {
      return flatten(item.items); // recurse into children
    } else if (item.href) {
      return [item]; // only return items with an href
    }
    return []; // ignore anything without href or items
  });
}
