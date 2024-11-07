# Bun
Using bun version 1.1.7
```
cd test-bun
bun install
bun run index.ts
```


# Node
Using v23.1.0
```
cd test-node
npm install
node --experimental-strip-types index.ts
```


## Errors
bun error is not caught
![alt text](image-1.png)

## Traces

### Spans are created for fetch in node
![alt text](image.png)

### No spans are created for fetch in Bun
![alt text](image-2.png)
