# Utiliza la imagen base de Node.js 17
FROM node:18.14 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY package.json .
COPY package-lock.json .
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY src ./src


# Instala Angular CLI de forma global dentro del contenedor
RUN npm install -g @angular/cli@17.0.0

# Instala las dependencias
RUN npm install

COPY . .
# Compila la aplicación
RUN npm run build

# Configura la imagen de producción de Nginx
FROM nginx:latest

# Copia los archivos compilados de la aplicación en la imagen de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia Nginx cuando se inicie el contenedor
CMD ["nginx", "-g", "daemon off;"]