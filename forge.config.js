module.exports = {
  packagerConfig: {
    asar: true,
    icon: "src/images/youtube_music_icon_v4.ico",
    setupIcon: "src/images/youtube_music_icon_v4.ico",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        icon: "src/images/youtube_music_icon_v4.ico",
        setupIcon: "src/images/youtube_music_icon_v4.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        icon: "src/images/youtube_music_icon_v4.ico",
        setupIcon: "src/images/youtube_music_icon_v4.ico",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        icon: "src/images/youtube_music_icon_v4.ico",
        setupIcon: "src/images/youtube_music_icon_v4.ico",
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        icon: "src/images/youtube_music_icon_v4.ico",
        setupIcon: "src/images/youtube_music_icon_v4.ico",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
