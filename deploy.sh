#!/bin/bash

echo "🚀 Iniciando deploy no Vercel..."

# Deploy do Backend
echo "📦 Deployando backend..."
cd backend
vercel --prod --yes
BACKEND_URL=$(vercel ls | grep -o 'https://[^[:space:]]*' | head -1)
echo "✅ Backend deployado em: $BACKEND_URL"
cd ..

# Deploy do Frontend
echo "🌐 Deployando frontend..."
cd frontend
vercel env add VITE_API_URL production $BACKEND_URL
vercel --prod --yes
FRONTEND_URL=$(vercel ls | grep -o 'https://[^[:space:]]*' | head -1)
echo "✅ Frontend deployado em: $FRONTEND_URL"
cd ..

echo "🎉 Deploy concluído!"
echo "Backend: $BACKEND_URL"
echo "Frontend: $FRONTEND_URL"
