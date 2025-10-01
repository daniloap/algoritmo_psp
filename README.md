# Algoritmo Diagnóstico PSP - Perfil Neuropsicológico

Ferramenta web interativa para auxiliar na avaliação neuropsicológica de pacientes com suspeita de Paralisia Supranuclear Progressiva (PSP), baseada nos critérios MDS 2017.

## 🌐 Publicar no GitHub Pages

### Passo 1: Criar um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Configure:
   - **Nome do repositório**: `psp-diagnostic-tool` (ou outro nome de sua preferência)
   - **Descrição**: "Algoritmo diagnóstico para PSP - Perfil Neuropsicológico"
   - **Visibilidade**: Public (para GitHub Pages gratuito)
   - ✅ Marque **"Add a README file"**
5. Clique em **"Create repository"**

### Passo 2: Fazer upload do arquivo

#### Opção A: Via interface web (mais simples)

1. No seu repositório recém-criado, clique em **"Add file"** → **"Upload files"**
2. Arraste o arquivo `index.html` para a área de upload
3. Na descrição do commit, escreva: "Adicionar algoritmo diagnóstico PSP"
4. Clique em **"Commit changes"**

#### Opção B: Via Git (linha de comando)

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/psp-diagnostic-tool.git
cd psp-diagnostic-tool

# Copie o arquivo index.html para a pasta
# (copie o arquivo que você baixou)

# Adicione e faça commit
git add index.html
git commit -m "Adicionar algoritmo diagnóstico PSP"
git push origin main
```

### Passo 3: Ativar o GitHub Pages

1. No seu repositório, clique em **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"** (Origem), selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **"Save"**
5. Aguarde 1-2 minutos para o site ser publicado

### Passo 4: Acessar seu site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/psp-diagnostic-tool/
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

---

## 📝 Sobre o Algoritmo

Este algoritmo diagnóstico implementa:

- ✅ **Passo 0**: Suspeita clínica inicial
- ✅ **Passo 1**: Rastreamento cognitivo (MoCA/FAB)
- ✅ **Passo 2**: Bateria executiva completa
- ✅ **Passo 3**: Cognição social
- ✅ **Passo 4**: Avaliação visuoconstrutiva
- ✅ **Passo 5**: Memória episódica
- ✅ **Passo 6**: Resumo e interpretação integrada

## 🎯 Características

- Interface intuitiva em português
- Sistema de pontuação automático
- Relatório detalhado com recomendações
- Compatível com impressão/exportação
- Funciona offline após o primeiro carregamento
- Sem necessidade de instalação ou servidor

## 📚 Baseado em

- Critérios MDS 2017 para PSP
- Literatura recente sobre cognição em PSP
- Boas práticas de avaliação neuropsicológica

## ⚠️ Aviso Importante

Esta ferramenta é destinada a **profissionais qualificados** e deve ser usada como **suporte diagnóstico**, não substituindo:
- Avaliação clínica completa
- Exame neurológico
- Neuroimagem (MRPI)
- Biomarcadores

## 🔧 Personalização

Para personalizar o algoritmo, edite o arquivo `index.html`:

- **Estilo visual**: Modifique a seção `<style>`
- **Textos e instruções**: Altere o conteúdo nas funções `renderStepX()`
- **Critérios de pontuação**: Ajuste a função `generateReport()`

## 📄 Licença

Este projeto é disponibilizado para fins educacionais e de pesquisa.

## 👥 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📧 Contato

Para dúvidas ou sugestões sobre o algoritmo, abra uma **Issue** no repositório.

---

**Desenvolvido para auxiliar profissionais na avaliação neuropsicológica de PSP**
