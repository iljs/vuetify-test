import instance from './instance'
import fileInstance from './instance'

import authModule from './modules/auth'
import fileModule from './modules/file'

export default {
  auth: authModule(instance),
  file: fileModule(fileInstance)
}

