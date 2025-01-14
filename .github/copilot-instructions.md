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

Whenever speaking about the contract, it's always about modifying the `./contract/openapi.yml` file. Usually the data in the listings include less information than the full details entity.

Creating a new contract entry or modifying existing one requires the following:
- updating the server-side routes
- updating the client-side service
- running the `npm run generate:types` command (from package.json) needs to be executed in order to generate up-to-date types

The `./contract/types.ts` file should expose all schemas (and some chosen paths) that are available on the `contract.ts` file. All schema types exported should have exactly the same name as the schema. And should be in the same order as in the swagger contract file. Also, no schemas can be missing in `./contract/types.ts` file.

# server code

For each entity in the contract (added, modified etc.) the `./server/controllers` need to have its file there (if such controller file exists for a given entity, use it). Use existing server controllers for reference.

Within `server` directory, when importing types from contract, don't use the `contract/contract.ts` file, use the `contract/types.ts` file instead.

In the controller files, the types of express request and response should reflect whatever is available in the contract (under imported `paths` type from `contract/types`). Remember that there's no need to start paths from `api/`. If request is empty, don't provide the Request type parameter (just leave Request). For clarity, make req and res be displayed in separate lines. If the response sends any error codes (4xx or 5xx) then please include the `ErrorResponse` type in the express Response: `Response<... | ErrorResponse>`.

## faker utilities

When providing fake data using faker (`@faker-js/faker`), please relate to version 9.3.0 used in server package.

When selecting random elements from arrays, use the `randomFromArray` utility function from `./server/fake/utils.ts` instead of direct array access with Math.random() or faker's `arrayElement`.

# client code

When importing types on the client side, don't use the `./src/contract/contract.ts` file, use the `./src/contract/types.ts` instead. Also, any entities/schemas/components/paths/any other definitions should be exposed from the index.ts file for the client app to import directly.

The client code components should do neither `fetch` nor `axios` calls directly. They should always use an appropriate fetching service from the services directory.

For each entity in the contract (added, modified etc.), there should be a service defined in `./src/http`. Import `apiClient` from client file which has the base API URL defined already. Use existing services for reference. The apiClient requests should explicitly determine the response type according to whatever is defined in the contract (available under `paths` type, imported from contract/types). Also, don't add the explicit function return type (promise) as it's unnecessary over what the returned value is.

When reusing existing react components, import them from `./src/components/generic` or `./src/components/forms`.

## component check

1. Make sure each component has props type defined, if any props are used. Check whether the component compiles.

## form widgets

Each form widget should maintain its own local private state. When a value changes:
1. First update the local state
2. Then invoke the onChange callback with the new value
This ensures proper state management and prevents potential race conditions.

## styling

Use tailwind.css to provide very nice styling. Make the website look really nice and calm. Use green colors mainly.

If icons are needed, use `lucide-react`, it's already there.

Use existing typography, when possible: `./src/components/Typography`. If an important element of typography is missing, suggest adding it!

## storybook

Each non-global component (i.e. displaying entity list, entity details, a styled atom such as buttons, checkboxes, card etc) should have storybook stories defined:
- use onre of the following paths:
  - `BSA/<ENTITY>/<VIEW>`
  - `BSA/<Atoms | Molecules | Forms>`
  - `Organisms/<VIEW>`

Each component story, when requires callbacks, should either receive a meaningful callback from the parent, or provide the `action` from `@storybook/addon-actions`. You can use `PasswordInput.stories.tsx` as example of using actions addon, but you can also provide different APIs. Don't use console.log for this reason.

The stories should include the 'autodocs' feature from Storybook.

Whenever providing or updating storybook stories, always try to use domain-relevant examples (doctors, appointments, treatments, medicine etc) instead of generic words with no meaning.

## currencies

Whenever displaying currencies, use the function from `./src/utils/formatCurrency.ts`
