NODE ?= node

test:
	@$(NODE) ./node_modules/.bin/mocha \
		--reporter spec \
		--slow 2s \
		--harmony-proxies \
		--bail

.PHONY: test
