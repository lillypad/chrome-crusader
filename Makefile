.PHONY: all
.PHONY: clean
.PHONY: docs

all: docs

py_deps:
	pip install --user -r requirements.txt

docs:
	cd docs/presentation/ && \
		pdflatex -shell-escape chrome-crusader.tex

clean: clean_docs

clean_docs:
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
