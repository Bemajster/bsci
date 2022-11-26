import { PluginLoader } from "./index"

export let currentPluginLoader
export let currentSettings = {
  autoReduceFractions: true,
}

export function init(settings, pluginLoader?: PluginLoader) {
  currentPluginLoader = pluginLoader
  currentSettings = settings
}
