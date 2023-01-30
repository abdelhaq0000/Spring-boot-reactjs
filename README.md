# MINIPROJETjee


# Lign docker hub pour telecharger l'application:

    https://hub.docker.com/repository/docker/abdelhaq22/miniprojet/general



# Le contenu de docker compose:

                  version: "3"
                  services:
                    appDB:
                      container_name: appDB
                      image: abdelhaq22/miniprojet:DB
                      restart: always
                      networks:
                        - netAppll
                      environment:
                        - MYSQL_DATABASE=miniProject
                        - MYSQL_ROOT_PASSWORD=root
                      ports:
                        - 3307:3306
                    my-web-app:
                      container_name: backApp
                      image: abdelhaq22/miniprojet:backApp
                      ports:
                        - 9090:9090
                      environment:
                        MYSQL_HOST: appDB
                        MYSQL_USER: root
                        MYSQL_PASSWORD: root
                        MYSQL_PORT: 3306
                      networks:
                        - netAppll
                      depends_on:
                        - appDB
                    my-react-app:
                      container_name: frontApp
                      image: abdelhaq22/miniprojet:frontApp
                      ports:
                        - 3000:3000
                  networks:
                    netAppll:
                      name: netAppll
                      
                      
# Pour run cette application taper la commande suivent:

          $ docker compose up
          
          
# Dockerfile de backend:

                   # AS <NAME> to name this stage as maven
                FROM maven:3.8.7-openjdk-18 as build
                WORKDIR /usr/src/app
                COPY . /usr/src/app
                # Compile and package the application to an executable JAR
                RUN mvn clean install -DskipTests
                # For Java 18,
                FROM openjdk:18-alpine
                ARG JAR_FILE=studentsystem-0.0.1-SNAPSHOT.jar
                WORKDIR /opt/app
                #copy the jar file from target to opp/app
                COPY --from=build /usr/src/app/target/${JAR_FILE} /opt/app/
                ENTRYPOINT ["java","-jar","studentsystem-0.0.1-SNAPSHOT.jar"]
                
                
# Dockerfile de frontend:

              FROM node:13.12.0-alpine
              WORKDIR /app
              ENV PATH /app/node_modules/.bin:$PATH
              COPY package.json ./
              COPY package-lock.json ./
              RUN npm install --silent
              RUN npm install react-scripts@5.0.1 -g --silent
              COPY . ./
              CMD ["npm", "start"]
         

# Technologies utilisées

      Backend: Spring Boot , Java 
      Frontend: Reactjs , Bootstrap , Jequery


# Auteur:
      Abdelhaq Elmetlini et brahim majjot     
   
