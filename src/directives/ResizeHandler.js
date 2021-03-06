import store from 'vuex-store'

export default {
  inserted: function (el) {
    let getWindowMatch = () => {
      return window.matchMedia(store.getters['shared/config'].windowMatchSizeLg).matches
    }

    let prevMatchlg = getWindowMatch()
    let sidebar = el.querySelector('.vuestic-sidebar')

    el.addEventListener('transitionend', function () {
      store.dispatch('shared/isToggleWithoutAnimation', false)
    })

    window.addEventListener('resize', function () {
      if (getWindowMatch() && !prevMatchlg) {
        sidebar.classList.remove('sidebar-hidden')
      } else if (!getWindowMatch() && prevMatchlg) {
        store.dispatch('shared/isToggleWithoutAnimation', true)
        sidebar.classList.add('sidebar-hidden')
      }
      prevMatchlg = getWindowMatch()
    })
  },
}

