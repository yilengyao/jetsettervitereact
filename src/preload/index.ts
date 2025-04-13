import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

// Custom APIs for renderer
const api = {
  database: {
    fetchItems: () => {
      return electronAPI.ipcRenderer.invoke('database:fetch-items');
    },
    addItem: (item) => {
      return electronAPI.ipcRenderer.invoke('database:add-item', item);
    },
    deleteItem: (id) => {
      return electronAPI.ipcRenderer.invoke('database:delete-item', id);
    },
    markAsPacked: (id) => {
      return electronAPI.ipcRenderer.invoke('database:mark-as-packed', id);
    },
    markAllAsUnpacked: () => {
      return electronAPI.ipcRenderer.invoke('database:mark-all-as-unpacked');
    },
    deleteUnpackedItems: () => {
      return electronAPI.ipcRenderer.invoke('database:delete-unpacked-items');
    }
  }
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
