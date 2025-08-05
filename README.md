# 📄 copy-from-xml  

**Extract values from XML files or strings with a simple API**  

```bash
npm install copy-from-xml
```

# Features

**Extract values from XML strings, Buffers, or file paths**

- Supports nested XML structures
- Zero dependencies (100% native Node.js)
- TypeScript support out of the box

# Usage

**1. Basic Extraction**

```typescript
import { copyFromXml } from 'copy-from-xml';

const xml = '<user><name>My Name</name></user>';

// Extract simple values  
copyFromXml(xml, 'name'); // Returns: "My Name"  
```

**2. Read from Files**

```typescript
// File: data.xml  
// <config><api-key>12345</api-key></config>  

copyFromXml('./data.xml', 'api-key'); // Returns: "12345"  
```

***3. Nested XML***

```typescript
const nestedXml = `
  <root>
    <credentials>
      <user>admin</user>
      <pass>s3cr3t</pass>
    </credentials>
  </root>
`;

// Extract nested blocks  
copyFromXml(nestedXml, 'credentials', { nested: true });  
/* Returns: 
  `<user>admin</user><pass>s3cr3t</pass>` 
*/
```

***4. Buffer Support***

```typescript
const buffer = Buffer.from('<log><entry>test</entry></log>');  
copyFromXml(buffer, 'entry'); // Returns: "test"
```

## API Reference

### `copyFromXml(input, key, options?)`

| Param    | Type                         | Description                                      |
|----------|------------------------------|--------------------------------------------------|
| `input`  | `string` \| `Buffer`         | XML string, file path, or Buffer                 |
| `key`    | `string`                     | XML tag to extract                               |
| `options`| `{ nested?: boolean }`       | Returns full nested XML when `true`              |

**Returns:** `string` \| `null`
