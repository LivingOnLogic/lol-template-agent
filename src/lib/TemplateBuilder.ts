type AgentTemplate = {
  name: string;
  logic: string;
  modules: string[];
};

export class TemplateBuilder {
  constructor() {}

  generate(template: AgentTemplate): string {
    return \`// Generated Agent: \${template.name}
import { Agent } from "@lol/sdk";

const agent = new Agent({
  name: "\${template.name}",
  modules: [\${template.modules.map(m => \`"\${m}"\`).join(", ")}],
  logic: async (ctx) => {
    // Logic: \${template.logic}
    const price = await ctx.fetch("price.mcp", { token: "ETH" });
    if (price < 2000) {
      await ctx.execute("swap.mcp", {
        type: "swap",
        from: "USDC",
        to: "ETH",
        amount: 0.5
      });
    }
  }
});

agent.run();\`;
  }
}