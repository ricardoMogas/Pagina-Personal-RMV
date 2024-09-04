# Usa una imagen base de Node.js
FROM node:18

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Expone el puerto en el que el servidor de desarrollo de Vite se ejecuta
EXPOSE 5174

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]
