import { extractValueFromXml } from './parser';
import { readFileSync } from 'fs';
import { XmlInput } from './types';
import path from 'path';

export function copyFromXml(
  input: XmlInput | string,
  key: string,
  options?: { nested?: boolean }
): string | null {
  let xmlContent: string;
  
  if (Buffer.isBuffer(input)) {
    xmlContent = input.toString('utf-8');
  } 
  else if (typeof input === 'string' && input.endsWith('.xml')) {
    xmlContent = readFileSync(path.join(__dirname, input), 'utf-8');
  }
  else {
    xmlContent = input;
  }

  return extractValueFromXml(xmlContent, key, options);
}