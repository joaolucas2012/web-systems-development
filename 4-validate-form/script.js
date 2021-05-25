/* Escreva funções JavaScript para validar a entrada de dados:
 a)Valide o campo idade: só pode conter números entre 10 e 90
 b) Valide o email, obrigando que a string contenha o símbolo de “@”
 c) Valide os check boxes, permitindo que no máximo 3 opções possam ser selecionadas
 Exiba mensagem de sucesso quando os dados forem válidos. */

// Pegando dados do formulário e checkbox
const formulario = document.getElementById("registraUsuario");
const languages = document.getElementsByName("linguagens");

// Adicionando eventos de clique a cada uma das checked options do checkbox
for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener("click", () => {
    checkCounter(i);
  });
}

/* Validação do formulário */
formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let usuario = new Object();
  const nome = validateName(document.getElementsByName("firstName")[0].value);
  const idade = validateAge(
    parseInt(document.getElementsByName("lastName")[0].value)
  );
  const email = validateEmail(document.getElementsByName("email")[0].value);
  const frequencyChosen = checkFrequency(document.getElementsByName("notify"));
  const languagesChosen = getLanguages();

  if (nome !== false && idade !== false && email !== false) {
    usuario = {
      nome,
      idade,
      email,
      linguagens: languagesChosen,
      frequencia: frequencyChosen,
    };

    console.log(usuario);

    formulario.submit();
    alert(`
    Usuário registrado com sucesso!
    
    Dados do usuário:
    Nome: ${usuario.nome}
    Idade: ${usuario.idade} anos
    Email: ${usuario.email}
    Linguagens: ${usuario.linguagens}
    Frequência das notificações: ${usuario.frequencia}
    `);
  } else {
    alert("Digite todos os dados corretamente!");
  }
});

/* Funções */
// Validar o nome
function validateName(name) {
  if (name.length === 0) {
    alert("O nome é obrigatório!");
    document.getElementsByName("firstName")[0].value = "";
    return false;
  }
  if (isNaN(name) !== true) {
    alert("O nome não pode ser um número!");
    document.getElementsByName("firstName")[0].value = "";
    return false;
  }
  return name;
}

// Validar a idade
function validateAge(age) {
  if (age > 10 && age < 90) {
    return age;
  } else {
    alert("A idade precisa estar entre 10 e 90 anos");
    document.getElementsByName("lastName")[0].value = "";
    return false;
  }
}

// Validar email 
function validateEmail(email) {
  if (email.indexOf("@") !== -1) {
    return email;
  } else {
    alert("Email inválido!");
    document.getElementsByName("email")[0].value = "";
    return false;
  }
}

// Validar frequência
function checkFrequency(freq) {
  for (let i = 0; i < freq.length; i++) {
    if (freq[i].checked) {
      return freq[i].value;
    }
  }
}

// Validar os checks do checkbox 
function checkCounter(index) {
  let counter = 0;
  for (let i = 0; i < languages.length; i++) {
    if (languages[i].checked) {
      counter += 1;
    }
  }
  if (counter > 3) {
    alert("Por favor, selecione apenas 3 linguagens");
    languages[index].checked = false;
    return false;
  }
}

// Pegar uma lista com os itens do checkbox
function getLanguages() {
  const allLanguages = [];
  for (let i = 0; i < languages.length; i++) {
    if (languages[i].checked) {
      allLanguages.push(languages[i].value);
    }
  }
  if (allLanguages.length === 0) {
    return "Não programa em nenhuma linguagem";
  }
  return allLanguages;
}