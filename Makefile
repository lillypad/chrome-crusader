.PHONY: all
.PHONY: clean
.PHONY: docs
.PHONY: chromium
.PHONY: chrome

all: py_deps lint chromium docs

chromium: py_deps lint build_chromium

chrome: py_deps lint build_chrome

lint:
	@echo -e "\e[104m Code Checks Started...  \e[0m"
	find src/chrome-optimizer/ -type f -name "*.js" | xargs jshint
	find src/ -type f -name "*.py" | xargs pylint -E
	@echo -e "\e[30;48;5;82m Code Checks Passed! \e[0m"

py_deps:
	@echo -e "\e[104m Installing Python Dependancies...  \e[0m"
	pip install --user -r requirements.txt
	@echo -e "\e[30;48;5;82m Install Dependancies Completed! \e[0m"

docs:
	@echo -e "\e[104m Building Documentation...  \e[0m"
	cd docs/presentation/ && \
		pdflatex -shell-escape chrome-crusader.tex
	mkdir -p bin/presentation/
	cd docs/presentation/ && \
		mv chrome-crusader.pdf ../../bin/presentation/
	@echo -e "\e[30;48;5;82m Build Documentation Complete! \e[0m"

build_chromium:
	@echo -e "\e[104m Packing Chromium Extension...  \e[0m"
	DISPLAY=:0.0 chromium --pack-extension=src/chrome-optimizer
	mkdir -p bin/extension/chromium/
	cd src/ && \
		mv *.crx ../bin/extension/chromium/ && \
		mv *.pem ../bin/extension/chromium/
	@echo -e "\e[30;48;5;82m Chromium Extension Packing Completed! \e[0m"

build_chrome:
	@echo -e "\e[104m Packing Chrome Extension...  \e[0m"
	DISPLAY=:0.0 chrome --pack-extension=src/chrome-optimizer
	mkdir -p bin/extension/chrome/
	cd src/ && \
		mv *.crx ../bin/extension/chrome/ && \
		mv *.pem ../bin/extension/chrome/
	@echo -e "\e[30;48;5;82m Chrome Extension Packing Completed! \e[0m"

clean: clean_docs

clean_docs:
	@echo -e "\e[104m Cleaning...  \e[0m"
	cd docs/presentation/ && \
		rm -f *.aux && \
		rm -f *.log && \
		rm -f *.out && \
		rm -f *.nav && \
		rm -f *.snm && \
		rm -f *.toc && \
		rm -f *.vrb && \
		rm -f *.pdf && \
		rm -rf _minted-chrome-crusader/
	rm -rf bin/
	cd src/ && \
		rm -f *.crx && \
		rm -f *.pem
	@echo -e "\e[30;48;5;82m Clean Completed! \e[0m"
