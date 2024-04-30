#!/bin/bash

git add .

mesagem="$1"
if [ -z "$mensagem" ]; then
  echo "Informe uma mensagem de commit:"
  read -r mensagem
fi
git commit -m "$mensagem"

SENHA_SSH=$(cat /home/gustavo/.ssh/pass_ssh.txt)

git push << EOF
$SENHA_SSH
EOF
