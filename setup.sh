#!/bin/bash
set -e

# Set the version of mdbook and mdbook-tabs
MDBOOK_VERSION=0.4.36
MDBOOK_TABS_VERSION=0.2.1


echo "Installing mdBook..."
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf -y | sh
rustup update


# Check if mdBook is already installed and which version
if command -v mdbook >/dev/null 2>&1; then
  CURRENT_VERSION=$(mdbook --version | awk '{print $2}')
  if [ "$CURRENT_VERSION" = "v$MDBOOK_VERSION" ]; then
    echo "\n✅ mdBook version $CURRENT_VERSION is already installed."
  else
    echo "\n⚠️  mdBook version $CURRENT_VERSION is installed, but version $MDBOOK_VERSION is required."
    read -p "Do you want to reinstall mdBook with version $MDBOOK_VERSION? (y/n): " choice
    if [ "$choice" = "y" ]; then
      echo "\nReinstalling mdBook..."
      cargo install --force --version "$MDBOOK_VERSION" mdbook
    else
      echo "\n❌ mdBook version mismatch. Setup aborted."
      exit 1
    fi
  fi
else
  echo "\nInstalling mdBook v$MDBOOK_VERSION..."
  cargo install --version "$MDBOOK_VERSION" mdbook
fi
 
echo "\nInstalling mdBook Tabs..."
cargo install mdbook-tabs
 
echo "\n✅ Setup complete!"