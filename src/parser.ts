export function extractValueFromXml(
  xmlString: string, 
  key: string, 
  options?: { nested?: boolean }
): string | null {
  const normalizedXml = xmlString.replace(/\s+/g, ' ').trim();

  if (!options?.nested) {
    const regex = new RegExp(`<${key}>(.*?)<\/${key}>`, 'i');
    const match = normalizedXml.match(regex);
    return match ? match[1].trim() : null;
  }

  const startTag = `<${key}>`;
  const endTag = `</${key}>`;
  const startIdx = normalizedXml.indexOf(startTag);
  
  if (startIdx === -1) return null;

  let depth = 1;
  let endIdx = startIdx + startTag.length;

  while (depth > 0 && endIdx < normalizedXml.length) {
    const nextOpen = normalizedXml.indexOf(`<${key}>`, endIdx);
    const nextClose = normalizedXml.indexOf(endTag, endIdx);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      endIdx = nextOpen + startTag.length;
    } else {
      depth--;
      endIdx = nextClose + endTag.length;
    }
  }

  return normalizedXml.slice(
    startIdx + startTag.length,
    endIdx - endTag.length
  ).trim();
}