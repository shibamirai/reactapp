import { JSX, useState } from 'react';
import { Head } from '@inertiajs/react';

export default function Hello(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Hello!!');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessage('こんにちは、' + inputValue + 'さん！');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Head title="Hello" />
      <h1 style={{
        fontSize: '30px', paddingBottom: '10px'
      }}>Hello Page</h1>
      <p style={{
        fontSize: '20px'
      }}>{ message }</p>
      <form onSubmit={ handleSubmit } style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
          placeholder="名前を入力"
          style={{
            padding: '8px', fontSize: '16px', width: '300px'
          }}
        />
        <button type="submit" style={{
          padding: '8px 16px', marginLeft: '10px', background: 'blue', color: 'white',
        }}>送信</button>
      </form>
    </div>
  );
}