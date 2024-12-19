remember that `./` refers to the current working directory.

Don't add new files unless absolutely necessary. When I ask you to use an existing file, search the codebase because most probably the file already exists.

# styling

Use tailwind.css to provide very nice styling. Make the website look really nice and calm. Use green colors mainly.

# storybook

Each non-global component (i.e. displaying entity list, entity details, a styled atom such as buttons, checkboxes, card etc) should have storybook stories defined:
- use the `BSA/<ENTITY>/<VIEW>` or `BSA/<ATOMS | MOLECULES> | ORGANISMS/<VIEW>`

# imports

When exporting things, always use named exports. Avoid default exports.

Where applicable, use `import type` instead of `import`.

# contract and entities

Whenever speaking about the contract, modify only the entities that are explicitly mentioned.

Whenever speaking about the contract, it's always about modifying the `./contract/swagger.yaml` file. Usually the data in the listings include less information than the full details entity.

Creating a new contract entry or modifying existing one requires the following:
- updating the server-side routes
- updating the client-side service
- running the `npm run generate:types` command (from package.json) needs to be executed in order to generate up-to-date types

# server code

For each entity in the contract (added, modified etc.) the `./server/routes` need to have its file there (if such route file exists for a given entity, use it). Use existing server routes for reference.

Within `server` directory, when importing types from contract, don't use the `contract/contract.ts` file, use the `contract/types.ts` file instead.

# client code

When importing types on the client side, don't use the `./src/contract/contract.ts` file, use the `./src/contract/types.ts` instead. Also, any entities/schemas/components/paths/any other definitions should be exposed from the index.ts file for the client app to import directly.

The client code components should do neither `fetch` nor `axios` calls directly. They should always use an appropriate fetching service from the services directory.

For each entity in the contract (added, modified etc.), there should be a service defined in `./src/api/services`. Import `client` from apiClient file which has the base API URL defined already. Use existing services for reference.

# faker utilities

When providing fake data using faker (`@faker-js/faker`), please relate to version 9.3.0 used in server package.

When selecting random elements from arrays, use the `randomFromArray` utility function from `./server/fake/fakeData.ts` instead of direct array access with Math.random() or faker's `arrayElement`.

# enums

Whenever enums are created, they should include uppercase values, not lowercase values.
