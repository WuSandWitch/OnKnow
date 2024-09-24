---
publish: true
---
# Pyenv


Version mange tool for [[Python]]

## Installation

### MacOS
```bash
brew install pyenv
```

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

### Windows
- Download Pyenv using git

```bash
git clone https://github.com/pyenv-win/pyenv-win.git "$HOME/.pyenv"
```

- Add pyenv to environment variable

```bash
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\\\\\\\\.pyenv\\\\\\\\pyenv-win\\\\\\\\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\\\\\\\\.pyenv\\\\\\\\pyenv-win\\\\\\\\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\\\\\\\\.pyenv\\\\\\\\pyenv-win\\\\\\\\","User")
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\\\\\\\\.pyenv\\\\\\\\pyenv-win\\\\\\\\bin;" + $env:USERPROFILE + "\\\\\\\\.pyenv\\\\\\\\pyenv-win\\\\\\\\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```