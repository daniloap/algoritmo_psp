# Algoritmo Diagnóstico PSP

Ferramenta interativa para avaliação neuropsicológica de Paralisia Supranuclear Progressiva (PSP) baseada nos critérios MDS 2017.

## 🌐 Deploy Online

Este projeto pode ser facilmente implantado em várias plataformas:

### Opção 1: GitHub Pages (Recomendado)

1. **Configuração Automática via GitHub Actions:**
   - O arquivo `.github/workflows/deploy.yml` já está configurado
   - Faça push para o branch `main`
   - O site será automaticamente construído e implantado em: `https://[seu-usuario].github.io/algoritmo_psp/`

2. **Ativar GitHub Pages:**
   - Vá em Settings > Pages do repositório
   - Em "Source", selecione "GitHub Actions"
   - O deploy será feito automaticamente a cada push

### Opção 2: Vercel

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Para deploy em produção:
   ```bash
   vercel --prod
   ```

### Opção 3: Netlify

1. Instale o Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

3. Para deploy em produção:
   ```bash
   netlify deploy --prod
   ```

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/daniloap/algoritmo_psp.git
   cd algoritmo_psp
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173`

### Build para Produção

Para criar uma build otimizada:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para testar a build localmente:

```bash
npm run preview
```

## 📋 Características

- ✅ Interface interativa e intuitiva
- ✅ Avaliação passo a passo baseada em critérios MDS 2017
- ✅ Análise automática de compatibilidade com PSP
- ✅ Relatório imprimível
- ✅ Responsivo para desktop e dispositivos móveis
- ✅ Sem necessidade de backend ou banco de dados

## 🧠 Sobre a Ferramenta

Esta ferramenta foi desenvolvida para auxiliar profissionais da saúde na avaliação neuropsicológica de pacientes com suspeita de Paralisia Supranuclear Progressiva (PSP).

### Passos da Avaliação:

1. **Suspeita Clínica** - Sinais motores e clínicos
2. **Rastreamento Cognitivo** - MoCA e FAB
3. **Bateria Executiva** - Testes de função executiva
4. **Cognição Social** - Reconhecimento de emoções e teoria da mente
5. **Visuoconstrutivo** - Avaliação visuoespacial
6. **Memória Episódica** - RAVLT e FCSRT
7. **Resumo e Interpretação** - Análise integrada

## ⚠️ Aviso Importante

Esta ferramenta é destinada apenas para uso por profissionais qualificados como suporte diagnóstico. Não substitui:
- Avaliação clínica completa
- Exames de neuroimagem
- Análise de biomarcadores
- Julgamento clínico profissional

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e clínico.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novos recursos
- Melhorar a documentação
- Enviar pull requests

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no GitHub.
