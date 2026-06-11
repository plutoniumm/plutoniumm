#!/usr/bin/env bash
# Eastwood one-line installer — served at https://manav.ch/eastwood.sh
#
# PLACEHOLDER: the real installer is maintained in the eastwood repo and will
# replace this file. For now it points you at the working Homebrew install.
set -euo pipefail

cat <<'MSG'
eastwood: the curl installer isn't wired up yet.

Install via Homebrew instead:

  brew tap plutoniumm/eastwood https://github.com/plutoniumm/eastwood
  brew install eastwood

Or from source (Go 1.25+):

  go install github.com/plutoniumm/eastwood/cmd/eastwood@latest
MSG
exit 0
