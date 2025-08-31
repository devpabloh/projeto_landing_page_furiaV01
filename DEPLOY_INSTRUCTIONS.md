# Instruções de Deploy no Vercel

## 1. Deploy do Backend

### Pré-requisitos
- Conta no Vercel (https://vercel.com)
- Vercel CLI instalado: `npm i -g vercel`

### Passos para deploy do backend:

1. **Navegue para a pasta do backend:**
   ```bash
   cd backend
   ```

2. **Faça login no Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy do backend:**
   ```bash
   vercel
   ```

4. **Durante o deploy, responda às perguntas:**
   - Set up and deploy: `Y`
   - Which scope: Selecione sua conta
   - Link to existing project: `N`
   - Project name: `furia-backend` (ou outro nome)
   - In which directory is your code located: `./` (pasta atual)
   - Want to override the settings: `N`

5. **Após o deploy, anote a URL do backend** (exemplo: `https://furia-backend.vercel.app`)

## 2. Deploy do Frontend

### Passos para deploy do frontend:

1. **Navegue para a pasta do frontend:**
   ```bash
   cd frontend
   ```

2. **Configure a variável de ambiente para apontar para o backend:**
   ```bash
   vercel env add VITE_API_URL
   ```
   - Quando solicitado, insira a URL do backend (exemplo: `https://furia-backend.vercel.app`)

3. **Deploy do frontend:**
   ```bash
   vercel
   ```

4. **Durante o deploy, responda às perguntas:**
   - Set up and deploy: `Y`
   - Which scope: Selecione sua conta
   - Link to existing project: `N`
   - Project name: `furia-frontend` (ou outro nome)
   - In which directory is your code located: `./` (pasta atual)
   - Want to override the settings: `N`

## 3. Configuração de Domínios Personalizados (Opcional)

### Para o backend:
1. Acesse o dashboard do Vercel
2. Vá para o projeto do backend
3. Settings > Domains
4. Adicione seu domínio personalizado

### Para o frontend:
1. Acesse o dashboard do Vercel
2. Vá para o projeto do frontend
3. Settings > Domains
4. Adicione seu domínio personalizado

## 4. Verificação

1. **Teste o backend:** Acesse `https://seu-backend.vercel.app/chatbot` (deve retornar uma resposta)
2. **Teste o frontend:** Acesse `https://seu-frontend.vercel.app` e teste o chatbot
3. **Verifique os logs:** No dashboard do Vercel, vá em Functions para ver os logs

## 5. Troubleshooting

### Problemas comuns:

1. **Erro de CORS:**
   - Verifique se o backend está configurado corretamente com CORS
   - Certifique-se de que a URL do frontend está na lista de origens permitidas

2. **Erro de build:**
   - Verifique se todas as dependências estão no `package.json`
   - Execute `npm install` localmente para testar

3. **Variáveis de ambiente não funcionando:**
   - Verifique se a variável `VITE_API_URL` está configurada corretamente
   - Faça um novo deploy após configurar as variáveis

4. **Erro 404 no frontend:**
   - Verifique se o `vercel.json` do frontend está configurado corretamente
   - Certifique-se de que o build está gerando os arquivos na pasta `dist`

## 6. Atualizações

Para atualizar o deploy:

1. **Backend:**
   ```bash
   cd backend
   vercel --prod
   ```

2. **Frontend:**
   ```bash
   cd frontend
   vercel --prod
   ```

## 7. Monitoramento

- Use o dashboard do Vercel para monitorar:
  - Performance
  - Logs de erro
  - Uso de recursos
  - Analytics (se configurado)
