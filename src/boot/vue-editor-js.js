import { boot } from "quasar/wrappers";
import Editor from "vue-editor-js/src/index";

export default boot(({ app }) => {
  app.use(Editor);
});
