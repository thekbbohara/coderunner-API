run project
```
git clone https://github.com/thekbbohara/coderunner-API.git
npm install
mkdir -p tmp/exe
npm start
```
___
docker 
```
docker build -t coderunner-api .
docker run -e PORT=4000 -e HOST=0.0.0.0 -p 4000:4000 coderunner-api

```
