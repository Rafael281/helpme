const chatCont = document.querySelector("#chatCont");
const chatInput = document.querySelector("#chatInput textarea");
const sendChatBtn = document.querySelector("#chatInput span");

const chatResponses = [
  {
    pattern: /(oi|ol[áa]|o[íi]|oi\s+chatbot|olá\s+bot|e aí|e aew|eae|blz|td|falae)/i,


    response: [
  "Olá! Estou aqui para responder suas perguntas.",
  "Oi! Meu objetivo é fornecer informações e assistência.",
  "Olá, estou disponível para ajudar com suas dúvidas.",
  "Tudo bem! Como posso ser útil a você hoje?",
  "Como vai! Estou aqui para tornar sua experiência mais fácil.",
  "Pode me chamar de helpme ChatBot.",
  "Olá! Sou helpme ChatBot e estou à disposição.",
  "Oi! Meu nome é helpme ChatBot, como posso ajudar?",
  "Olá, sou helpme ChatBot. O que você gostaria de saber?",
  "Tudo bem! Estou programado para responder às suas perguntas.",
  "Como vai! Estou pronto para fornecer informações e assistência.",
  "Pode fazer qualquer pergunta, estou à sua disposição."
]

  },
  {
    pattern: /(seu\s+nome|quem\s+é\s+você|qual\s+o\s+seu\s+nome|me\sfale\s+sobre\s+você|como\s+se\s+chama)/i,

    response: [
  "Eu sou um chatbot.",
  "Meu nome é helpme ChatBot, estou aqui para responder suas perguntas.",
  "Pode me chamar de helpme bot.",
  "Olá, estou aqui para ajudar.",
  "Bem-vindo ao helpme bot.",
  "Como posso ajudar você hoje?",
  "Estou disponível para responder suas dúvidas.",
  "Pergunte qualquer coisa e farei o meu melhor para responder.",
  "Meu propósito é fornecer informações e assistência.",
  "Estou à disposição para auxiliar no que você precisar.",
  "Olá, como posso ser útil hoje?",
  "Fique à vontade para fazer perguntas ou pedir ajuda.",
  "Estou aqui para tornar a sua experiência mais fácil.",
  "Minha função é responder às suas perguntas da melhor forma possível.",
  "Pode fazer perguntas sobre diversos tópicos.",
  "Estou pronto para ajudar, o que você gostaria de saber?",
  "Estou programado para ser útil, o que você precisa?",
  "Não hesite em fazer perguntas, estou aqui para responder.",
  "Vamos começar, como posso ser útil hoje?",
  "Basta digitar sua pergunta, e eu vou responder prontamente."
]

  },

  {
    pattern: /(.*)/i,
    response: [
  "Desculpe, não tenho uma resposta para essa pergunta no momento.",
  "Não entendi a pergunta, pode reformulá-la?",
  "Estou com dificuldades para entender, poderia explicar melhor?",
  "Eu não tenho acesso a essa informação no momento.",
  "Parece que estamos enfrentando um problema técnico.",
  "Sinto muito, não consigo responder a isso agora.",
  "Isso está fora do escopo do meu conhecimento.",
  "Eu sou um chatbot e minha capacidade é limitada.",
  "Não tenho certeza do que você está perguntando.",
  "Desculpe, não posso ajudar com essa pergunta.",
  "Por favor, faça outra pergunta.",
  "Eu só posso fornecer informações gerais.",
  "Essa pergunta está além das minhas habilidades.",
  "Talvez você queira buscar essa informação em outro lugar.",
  "Não estou programado para responder a essa pergunta.",
  "Você poderia tentar fazer uma pergunta mais simples?",
  "Desculpe, não tenho conhecimento sobre esse tópico.",
  "Minhas habilidades são limitadas, não consigo responder a isso.",
  "Não estou configurado para responder perguntas desse tipo.",
  "Esta pergunta está fora do meu escopo de conhecimento."
]

  }
];

function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  const chatContent = className === "outgoing" ?
    `<p>${message}</p>` :
    `<span class="material-symbols-outlined">robot_2</span><p></p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  let response = "Desculpe, não tenho resposta para essa pergunta no momento.";

  for (const item of chatResponses) {
    const match = message.match(item.pattern);
    if (match) {
      if (Array.isArray(item.response)) {
        response = getRandomResponse(item.response);
      } else if (typeof item.response === 'function') {
        response = item.response(match);
      } else {
        response = item.response;
      }
      break;
    }
  }

  return response;
};

const handleChat = () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = "auto";

  chatCont.appendChild(createChatLi(userMessage, "outgoing"));
  chatCont.scrollTo(0, chatCont.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "chegada");
    chatCont.appendChild(incomingChatLi);
    chatCont.scrollTo(0, chatCont.scrollHeight);

    const response = generateResponse(userMessage);
    incomingChatLi.querySelector("p").textContent = response;
  }, 600);
};

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);