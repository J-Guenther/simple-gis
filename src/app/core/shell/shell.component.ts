import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("wrapperContainer") wrapperContainer: ElementRef
  @ViewChild("mapContainer") mapContainer: ElementRef
  @ViewChild("tableContainer") tableContainer: ElementRef
  @ViewChild("mainContainer") mainContainer: ElementRef
  @ViewChild("sidebarRight") sidebarRight: ElementRef
  @ViewChild("sidebarLeft") sidebarLeft: ElementRef
  mapResizeObserver: ResizeObserver
  leftSidePanelObserver: ResizeObserver
  rightSidePanelObserver: ResizeObserver

  isMobile = false
  showTable = true

  @Output('mapSizeChange') mapSizeEvent = new EventEmitter()

  constructor(private breakPointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.breakPointObserver.observe([Breakpoints.WebPortrait, Breakpoints.Tablet, Breakpoints.Handset]).subscribe((state: BreakpointState) => {
      this.isMobile = state.matches
    })
    this.breakPointObserver.observe([Breakpoints.Web, Breakpoints.TabletPortrait]).subscribe((state: BreakpointState) => {
      this.showTable = state.matches
    })
  }

  ngAfterViewInit() {
    this.onResize(null)
    this.initializeResizeObservers()
  }

  ngOnDestroy() {
    this.mapResizeObserver.unobserve(this.mapContainer.nativeElement)
  }

  initializeResizeObservers() {
    this.mapResizeObserver = new ResizeObserver(() => {
      if (!this.showTable) {
        return
      }
      this.mapSizeEvent.emit()
    })
    this.mapResizeObserver.observe(this.mapContainer.nativeElement)

    this.rightSidePanelObserver = new ResizeObserver(() => {
      const maxPanelWidth = this.calculateMaxPanelWidthRight();
      this.sidebarRight.nativeElement.style.maxWidth = maxPanelWidth + "px"
      this.mapSizeEvent.emit()
    })
    this.rightSidePanelObserver.observe(this.sidebarRight.nativeElement)

    this.leftSidePanelObserver = new ResizeObserver(() => {
      const maxPanelWidth = this.calculateMaxPanelWidthLeft();
      this.sidebarLeft.nativeElement.style.maxWidth = maxPanelWidth + "px"
      this.mapSizeEvent.emit()
    })
    this.leftSidePanelObserver.observe(this.sidebarLeft.nativeElement)
  }

  private calculateMaxPanelWidthLeft() {
    const minMarginWidth = this.mainContainer.nativeElement.offsetWidth / 100 * 80
    const maxPanelWidth = this.mainContainer.nativeElement.offsetWidth - minMarginWidth
    return maxPanelWidth;
  }

  private calculateMaxPanelWidthRight() {
    const minMarginWidth = this.mainContainer.nativeElement.offsetWidth / 100 * 50
    const maxPanelWidth = this.mainContainer.nativeElement.offsetWidth - minMarginWidth
    return maxPanelWidth;
  }

  onResize($event: any) {
    this.mainContainer.nativeElement.style.maxHeight = (this.wrapperContainer.nativeElement.offsetHeight - 84) + "px"
  }
}
