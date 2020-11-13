import Vue from 'vue'
import config from 'config'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { isServer } from '@vue-storefront/core/helpers'

export function supportWebp () {
  if (isServer) return false

  let support = true
  const d = document

  try {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  } catch (err) {
    support = false
  }

  return support
};

export function getPathForStaticPage (path: string) {
  const { storeCode } = currentStoreView()
  const isStoreCodeEquals = storeCode === config.defaultStoreCode

  return isStoreCodeEquals ? `/i${path}` : path
}

export const windowHelper = Vue.observable({
  height: 0
})

!isServer && window.addEventListener('resize', () => { windowHelper.height = window.innerHeight })
