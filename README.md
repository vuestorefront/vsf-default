## vsf-default
Vue Storefront Default theme (please consider vsf-capybara instead)

## 🔌  Installation
To be able to use new Default theme in your Vue Storefront installation, you need to:

1. Install `lerna` globally:

   ```
   npm install -g lerna
   ```

   or

   ```
   yarn global add lerna
   ```

1. Configure `vsf-default` repository as a git submodule in theme path of your Vue Storefront workspace, and then track `master` branch:

   ```
   git submodule add -b master git@github.com:DivanteLtd/vsf-default.git src/themes/default
   ```

1. Fetch all the data:

   ```
   git submodule update --init --remote
   ```

1. Update Vue Storefront configuration by copying `local.json` file from `vsf-default` to root `config` directory.
1. Update TypeScript compiler option in `tsconfig.json` in root directory: change value for `compilerOptions`**.**`paths`**.**`theme/*` from default theme `["src/themes/default/*"]` to brand new Default theme: `["src/themes/default/*"]`.
1. Download all dependencies and start development server:

   ```
   lerna bootstrap && yarn dev
   ```

1. That’s all! Now after opening your development server (http://localhost:3000 by default) you should see Vue Storefront with Default theme!  🎉
