document
  .querySelector('.button.js')
  .addEventListener('click', () => {
    alert('Hello from JavaScript');
  });

document
  .querySelector('.button.wasm')
  .addEventListener('click', async () => {
    const wasm = await import('wasm-greet');
    wasm.greet();
  });
