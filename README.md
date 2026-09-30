# App - initial bolierplate

## Prerequisitres
An **Angular 22** compatible version with **Node.js** must be installed in your machine. Version `24.20.0` is recommended:
- https://angular.dev/reference/versions
- https://angular.dev/installation

## App set up
The Angular App was created with this **Angular CLI** command, 
executed from the solution's **root** path `monopollo/`:

```Shell
ng new App --commit=false --inline-style --inline-template --package-manager=npm --routing=true --skip-git --skip-install --style=tailwind --ssr=false --zoneless=true --ai-config=none
```

## App install
Once created, install the Angular project dependecies from the solution's **root** path:

```Shell
cd App
npm i
```

## App unit tests
To opt in for **Vitest**, a `vitest.config,ts` config file was created at Angular's project root level:

```TypeScript
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8', // https://vitest.dev/guide/coverage
    },
    setupFiles: ['src/test-setup.ts'],
  },
});
``` 

Then the a **Setup** file for Vitest (`test-setup.ts`) was created at Angular's project path `src/`:

```TypeScript
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
``` 

Finally, these **NPM scripts** where added to the **package.json** file:

```JSON
"test": "vitest",
"coverage": "vitest --coverage"
```

As well as this entry (which enables ESM imports of vitest config files): 

```JSON
"type": "module
```

To install Vitest Coverage tool, the coverage command was executed:

```Shell
npm run coverage
```

And the Vitest CLI suggested then in Terminal to add that dependency.

## App scripts for development
Be sure to be located at the App path: `monopollo/App/`. Once there, execute the following **NPM scripts** to:

* Run the App in dev mode: 
  ```Shell
  npm start
  ```
* Run unit tests:
  ```Shell
  npm test
  ```
* Coverage of unit tests: 
    ```Shell  
  npm run coverage
  ```
* Run E2E tests: 
  ```Shell  
  npm run end
  ```
  
## App scripts for production
Be sure to be located at the App path: `monopollo/App/`. Once there, execute the following **NPM scripts** to build the production-ready compile: 

```Shell  
npm run build
```

That compilation will be created at the App's `dist/` folder. The subfolder to be deployed to a web server is `broswer/`.

**Official documentation**:
https://angular.dev/


# API - initial bolierplate

## API setup & install

### Prerequisitres
The **SDK** for .NET version `10.0.112` must be installed in your machine:
- https://dotnet.microsoft.com/es-es/download/dotnet/10.0
The .NET API was created with this **dotnet CLI** command, 
executed from the solution's root path `monopollo/`:

```Shell
dotnet new webapi --name=Api --output Api/src -controllers=true --dry-run
```

## API unit tests

### Prerequisites
The .NET template for **xUnit** version 3 (`xunit.v3`) must be already installed in your machine:
https://www.nuget.org/packages/xunit.v3

For testing with **xUnit version 3**, the **Solution** must use the modern **Microsoft Testing Platform** (MTP). To enable it, place a `global.json` file at the path of the Api: `monopollo/Api/`

The exact configuration for the **global.json** file must be this:

```JSON
{
  "test": {
    "runner": "Microsoft.Testing.Platform"
  }
}
```  

### Set up
The testing project with **xUnit** for the API, was created by executing this **dotnet CLI** command from the solution's root path `monopollo/`:

```Shell
dotnet new xunit3 --name=Api.Tests --output=Api/tests --language="C#" --framework=net10.0
```

To be able to run unit tests on the API project, a reference was created in the `Api.Tests.proj` file by executing this **dotnet CLI** command from the solution's root path `monopollo/`:

```Shell
dotnet add Api/tests/Api.Tests.csproj reference Api/src/Api.csproj
```

## API commands for development
* Be sure to be located at the API source path: `monopollo/Api/src/`. Once there, execute this **dotnet CLI** command to serve the API in local development mode: 

  ```Shell
  dotnet run
  ```

* Be sure to be located at the API source path: `monopollo/Api/tests/`. Once there, execute this **dotnet CLI** command to serve the API in local development mode: 

  ```Shell
  dotnet test
  ```

<!-- TODO: dotnet publish -->

**Official documentation**:
https://dotnet.microsoft.com/en-us/apps/aspnet
