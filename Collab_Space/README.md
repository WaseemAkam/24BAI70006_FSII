DEMO LINK- https://collabspaceai-ei68lhu6x-waseemakams-projects.vercel.app/login
The CollabSpace repository is organised as a monorepo with the following top-level structure:
collabspace/
├── client/                  # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level page components
│   │   ├── context/         # React context providers
│   │   └── utils/           # Helper functions
│   └── Dockerfile
├── server/                  # Node.js/Express API server
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express route handlers
│   ├── middleware/          # Auth and validation middleware
│   ├── socket/              # Socket.io event handlers
│   └── Dockerfile
├── docker-compose.yml       # Multi-service orchestration
├── Screenshots                # important screenshots of the working project
└── .github/workflows/ci.yml # GitHub Actions CI/CD pipeline
