# 🧬 template-agent

A clean, minimal starter template for building autonomous agents.

This template is designed for rapid prototyping of AI agents, MCP interactions, and logic flows with minimal setup.

---

## 🚀 What’s Inside?

- Simple CLI runner
- Async task loop
- Configurable logic via single function
- Pluggable MCP fetch + action layer
- Structured result logging

---

## 🔨 Use Cases

| Use Case                  | Description                                           |
|---------------------------|-------------------------------------------------------|
| Quick-start custom agent  | Fork and write logic in `runAgent()`                 |
| Workshop or tutorial base | Great for teaching agent creation                    |
| Mock simulation runner    | Easily extend with fake MCPs for offline dev         |

---

## 📁 Folder Structure

```
/src
  /lib          → MCP mock + logger
  agent.ts      → Main agent logic function
  index.ts      → Entrypoint + runner
```

---

## 🧠 Agent Logic

Inside `agent.ts` you define the behavior:

```ts
export async function runAgent() {
  const price = await get("price.mcp", { symbol: "ETH" });
  if (price > 3000) await act("alert", "ETH is over 3k!");
}
```

---

## 🧪 Usage

```bash
git clone https://github.com/buyproject/buy-template-agent.git
cd buy-template-agent
npm install
npm run dev
```

---

## 🧩 Customize It

You can:

- Replace mock MCPs with real fetchers
- Add execution logic (trades, votes, logs)
- Extend config via env or CLI flags
- Integrate with `buy-console` for REPL mode

---

## 🔄 Suggested Extensions

- Logging to file or cloud
- Scheduler via cron or MCP trigger
- Multi-agent orchestrator
