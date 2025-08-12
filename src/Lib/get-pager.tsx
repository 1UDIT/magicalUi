// lib/get-pager.ts 
 
import { docsConfig } from "@/Config/docs";
import { flatten } from "@/utils/flatten";

export function getPagerForDoc(slug: string) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => slug === link?.href
  );

  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  const activeLink = flattenedLinks[activeIndex]

  return {
    prev,
    next,
    activeLink
  };
}
