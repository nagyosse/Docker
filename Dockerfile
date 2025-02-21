FROM alpine

RUN apk update
RUN apk add openjdk7-jre
RUN apk add redis

CMD ["java", "-version"]
