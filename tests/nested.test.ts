import { extractValueFromXml } from '../src/parser';
import { describe, expect, test } from '@jest/globals';

describe('extractValueFromXml - Nested Objects', () => {
  const nestedXml = `
    <root>
      <user>
        <name>Fulano</name>
        <age>28</age>
        <address>
          <street>Street Open Source</street>
          <number>123</number>
        </address>
      </user>
    </root>
  `;

  test('Extract nested single tag (name)', () => {
    expect(extractValueFromXml(nestedXml, 'name')).toBe('Fulano');
  });

  test('Extracts tag nested two levels down (street)', () => {
    expect(extractValueFromXml(nestedXml, 'street')).toBe('Street Open Source');
  });

  test('Extracts complete nested XML block (address)', () => {
    const result = extractValueFromXml(nestedXml, 'address', { nested: true });
    expect(result).toContain('<street>Street Open Source</street>');
    expect(result).toContain('<number>123</number>');
  });

  test('Returns null for non-existent tag in nested structure', () => {
    expect(extractValueFromXml(nestedXml, 'country')).toBeNull();
  });
});