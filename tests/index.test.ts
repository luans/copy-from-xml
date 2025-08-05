import { copyFromXml } from '../src/index';
import { describe, expect, test } from '@jest/globals';

describe('copyFromXml - Multi Input Types', () => {
  const xmlString = '<root><name>João</name></root>';
  const xmlBuffer = Buffer.from(xmlString);
  const xmlFilePath = '../samples/example.xml';

  test('Accepts XML string directly', () => {
    expect(copyFromXml(xmlString, 'name')).toBe('João');
  });

  test('Accepts Buffer as input', () => {
    expect(copyFromXml(xmlBuffer, 'name')).toBe('João');
  });

  test('Accepts file path', () => {
    expect(copyFromXml(xmlFilePath, 'name')).toBe('João');
  });
});