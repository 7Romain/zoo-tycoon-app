import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[appBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "teal";
  // private defaultHeight: number = 210;

  constructor(private el: ElementRef) {
    // this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input("appBorderCard") borderColor: string;
  // ou syntawe -> mais moins précises sans possibilité de donner un nom à l'input
  // @Input() pkmnBorderCard: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  // setHeight(height: number) {
  //   this.el.nativeElement.style.height = `${height}px`;
  // }
  setBorder(color: String) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
