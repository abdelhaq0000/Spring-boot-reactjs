# AS <NAME> to name this stage as maven
FROM maven:3.8.7-openjdk-18 as build

WORKDIR /usr/src/app
COPY . /usr/src/app
# Compile and package the application to an executable JAR
RUN mvn clean install -DskipTests
# For Java 17,
FROM openjdk:18-alpine

ARG JAR_FILE=studentsystem-0.0.1-SNAPSHOT.jar

WORKDIR /opt/app

#copy the jar file from target to opp/app
COPY --from=build /usr/src/app/target/${JAR_FILE} /opt/app/

ENTRYPOINT ["java","-jar","studentsystem-0.0.1-SNAPSHOT.jar"]