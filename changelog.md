# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.13] - UNRELEASED

### Added
- Fix manageQuantity property type (#27)
- Add vue-lazyload dependency (#36)
- Use `lazyVisibility` for homepage to load new collection (#50)
- Response images on homepage & WebP
- HeadImage.vue as a functional component
- Get rid of banners & headimage jsons
- Separated MainHeader to two components & lazy loading them
- Lazy loading overlay component
- Lazy loading Notification component
- Lazy loading Auth components in the Auth Modal
- Offline badge in a separate bundle
- Lazy load language switcher
- Lazy load loader in default layout
- Added `VueObserveVisibility` dependency

### Changed / Improved

- Updated Vuex to 3.5.1
- Refactor of some parts of views
- Loading `homepage` vuex module only when needed (on 2 views)
- Functional LoaderScoped.vue
- Remove import phoneNum validator from shipping and payment

## [1.12.2] - UNRELEASED

### Added
- Fixed broken scrolling in Search Panel on iOS (#18)
- Fixed side swiping after selecting 'sort by' (#24)
- Added window height helper for scrolling on iOS when filters on Category Page are open (#25)
- Added phone number validation in checkout block (#30)
- Loseless optimization of some assets
- Removed legacy parts of homepage slider
- Preconnect for pwacompat
- Using WebP on homepage if browser supports it
- Get rid of Onboard component in home page
- More lazy hydration in layout and home

### Changed / Improved
- Fixed closing sidebar after clicking on go to checkout button (#28)
