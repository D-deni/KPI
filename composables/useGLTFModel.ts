import {GLTFLoader, OBJLoader} from "three-stdlib";
export function useGLTFModel() {
  const gltfLoader = new GLTFLoader()

  function load(url: string){
    return new Promise((resolve, reject) => {
      gltfLoader.load(url, resolve, undefined, reject)
    })
  }
  return {
    load
  }
}