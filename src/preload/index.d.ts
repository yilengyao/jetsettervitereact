import { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  database: {
    fetchItems: () => Promise<ItemType[]>
    addItem: (item: ItemType) => Promise<ItemType>
    deleteItem: (id: number) => Promise<Boolean>
    markAsPacked: (id: number) => Promise<Boolean>
    markAllAsUnpacked: () => Promise<Boolean>
    deleteUnpackedItems: () => Promise<Boolean>
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
