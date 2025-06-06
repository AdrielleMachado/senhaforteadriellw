function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
  let senha = '';
  for (let i = 0; i < 12; i++) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[aleatorio];
  }
  document.getElementById('senha').value = senha;
}
