# PixelHub - Galeria de Imagens 💜📷

> Rithiellen Kariny Alves Máxima 🦋

## Descrição e Objetivo do Projeto
Este projeto é uma galeria de imagens que permite ao usuário fazer upload de imagens, visualizá-las em uma galeria, favoritar, adicionar legendas e remover imagens. O objetivo é demonstrar a integração com a API pública do [ImgBB](https://api.imgbb.com/), que permite o upload e armazenamento de imagens.

🔸 Para trazer mais personalidade e interação ao meu projeto de Galeria de Imagens, criei um nome e coloquei dados de contato fictícios, e criei uma logo para complementar a identidade visual e a proposta do projeto.

## Tecnologias Utilizadas
- **JavaScript puro**: Para a lógica do projeto.
- **HTML5**: Para a estrutura da página.
- **CSS3**: Para a estilização.
- **API do ImgBB**: Para upload e armazenamento de imagens.

## Como Funciona a Integração com a API do ImgBB
A API do ImgBB é usada para fazer o upload das imagens. Quando o usuário seleciona uma imagem e envia o formulário, o seguinte processo ocorre:

1. A imagem é enviada para a API do ImgBB usando uma requisição POST com a chave de API.

2. A API processa a imagem e retorna um link público para a imagem.

3. Esse link é salvo no localStorage junto com outras informações (como favorito e legenda).

4. A imagem é exibida na galeria usando o link retornado pela API.
  
## Créditos
- **API do ImgBB**: [Documentação oficial](https://api.imgbb.com/).
- **Font Awesome**: Para ícones utilizados no projeto.
- **Referências de código**: [MDN Web Docs](https://developer.mozilla.org/), [Stack Overflow](https://stackoverflow.com/).

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
