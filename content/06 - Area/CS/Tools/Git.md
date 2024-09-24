---
publish: true
---


# Git

## SSL setting
toggle the ssl setting
```bash
git config --global http.sslVerify false
```

## SSH Key-gen

1. Generate public RSA key
    ```powershell
    ssh-keygen -o -t rsa -C "email@email.com"
    ```
2. Go to home path and copy the pub key in the `.ssh` folder
3. Add Public key to Github in setting page