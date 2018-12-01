/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  authenticated: false,
  notificationInfo: {
    type: '',
    message: '',
    title: ''
  },
  formData: {
    provider: {},
    locations: null
  },
  isProcessing: false
}
