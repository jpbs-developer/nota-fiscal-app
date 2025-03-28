# 🧾 Plataforma de Emissão de Notas Fiscais para Autônomos

Este é um projeto full stack desenvolvido para facilitar a vida de profissionais autônomos que precisam gerar, gerenciar e enviar **notas fiscais** de forma simples e organizada.

> ✨ Projeto com foco em **portfólio profissional**, destacando integração de tecnologias modernas, boas práticas de desenvolvimento e arquitetura escalável.

---

## 🎯 Objetivo
Criar uma plataforma web onde autônomos possam:
- Cadastrar clientes e serviços
- Gerar notas fiscais em PDF
- Gerenciar seu histórico de emissões
- Exportar relatórios mensais
- Enviar notas por e-mail

---

## 🧰 Tecnologias Utilizadas

### Frontend
- Vue 3 + TypeScript
- Vite
- TailwindCSS
- Vue Router + Pinia

### Backend
- Fastify + TypeScript
- Prisma ORM
- PostgreSQL
- JWT para autenticação
- PDFKit para geração de notas

### Infraestrutura
- Docker + Docker Compose
- CI/CD com GitHub Actions (em progresso)

---

## 📦 Estrutura do Projeto
```
nota-fiscal-app/
├── frontend/             # Vue 3 com Tailwind e Vite
├── backend/              # Fastify com Prisma ORM
├── postgres-data/        # Volume persistente do banco
├── docker-compose.yml
└── README.md
```

---

## 🚀 Como Rodar Localmente

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/nota-fiscal-app.git
```

2. Suba os containers:
```bash
cd nota-fiscal-app
docker-compose up --build
```

3. Acesse:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

> O banco será iniciado com o nome `notas` e credenciais padrão (postgres/postgres)

---

## 🧠 Funcionalidades (em desenvolvimento)

- [x] Cadastro e login de usuário
- [x] Cadastro de clientes
- [x] Cadastro de serviços
- [ ] Geração de nota fiscal em PDF
- [ ] Histórico de emissões
- [ ] Exportação CSV
- [ ] Envio de notas por e-mail
- [ ] Dashboard com valores por mês

---

## 📅 Roadmap

- [ ] Testes unitários e2e (Playwright e Jest)
- [ ] Deploy automático com CI/CD
- [ ] PWA com funcionalidade offline
- [ ] Multi-idioma (PT-BR / EN-US)

---

## 👨‍💻 Autor
**João Paulo Batista da Silva**  
Desenvolvedor Full Stack | Vue | Angular | Fastify | PostgreSQL  
[LinkedIn](https://www.linkedin.com/in/joaopaulobatistads) · [GitHub](https://github.com/seu-usuario)

---

## 📄 Licença
Este projeto é licenciado sob os termos da MIT License.

