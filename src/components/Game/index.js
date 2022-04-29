export { default } from "./Game";

// This file is used to avoid name repeatition while importing file
// In this case in App.js while importing Game.js file -> "import Game from "./src/components/Game/Game""
// Here "Game" in Game/Game is getting repeated. To avoid this we create index.js file in the Game folder and
// then import it as "import Game from "./src/components/Game""
