FROM golang:1.19

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go get github.com/cosmtrek/air
RUN go install github.com/cosmtrek/air

CMD ["air"]
