NODE ?= node

test:
	@$(NODE) ./node_modules/.bin/mocha \
		--reporter spec \
		--slow 2s \
		--harmony-generators \
		--harmony-proxies \
		--bail

.PHONY: test
