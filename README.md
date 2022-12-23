# fizz-bun

This is a poc to demonstrate the use of [Bun](https://bun.sh)'s integrated tester, and compare it with Jest.

How to install Bun (only on Linux, macOS and WSL):

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

To run the tests:

```bash
bun test:bun
```

To run the tests benchmark Bun vs Jest:

```bash
bash ./benchmark.sh
```
