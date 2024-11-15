# SprintSpace

A modern, desktop-based sprint management application built with Tauri, React, and Rust.

## Development Setup

### Prerequisites

- Docker and Docker Compose
- Node.js 20+ (for local development without Docker)
- Rust (for local development without Docker)

### Quick Start with Docker

1. Clone the repository:
```bash
git clone git@github.com:YOUR_USERNAME/sprint-space.git
cd sprint-space
```

2. Start the development environment:
```bash
./dev.sh
```

The application will be available at http://localhost:3000

### Local Development (Without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Project Structure

```
sprint-space/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript type definitions
├── src-tauri/             # Rust backend code
│   └── src/
│       ├── main.rs        # Entry point
│       └── state/         # State management
└── docs/                  # Documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE) 