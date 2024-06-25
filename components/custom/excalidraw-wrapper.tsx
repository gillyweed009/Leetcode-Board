"use client";
import {
  Excalidraw,
  convertToExcalidrawElements,
  WelcomeScreen,
  MainMenu,
  serializeAsJSON, getSceneVersion,
} from "@excalidraw/excalidraw"

import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState,BinaryFiles} from  "@excalidraw/excalidraw/types/types"

//import "@excalidraw/excalidraw/index.css";
interface ExcalidrawWrapperProps {
  identifier :string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({identifier}) => {
  let lastSceneVersion : number = -1
  const onchange = (
    elements : readonly ExcalidrawElement[],
    appState : AppState,
    files : BinaryFiles
    ): void => {
    const sceneVersion= getSceneVersion(elements)
    if(sceneVersion > lastSceneVersion){
      console.log("persisted to local storage")
      const content = serializeAsJSON(elements,appState,files,"local")
      localStorage.setItem("excalidraw" + "_" + (identifier) , content)
      lastSceneVersion = sceneVersion
    }
  }

  const retrieveInitialData = ()  => {
    const content : string|null = localStorage.getItem("excalidraw" + "_" + (identifier))
    if (content != null) {
      return JSON.parse(content)
    }
  }

  return (
    <div className="h-screen">
      <Excalidraw onChange={onchange} initialData={retrieveInitialData()}  >
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
