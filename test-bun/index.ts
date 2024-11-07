import "./instrument.ts";
import * as Sentry from "@sentry/bun";

await Sentry.startSpan(
	{
		op: "test",
		name: "My First Test Transaction in bun",
	},
	async () => {
		await fetch(`https://google.com`);
	},
);

const sleep = () => new Promise((res) => setTimeout(() => res("hi"), 3000));

await sleep();
throw new Error("I just crashed Bun");
