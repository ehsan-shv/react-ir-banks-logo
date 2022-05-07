# react-ir-banks-logo

<a href="https://www.npmjs.com/package/react-ir-banks-logo"><img src="https://img.shields.io/npm/v/ react-ir-banks-logo.svg" alt="Version"></a>

> A React component that returns logos of Iranian banks based on card number. <a href="https://react-ir-banks-logo-demo.vercel.app/">Demo</a>

## Installation

```
npm i react-ir-banks-logo
```

## Example

```tsx
import { BankIcon } from 'react-ir-banks-logo';

function App() {
  const [digits, setDigits] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="App">
      <input
        type="text"
        value={digits}
        onChange={e => setDigits(e.target.value)}
      />
      <BankIcon
        digits={digits}
        size="200px"
        margin="100px"
        onFindBankName={(name: string) => setName(name)}
      />
      <h1>{name}</h1>
    </div>
  );
}
```

## Props

| Props          | Value Type               | Default Value |
| -------------- | ------------------------ | ------------- |
| digits         | `number /| string`       | is required   |
| size           | `string`                 | '40px'        |
| margin         | `string`                 | '8px'         |
| onFindBankName | `(name: string) => void` | -             |
