import { getPluginList } from "./plugin";

export const getKeymapInfo = plugins =>
  getPluginList(plugins).map(plugin => ({
    KeymapInfo: plugin.KeymapInfo
  }));
