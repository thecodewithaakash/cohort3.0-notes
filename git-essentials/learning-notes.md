
-  GitHub is a platform for collaborative coding and version control.
-  Git means manage your own code or program or project at your own system.
- Github is platform for collaborative coding but Git is used track every change made to your project.
- In Git, “version” refers to the specific state of your codebase marked by commits, tags, or releases. Git itself also has a software version (e.g., git version 2.44.0) that follows the major.minor.patch format.


- check version of git: git --version or git -v

### for new user of "Git":
- initialize github username -> git config --global user.name "name"
- provide email which registered in github account -> git config --global user.email "example@gmail.com""
- which code editor we are using --> git config --global core.editor "code -wait"
    -  → Sets VS Code as the default Git editor, and waits until you close it before continuing.
- git config --global core.autocrlf "input"
    - git config --global core.autocrlf "input" → ensures consistent line endings 
        between Windows (CRLF) and Unix/Linux (LF) systems to avoid merge issues.
- check in edit mode: git config --global -e
- git config --list


