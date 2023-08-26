const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: __dirname + "/images/youtube_music_icon_v4.ico",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
    },
  });
  win.loadURL("https://music.youtube.com");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
