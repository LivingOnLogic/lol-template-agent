import { TemplateBuilder } from './lib/TemplateBuilder';

const builder = new TemplateBuilder();

const jsonTemplate = {
  name: "simple-swapper",
  logic: "If ETH price < 2000, buy 0.5 ETH with USDC",
  modules: ["price.mcp", "swap.mcp"]
};

const code = builder.generate(jsonTemplate);
console.log(code);
