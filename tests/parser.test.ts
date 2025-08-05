import { extractValueFromXml } from '../src/parser';
import { describe, expect, test } from '@jest/globals';

describe('parseXml', () => {
  test('Extrai valor de tag simples', () => {
    const xml = '<nome>João</nome>';
    expect(extractValueFromXml(xml, 'nome')).toBe('João');
  });

  test('Retorna null para tag inexistente', () => {
    const xml = '<root></root>';
    expect(extractValueFromXml(xml, 'nome')).toBeNull();
  });
});