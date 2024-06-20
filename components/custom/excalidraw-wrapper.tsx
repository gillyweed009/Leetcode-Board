"use client";
import { Excalidraw, convertToExcalidrawElements, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw"

//import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div className="h-screen">
      <Excalidraw >
        <WelcomeScreen/>
         <WelcomeScreen.Hints.HelpHint/>.
         <WelcomeScreen.Hints.MenuHint/>.
         <WelcomeScreen.Hints.ToolbarHint/>.

      <MainMenu>
        <MainMenu.DefaultItems.LoadScene/>
        <MainMenu.DefaultItems.ClearCanvas/>
        <MainMenu.DefaultItems.ToggleTheme/>
        <MainMenu.DefaultItems.Export/>
        <MainMenu.DefaultItems.SaveToActiveFile/>
        <MainMenu.DefaultItems.SaveAsImage/>
        <MainMenu.DefaultItems.Help/>
        <MainMenu.DefaultItems.ChangeCanvasBackground/>
      </MainMenu>
      </Excalidraw >
    </div>
  );
};
export default ExcalidrawWrapper;
