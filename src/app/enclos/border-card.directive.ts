import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[appBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "teal";

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }

  @Input("appBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
