#Defino la versión de NodeJs que tiene mi app
FROM node:current-slim

#Defino el directiorio donde se ejecuta mi app dentro de la imagen de docker
WORKDIR /home/apps/teslapp

#Copio el package.json para que se instalen las dependecias en la imagen de docker
COPY package*.json ./

#Ejecuto la app dentro de la imagen
RUN npm install

#Instalo PM2 global
RUN npm install pm2 -g

#Puerto donde escucha el server
EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]

COPY . .


