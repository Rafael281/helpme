const chatCont = document.querySelector("#chatCont");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const chatResponses = [
  { pattern: /(ola|olá|oi|oi\s+chatbot)/i, response: "Olá! Como posso ajudar?" },
  { pattern: /(seu\s+nome|quem\s+é\s+você)/i, response: "Eu sou um assistente virtual." },
  { pattern: /(ajuda|help)/i, response: "Escolha uma das opções." },
  { pattern: /(maneiro|daora|obrigado|valeu|agradecido)/i, response: "De nada! Estou aqui para ajudar." },
  { pattern: /(soma\s+(\d+)\s+e\s+(\d+))/i, response: (matches) => parseInt(matches[2]) + parseInt(matches[3]) },
  { pattern: /(subtração\s+(\d+)\s+e\s+(\d+))/i, response: (matches) => parseInt(matches[2]) - parseInt(matches[3]) },
  { pattern: /(hora\s+atual)/i, response: () => new Date().toLocaleTimeString() },
  { pattern: /(data\s+atual)/i, response: () => new Date().toLocaleDateString() },
  { pattern: /.*/, response: "Desculpe, não tenho resposta para essa pergunta no momento." }
];

chatInput.addEventListener("input", () => {
  chatInput.style.height = "auto";
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

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
      if (typeof item.response === 'function') {
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
    const incomingChatLi = createChatLi("Thinking...", "incoming");
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
