# Coderunner API
The Coderunner API is a backend service designed to execute code snippets in various programming languages inside a secure, isolated environment. This API is useful for building online code editors, competitive programming platforms, or any application that requires on-the-fly code execution.

## Features
- Supports multiple languages.
- Secure execution in isolated environments.
- Can be run locally or inside a Docker container.

### Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/thekbbohara/coderunner-API.git
cd coderunner-API
```
### 2. Docker Setup (recommended)
```
docker build -t coderunner-api .
docker run -e PORT=4000 -e HOST=0.0.0.0 -p 4000:4000 coderunner-api
```
___ 
### 3. Local setup
```
npm i
mkdir -p tmp/exe
npm start
```

