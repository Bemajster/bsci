export class PluginLoader {
  plugins = []
  constructor(p_plugins) {
    this.plugins = p_plugins
  }

  useAddRules() {
    this.plugins.forEach((plugin) => {
      plugin.addRules()
    })
  }

  useSubRules() {
    this.plugins.forEach((plugin) => {
      plugin.subRules()
    })
  }

  useMulRules() {
    this.plugins.forEach((plugin) => {
      plugin.mulRules()
    })
  }

  useDivRules() {
    this.plugins.forEach((plugin) => {
      plugin.divRules()
    })
  }
}
