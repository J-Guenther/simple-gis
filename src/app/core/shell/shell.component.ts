import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("mapContainer") mapContainer: ElementRef
  @ViewChild("mainContainer") mainContainer: ElementRef
  @ViewChild("sidebarRight") sidebarRight: ElementRef
  @ViewChild("sidebarLeft") sidebarLeft: ElementRef
  mapResizeObserver: ResizeObserver
  leftSidePanelObserver: ResizeObserver
  rightSidePanelObserver: ResizeObserver

  constructor() {
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    this.initializeResizeObservers()

  }

  ngOnDestroy() {
    this.mapResizeObserver.unobserve(this.mapContainer.nativeElement)
  }

  initializeResizeObservers() {
    this.mapResizeObserver = new ResizeObserver(entries => {
      const height = entries[0].contentRect.height
      const minTableHeight = this.mainContainer.nativeElement.offsetHeight / 100 * 30
      const maxMapHeight = this.mainContainer.nativeElement.offsetHeight - minTableHeight
      if (height > maxMapHeight) {
        this.mapContainer.nativeElement.style.maxHeight = maxMapHeight + "px"
      }
    })
    this.mapResizeObserver.observe(this.mapContainer.nativeElement)

    this.rightSidePanelObserver = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width
      const minMarginWidth = this.mainContainer.nativeElement.offsetWidth / 100 * 50
      const maxPanelWidth = this.mainContainer.nativeElement.offsetWidth - minMarginWidth
      if (width > maxPanelWidth) {
        this.sidebarRight.nativeElement.style.maxWidth = maxPanelWidth + "px"
      }
    })
    this.rightSidePanelObserver.observe(this.sidebarRight.nativeElement)

    this.leftSidePanelObserver = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width
      const minMarginWidth = this.mainContainer.nativeElement.offsetWidth / 100 * 80
      const maxPanelWidth = this.mainContainer.nativeElement.offsetWidth - minMarginWidth
      if (width > maxPanelWidth) {
        this.sidebarLeft.nativeElement.style.maxWidth = maxPanelWidth + "px"
      }
    })
    this.leftSidePanelObserver.observe(this.sidebarLeft.nativeElement)
  }



}
