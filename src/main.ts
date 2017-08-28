import {app, BrowserWindow} from 'electron'
import path = require('path')
import url  = require('url')

let mainWindow = null  // Keep a global reference to prevent GC'ing.

function createAndSetMainWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600, show: false})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once("ready-to-show", () => {mainWindow.show()})

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createAndSetMainWindow)