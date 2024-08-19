/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class Image {
  readonly width: number
  readonly height: number
  cropSync(x: number, y: number, width: number, height: number): Image
  crop(x: number, y: number, width: number, height: number): Promise<Image>
  toPngSync(copyOutputData?: boolean | undefined | null): Buffer
  toPng(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toJpegSync(copyOutputData?: boolean | undefined | null): Buffer
  toJpeg(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toBmpSync(copyOutputData?: boolean | undefined | null): Buffer
  toBmp(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toRawSync(copyOutputData?: boolean | undefined | null): Buffer
  toRaw(copyOutputData?: boolean | undefined | null): Promise<Buffer>
}
export class Monitor {
  /** Unique identifier associated with the screen. */
  readonly id: number
  /** Unique identifier associated with the screen. */
  readonly name: string
  /** The screen x coordinate. */
  readonly x: number
  /** The screen y coordinate. */
  readonly y: number
  /** The screen pixel width. */
  readonly width: number
  /** The screen pixel height. */
  readonly height: number
  /** Can be 0, 90, 180, 270, represents screen rotation in clock-wise degrees. */
  readonly rotation: number
  /** Output device's pixel scale factor. */
  readonly scaleFactor: number
  /** The screen refresh rate. */
  readonly frequency: number
  /** Whether the screen is the main screen */
  readonly isPrimary: boolean
  static all(): Array<Monitor>
  static fromPoint(x: number, y: number): Monitor | null
  captureImageSync(): Image
  captureImage(): Promise<Image>
}
export class Window {
  /** The window id */
  readonly id: number
  /** The window app name */
  readonly appName: string
  /** The window title */
  readonly title: string
  /** The window current monitor */
  readonly currentMonitor: Monitor
  /** The window x coordinate. */
  readonly x: number
  /** The window x coordinate. */
  readonly y: number
  /** The window pixel width. */
  readonly width: number
  /** The window pixel height. */
  readonly height: number
  /** The window is minimized. */
  readonly isMinimized: boolean
  /** The window is maximized. */
  readonly isMaximized: boolean
  static all(): Array<Window>
  captureImageSync(): Image
  captureImage(): Promise<Image>
}
