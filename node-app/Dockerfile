FROM node:14

# Définit le répertoire de travail
WORKDIR /usr/src/app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances de production
RUN npm install --only=production

# Copie le reste de l'application
COPY . .

# Expose le port d'écoute
EXPOSE 3000

# Définit la variable d'environnement
ENV NODE_ENV=production

# Commande de démarrage
CMD ["npm", "start"]
