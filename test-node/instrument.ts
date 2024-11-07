import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
	dsn: undefined,
	debug: true,
	// Add Performance Monitoring by setting tracesSampleRate
	// Set tracesSampleRate to 1.0 to capture 100% of transactions
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});
