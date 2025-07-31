import { ModelViewer } from "./model-viewer";

export default function Hero() {
  return (
    <div className="container mx-auto -mt-16 flex h-screen flex-col content-center justify-center px-4 py-5 text-center">
      <ModelViewer />
      <div>
        <span>Hi it's leo!</span>
      </div>
    </div>
  );
}
