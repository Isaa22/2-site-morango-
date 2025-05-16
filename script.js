// Sticky navbar - adiciona classe quando der scroll
const navbar = document.querySelector('.navbar');
const offsetNav = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if(window.pageYOffset > offsetNav) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Atualiza link ativo no menu baseado na seção visível
const links = document.querySelectorAll('.navbar ul li a');
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

function atualizarLinkAtivo() {
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach((section, i) => {
    if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      links.forEach(link => link.classList.remove('ativo'));
      links[i].classList.add('ativo');
    }
  });
}

// Botão voltar ao topo com fade
const botaoTopo = document.createElement('button');
botaoTopo.id = 'btnTopo';
botaoTopo.innerHTML = '↑';
document.body.appendChild(botaoTopo);

// Mostrar/esconder botão topo com fade
window.addEventListener('scroll', () => {
  atualizarLinkAtivo();

  if(window.scrollY > 400) {
    botaoTopo.style.visibility = 'visible';
    botaoTopo.style.opacity = '1';
  } else {
    botaoTopo.style.opacity = '0';
    botaoTopo.style.visibility = 'hidden';
  }
});

// Scroll suave ao topo
botaoTopo.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Filtro de ingredientes
const filtroInput = document.createElement('input');
filtroInput.type = 'search';
filtroInput.placeholder = 'Filtrar ingredientes...';
filtroInput.id = 'filtroIngredientes';
document.querySelector('#ingredientes').prepend(filtroInput);

filtroInput.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  const ingredientes = document.querySelectorAll('#ingredientes ul li');

  ingredientes.forEach(item => {
    if(item.textContent.toLowerCase().includes(termo)) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
});
