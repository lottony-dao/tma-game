.PHONY: up down restart logs ps clean

# Docker compose files
DC_DB = docker-compose.db.yml
DC_SSL = docker-compose.ssl.yml
DC_DEV = docker-compose.dev.yml
DC_PROD = docker-compose.prod.yml

# Commands
DC = docker compose

# Start development environment
dev: init-ssl
	$(DC) -f $(DC_SSL) -f $(DC_DB) -f $(DC_DEV) --env-file envs/.env up -d --build

# Start production environment
prod: init-ssl
	$(DC) -f $(DC_SSL) -f $(DC_DB) -f $(DC_PROD) --env-file envs/.env up -d

# Stop all services
down:
	$(DC) -f $(DC_PROD) -f $(DC_DB) -f $(DC_SSL) down

# Restart all services
restart: down up

init-ssl:
	$(DC) -f $(DC_SSL) up -d
