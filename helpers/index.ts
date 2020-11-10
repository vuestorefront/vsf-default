import Vue from 'vue'
import config from 'config'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { isServer } from '@vue-storefront/core/helpers'

export function getPathForStaticPage (path: string) {
  const { storeCode } = currentStoreView()
  const isStoreCodeEquals = storeCode === config.defaultStoreCode

  return isStoreCodeEquals ? `/i${path}` : path
}

export const windowHelper = Vue.observable({
  height: 0
})

!isServer && window.addEventListener('resize', () => { windowHelper.height = window.innerHeight })
