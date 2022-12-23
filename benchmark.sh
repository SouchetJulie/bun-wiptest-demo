#!/usr/bin/env zsh
# time both test:jest and test:bun, and displays the times
echo "BUN testing time:"
time bun test:bun &>/dev/null
echo "-------"
echo ""
echo "JEST testing time:"
time bun test:jest &>/dev/null
