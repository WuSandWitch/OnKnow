---
publish: true
---


# iterm2 

A better mac terminal.
## Installation
```bash
brew install iterm2 --cask
```


- Setting up the theme [Tokyo Night](https://github.com/tokyo-night/tokyo-night-vscode-theme?tab=readme-ov-file)
- Setting up the Font
```bash
git clone https://github.com/powerline/fonts.git ~/.powerline_fonts
cd ~/.powerline_fonts
./install.sh
```



## Setup
https://medium.com/nitas-learning-journey/mac%E7%B5%82%E7%AB%AF%E6%A9%9F-terminal-%E8%A8%AD%E5%AE%9A-iterm2-ba63efd0df6a


### Setting up zsh 
```bash
brew install zsh
```

### Setting up Oh-my-zsh

### Installation
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
#### Change the theme
```bash
vim ~/.zshrc
```

```
ZSH_THEME="**agnoster**"
```


### Setting up Powerlevel10k

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

```bash
vim ~/.zshrc
```

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```
re-setting up
```bash
p10k configure
```

