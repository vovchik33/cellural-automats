# cellural-automats

#### GitLab
[HTTPS](https://gitlab.com/volodymyrkr/cellural-automats.git)
[SSH](git@gitlab.com:volodymyrkr/cellural-automats.git)

#### GitHub
[HTTPS](https://github.com/vovchik33/cellural-automats.git)
[SSH](git@github.com:vovchik33/cellural-automats.git)


# SSH VCS Configs

### GitLab
[GitLab SSH Config](https://docs.gitlab.com/ee/ssh/)

### GitHub
[GitHub SSH Config](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

### Common VCS configuration

# SHH KEY ISSUE

[Stack Overflow solution](https://superuser.com/questions/988185/how-to-avoid-being-asked-enter-passphrase-for-key-when-im-doing-ssh-operatio)

[Setup SSH for Git](https://build-me-the-docs-please.readthedocs.io/en/latest/Using_Git/SetUpSSHForGit.html#step-1-check-if-you-have-existing-default-identity)

### Start ssh-agent if not started:

``` eval `ssh-agent -s` ```

### Generate a new SSH key:

``` ssh-keygen -t rsa -C "volodymyr.kravchenko.2000@gmail.com" ```

### Create a SSH config file

Using a text editor, edit the ``` ~/.ssh/config ``` file. Add the following entries to the configuration file using the following format:

```
# GitHub.com
Host github.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/volodymyrkr_rsa

# GitLab.com
Host gitlab.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/volodymyrkr_rsa
  
# BitBucket.org
Host bitbucket.org
  Preferredauthentications publickey
  IdentityFile ~/.ssh/volodymyrkr_rsa
```
  
#### Add already created key 

Add your private key using ssh-add

``` ssh-add ~/.ssh/volodymyrkr_rsa ```

Enter passphrase for /home/user/.ssh/volodymyrkr_rsa:
Identity added: /home/user/.ssh/volodymyrkr_rsa (/home/user/.ssh/volodymyrkr_rsa)

Check if the key is added (parameter is a lowercase L):

``` ssh-add -l ```

2048 55:96:1a:b1:31:f6:f0:6f:d8:a7:49:1a:e5:4c:94:6f
/home/user/.ssh/volodymyrkr_rsa (RSA)

Now you can use Git without extra passphrase prompts.

[Other ways](https://unix.stackexchange.com/questions/90853/how-can-i-run-ssh-add-automatically-without-password-prompt)


### Verify SSH git connection 

Try to connect to your Git server:

#### GitLab.com
``` ssh -T git@gitlab.com ```

#### GitHub.com
``` ssh -T git@github.com ```

