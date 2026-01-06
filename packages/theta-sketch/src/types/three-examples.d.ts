// Type declarations for three.js examples modules
declare module 'three/examples/jsm/renderers/CSS3DRenderer' {
  import { Camera, Object3D, Scene } from 'three';

  export class CSS3DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;
    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
  }

  export class CSS3DSprite extends CSS3DObject {
    constructor(element: HTMLElement);
  }

  export interface CSS3DParameters {
    element?: HTMLElement;
  }

  export class CSS3DRenderer {
    constructor(parameters?: CSS3DParameters);
    domElement: HTMLElement;
    getSize(): { width: number; height: number };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
  }
}

declare module 'three/examples/jsm/renderers/CSS2DRenderer' {
  import { Camera, Object3D, Scene } from 'three';

  export class CSS2DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;
  }

  export class CSS2DRenderer {
    domElement: HTMLElement;
    getSize(): { width: number; height: number };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
  }
}
