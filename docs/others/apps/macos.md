# MacOs ヽ(♡‿♡)ノ
Almost all the apps are open-source, with links provided to their GitHub repositories.

## Desktop
GUI applications that run locally on a computer
### Development
- [iTerm2](https://github.com/gnachman/iTerm2) — Feature-rich terminal replacement for macOS
- [OrbStack](https://github.com/orbstack) — Fast, light, simple Docker containers & Linux machines

### Quality of life
- [Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements) — Advanced keyboard customizations and remapping
- [Maccy](https://github.com/p0deje/Maccy) — Lightweight clipboard manager with fast search
- [Rectangle](https://github.com/rxhanson/Rectangle) — Move and resize windows on macOS with keyboard shortcuts and snap areas

### Other
- [IINA](https://github.com/iina/iina) — Modern and powerful media player for macOS
- [Eul](https://github.com/gao-sun/eul) — System monitoring tool for CPU, memory, and more

## Console
Text-based application that runs in a terminal or command prompt
- [Homebrew](https://github.com/Homebrew/brew) — The missing package manager for macOS

## Install via brew
```bash
echo '
tap "homebrew/bundle"
brew "btop"
brew "eza"
brew "git"
brew "neovim"
cask "azure-data-studio"
cask "bitwarden"
cask "bruno"
cask "drawio"
cask "firefox"
cask "flameshot"
cask "google-chrome"
cask "iina"
cask "iterm2"
cask "jellyfin-media-player"
cask "jetbrains-toolbox"
cask "keka"
cask "orbstack"
cask "rectangle"
cask "transmission"
cask "vscodium"
cask "windows-app"
cask "maccy"
' > Brewfile    
```
```bash
brew bundle install
```