import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import * as Cronitor from "@cronitorio/cronitor-rum-js";

if (ExecutionEnvironment.canUseDOM) {
  Cronitor.load("ab7ee867e32de637689fa328231ca993");
  Cronitor.track("Home");
}
