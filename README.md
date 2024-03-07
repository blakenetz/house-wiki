# House Wiki

For use as a template when documentation for a house, van, etc. Out of the box features:

* Blocks search engines indexing
* Dark and light modes
* [GLightbox plugin](https://github.com/blueswen/mkdocs-glightbox)
* [Search plugin](https://squidfunk.github.io/mkdocs-material/plugins/search/)

## Setup

Project can be setup with [Just](https://just.systems/man/en/chapter_1.html) or manually

### Just

```text
just setup
```

### Manual

1. Create [virtual environment](https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment)

   ```text
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install packages

   ```text
   pip install mkdocs-material glightbox git-revision-date-localized
   ```

## Commands

- Serve: `mkdocs serve` or `just serve`
- Build: `mkdocs build`

## Deployment

Deployed using a [Github Action](https://docs.github.com/en/actions) to a [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static/) resource

### Setup

* [Create](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github) a static web resource.
  * In the build details section use the following:
    * `/` for app location
    * `site` for output location 
* [Get Deployment Token](https://learn.microsoft.com/en-us/azure/static-web-apps/static-web-apps-cli-deploy#deployment-token)
* Add token as a [Github secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
  * The default token name is `AZURE_STATIC_WEB_APPS_API_TOKEN`
  * If [renaming](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets), update `.github/workflows/build-and-deploy.yml`
