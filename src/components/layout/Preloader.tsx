import { site } from "@/content/site";
import { LogoMark } from "@/components/ui/Icons";

// Чистый CSS: работает до загрузки JS. Зелёный слой заливает экран слева направо
// и открывает светлую копию логотипа, поэтому он контрастен фону на каждом кадре.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-layer">
        <LogoMark className="preloader-mark text-accent" strokeWidth={1.8} />
        <span className="preloader-name">{site.brand}</span>
      </div>
      <div className="preloader-layer preloader-fill">
        <LogoMark className="preloader-mark" strokeWidth={1.8} />
        <span className="preloader-name">{site.brand}</span>
      </div>
    </div>
  );
}
