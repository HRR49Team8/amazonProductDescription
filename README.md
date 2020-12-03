# Project Name

> Product Information module for a Product page.

## Related Projects

Original Front-End:
  - https://github.com/House-Bezos/joe-service
  - https://github.com/House-Bezos/zains-service
  - https://github.com/House-Bezos/Dylans-service

Further Back-End Development:
  - https://github.com/HRR49Team8/amazonRelatedProducts
  - https://github.com/HRR49Team8/amazonCarousel
  - https://github.com/HRR49Team8/amazonReviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Once MongoDB is started, to seed the database run

```sh
npm run seed
```

During development, run the following commands in two separate terminals:

```sh
npm start
```
```sh
npm run build
```

For production:

```sh
npm run production
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Start mongodb locally

If you do not have MongoDB, go to [mongodb](https://docs.mongodb.com/manual/administration/install-community/) for installation first.

If installed on Mac with homebrew:

```sh
brew services start mongodb-community
```

or follow the instructions on the website for starting MongoDB.


## CRUD API

The following URL's should be prefixed with '/api/products/:id'

| Action | Request Method | URL |
| Create a new Product Description | POST | '/api/products/:id' |
| Get existing Product Description | GET | '/api/products/:id' |
| Update existing Product Description | PUT | '/api/products/:id' |
| Delete existing Product Description | DELETE | '/api/products/:id' |

