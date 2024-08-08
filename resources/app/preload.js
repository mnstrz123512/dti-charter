const{contextBridge, ipcRender} = require('electron');

contextBridge.exposeInMainWorld('api',{
    title: "DTI Citizen's Charter",  
    createNote: (data) => ipcRender.invoke('create-file', data)
})  