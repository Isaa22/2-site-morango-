// Seleciona todos os links do menu
const links = document.querySelectorAll('.navbar ul li a');

// Função para atualizar o link ativo conforme o scroll
function atualizarLinkAtivo() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section) {
      const top = section.offsetTop - 80;
      const bottom = top + section.offsetHeight;

      if(scrollPos >= top && scrollPos < bottom) {
        link.classList.add('ativo');
      } else {
        link.classList.remove('ativo');
      }
    }
  });
}

// Botão voltar ao topo
const botaoTopo = document.createElement('button');
botaoTopo.textContent = '↑ Topo';
botaoTopo.id = 'btnTopo';
document.body.appendChild(botaoTopo);

botaoTopo.style.position = 'fixed';
botaoTopo.style.bottom = '30px';
botaoTopo.style.right = '30px';
botaoTopo.style.padding = '10px 15px';
botaoTopo.style.fontSize = '16px';
botaoTopo.style.border = 'none';
botaoTopo.style.borderRadius = '30px';
botaoTopo.style.backgroundColor = '#d33a3a';
botaoTopo.style.color = 'white';
botaoTopo.style.cursor = 'pointer';
botaoTopo.style.boxShadow = '0 4px 10px rgba(211, 58, 58, 0.6)';
botaoTopo.style.display = 'none';
botaoTopo.style.zIndex = '1000';

// Mostrar botão só depois de descer 300px
window.addEventListener('scroll', () => {
  atualizarLinkAtivo();

  if(window.scrollY > 300) {
    botaoTopo.style.display = 'block';
  } else {
    botaoTopo.style.display = 'none';
  }
});

// Ao clicar, volta suavemente ao topo
botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
