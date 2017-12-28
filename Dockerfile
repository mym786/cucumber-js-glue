From node:6.11.2

# Create app directory
WORKDIR /cucumber-js-glue
COPY package.json .
COPY index.js .
COPY Readme.md .
COPY features/ features/
RUN npm install
#COPY README.md .
EXPOSE 80
ENTRYPOINT /bin/bash