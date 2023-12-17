## docker build

tag with username/dockername:version
```
docker build . -t sysbender/hellodocker:latest 
docker run sysbender/hellodocker:latest
```



## pass values at build time

pass from local env, or command line

```
FROM alpine

ARG VERSION=v0.18.2
COPY --from=open-policy-agent/conftest:$VERSION /conftest /conftest

$docker build --build-arg VERSION=v.0.19.0
```

## dockerfile patters
aliases, inheritance, logic, multi-stage build patterns

## build-push-action

define workflows in yaml - stored in .github/workflows

standard docker command
```yaml
name: Docker

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: build the Docker image
      run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)




```
build-push-action

```yaml
uses: docker/build-push-action@v1
with:
  username: ${{ secrets.DOCKER_USERNAME }}
  password: ${{ secrets.DOCKER_PASSWORD }}
  repository: myorg/myrepository
  tags_with_ref: true
  tags_wth_sha: true
  add_git_labes: true
  always_pull: true
  labels: label_name_1=label_value_1
  target: mytarget
  
```


