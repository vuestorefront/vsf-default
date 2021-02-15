<template>
  <div
    class="row between-xs middle-xs"
  >
    <div class="col-md-4 col-xs-2 middle-xs">
      <div>
        <hamburger-icon class="p15 icon bg-cl-secondary pointer" />
      </div>
    </div>
    <div class="col-xs-2 visible-xs">
      <search-icon class="p15 icon pointer" />
    </div>
    <div class="col-md-4 col-xs-4 center-xs pt5">
      <div>
        <logo width="auto" height="41px" />
      </div>
    </div>
    <div class="col-xs-2 visible-xs">
      <wishlist-icon class="p15 icon pointer" />
    </div>
    <div class="col-md-4 col-xs-2 end-xs">
      <div class="inline-flex right-icons">
        <search-icon class="p15 icon hidden-xs pointer" />
        <wishlist-icon class="p15 icon hidden-xs pointer" />
        <compare-icon class="p15 icon hidden-xs pointer" />
        <microcart-icon class="p15 icon pointer" />
        <account-icon class="p15 icon hidden-xs pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import SearchIcon from 'theme/components/core/blocks/Header/SearchIcon'
import Logo from 'theme/components/core/Logo'
import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'
import CompareIcon from 'theme/components/core/blocks/Header/CompareIcon'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import AccountIcon from 'theme/components/core/blocks/Header/AccountIcon'

export default {
  components: {
    HamburgerIcon,
    SearchIcon,
    Logo,
    WishlistIcon,
    CompareIcon,
    MicrocartIcon,
    AccountIcon
  }
}
</script>