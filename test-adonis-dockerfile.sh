docker build -t adonis:test ./api | tee /my-install-cmd.log && docker run -it  -p 3333:3333 adonis:test