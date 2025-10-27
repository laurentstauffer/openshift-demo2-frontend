# Étape 1: Build de l'application Angular
FROM node:20-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application en mode production
RUN npm run build

# Étape 2: Servir avec Nginx
FROM nginx:alpine

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Exposer le port 8080 (requis pour OpenShift)
EXPOSE 8080

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
