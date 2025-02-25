# TMA Game Template

A modern template for creating Telegram Mini Apps games using TypeScript, React, and Phaser. This template provides a solid foundation with all the necessary tooling and configuration to quickly start developing your own TMA game.

## Features

- **Phaser 3** - Popular and powerful HTML5 game framework
- **React** - For building user interfaces and menus
- **TypeScript** - Type safety and better developer experience
- **Telegram Mini Apps SDK** - Deep Telegram integration
- **MongoDB** - For storing game data and user progress
- **Docker** - Containerized development and deployment
- **Webpack** - Modern bundling and development setup
- **SSL Support** - Built-in SSL configuration for production

## Quick Start

1. Set up environment variables:
```bash
cp envs/.env.example envs/.env
```
Edit `envs/.env` and add your Telegram Bot Token and other required variables.

2. Start development environment:
```bash
make dev
```

The game will be available at `https://localhost:4000`

## Development

### Project Structure
```
.
├── frontend/            # Frontend code
│   ├── src/            # Source files
│   │   ├── components/ # React components (UI elements, menus)
│   │   ├── game/      # Phaser game files
│   │   │   ├── scenes/    # Game scenes
│   │   │   ├── objects/   # Game objects and entities
│   │   │   └── config.ts  # Phaser configuration
│   │   ├── styles/    # SCSS styles for React components
│   │   ├── App.tsx    # Main React component
│   │   └── main.tsx   # Entry point
│   ├── assets/         # Game assets (images, sounds)
│   └── index.html      # HTML template
├── server/             # Backend code
│   └── src/           # Source files
│       ├── bot/       # Telegram bot handlers
│       ├── models/    # MongoDB models
│       └── index.ts   # Server entry point
├── envs/              # Environment configurations
├── docker/            # Docker configurations
└── dist/              # Compiled code
```

### Available Commands

- `make dev` - Start development environment
- `make prod` - Start production environment
- `make down` - Stop all containers

### NPM commands

Run inside the `app` container:
- `npm run build` - Build both client and server
- `npm run build-client` - Build client only
- `npm run build-srv` - Build server only
- `npm run watch-client` - Watch for changes in client

## Deployment

1. Set up environment variables:
```bash
cp envs/.env.example envs/.env
```
Edit `envs/.env` and add your Telegram Bot Token and other required variables.

2. Start production environment:
```bash
make prod
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support Development

If you find this template useful, consider supporting me:

TON: `UQA2f2i0-2tKoQU9qPcq30QZq4Cr_fdat0G-k-00ES6029LV`