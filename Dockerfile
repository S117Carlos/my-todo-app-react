# Base Image
FROM node:12.13.1

# Context dir
WORKDIR /home/
COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["/bin/bash"]

CMD ["-c", "npm start"]