# Github Pages

[![CircleCI](https://circleci.com/gh/hervit0/github-pages/tree/master.svg?style=svg)](https://circleci.com/gh/hervit0/github-pages/tree/master)

[Go!](http://hervit0.github.io/github-pages)

## Notes

### Deployment tutorial

- [Using `gh-pages` and `create-react-app`](https://github.com/gitname/react-gh-pages). Tip: Create your git repo first
- deploy: `npm run deploy`

### Circle CI

- [Configuration API](https://circleci.com/docs/2.0/configuration-reference/)
- [Github pages and Circle CI](https://blog.frederikring.com/articles/deploying-github-pages-circle-ci/)
- Add SSH permissions:
```
openssl genrsa -out ~/.ssh/circleci 2048
ssh-keygen -y -f ~/.ssh/circleci > ~/.ssh/circleci.pub
ssh-keygen -m pem -f ~/.ssh/circleci
```

### Troubleshooting

```
npm WARN lifecycle The node binary used for scripts is /home/hervito/.asdf/shims/node but npm is using /home/hervito/.asdf/installs/nodejs/11.7.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
```
=> `npm config set scripts-prepend-node-path true`

```
Error: ENOSPC: System limit for number of file watchers reached
```
=> `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
