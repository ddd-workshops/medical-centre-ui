remember that `./` refers to the current working directory.

Don't add new files unless absolutely necessary. When I ask you to use an existing file, search the codebase because most probably the file already exists.

# enums

Whenever enums are created, they should include uppercase values, not lowercase values.

# domain

the description of the "Bright Smiles Architects" company running a network of dental clinics can be found in the `./domain` directory.

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

## faker utilities

When providing fake data using faker (`@faker-js/faker`), please relate to version 9.3.0 used in server package.

When selecting random elements from arrays, use the `randomFromArray` utility function from `./server/fake/utils.ts` instead of direct array access with Math.random() or faker's `arrayElement`.

# client code

When importing types on the client side, don't use the `./src/contract/contract.ts` file, use the `./src/contract/types.ts` instead. Also, any entities/schemas/components/paths/any other definitions should be exposed from the index.ts file for the client app to import directly.

The client code components should do neither `fetch` nor `axios` calls directly. They should always use an appropriate fetching service from the services directory.

For each entity in the contract (added, modified etc.), there should be a service defined in `./src/api/services`. Import `client` from apiClient file which has the base API URL defined already. Use existing services for reference.

## form widgets

Each form widget should maintain its own local private state. When a value changes:
1. First update the local state
2. Then invoke the onChange callback with the new value
This ensures proper state management and prevents potential race conditions.

## styling

Use tailwind.css to provide very nice styling. Make the website look really nice and calm. Use green colors mainly.

If icons are needed, use `lucide-react`, it's already there.lucide-react

## storybook

Each non-global component (i.e. displaying entity list, entity details, a styled atom such as buttons, checkboxes, card etc) should have storybook stories defined:
- use the `BSA/<ENTITY>/<VIEW>` or `BSA/<Atoms | Molecules | Forms> | Organisms/<VIEW>`

Each component story, when requires callbacks, should either receive a meaningful callback from the parent, or provide the `action` from `@storybook/addon-actions`. You can use `PasswordInput.stories.tsx` as example of using actions addon, but you can also provide different APIs. Don't use console.log for this reason.

The stories should include the 'autodocs' feature from Storybook.
