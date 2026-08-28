// src/components/system/overlay/mobile-menu/useMenuStateMachine.ts

export type MenuState = 'closed' | 'opening' | 'open' | 'closing';

export class MenuStateMachine {
  private state: MenuState = 'closed';
  private stack: string[] = ['root'];
  
  // DOM Elements
  private container: HTMLElement | null = null;
  private slider: HTMLElement | null = null;
  private menuBtn: HTMLElement | null = null;
  private focusableElements: HTMLElement[] = [];
  private firstFocusable: HTMLElement | null = null;
  private lastFocusable: HTMLElement | null = null;

  constructor(
    containerSelector: string,
    sliderSelector: string,
    btnSelector: string
  ) {
    // Wait for DOM to be ready
    setTimeout(() => {
      this.container = document.querySelector(containerSelector);
      this.slider = document.querySelector(sliderSelector);
      this.menuBtn = document.querySelector(btnSelector);
      this.initFocusTrap();
    }, 0);
  }

  public toggle() {
    if (this.state === 'closed' || this.state === 'closing') {
      this.open();
    } else {
      this.close();
    }
  }

  public open() {
    if (this.state === 'open' || this.state === 'opening') return;
    this.state = 'opening';
    
    // UI Updates
    this.menuBtn?.setAttribute('aria-expanded', 'true');
    this.menuBtn?.classList.add('menu-open');
    
    this.container?.classList.remove('opacity-0', 'pointer-events-none');
    
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Next frame for transition
    requestAnimationFrame(() => {
      this.container?.classList.add('menu-active');
      this.state = 'open';
      this.firstFocusable?.focus();
    });
  }

  public close() {
    if (this.state === 'closed' || this.state === 'closing') return;
    this.state = 'closing';
    
    this.menuBtn?.setAttribute('aria-expanded', 'false');
    this.menuBtn?.classList.remove('menu-open');
    this.container?.classList.remove('menu-active');
    
    // Reset Slider
    this.slider?.classList.remove('-translate-x-1/2');
    this.stack = ['root'];
    
    // Wait for transition end
    setTimeout(() => {
      this.container?.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
      this.state = 'closed';
      this.menuBtn?.focus();
    }, 400); // match CSS duration
  }

  public drillDown(targetId: string) {
    if (!this.slider) return;
    
    // Hide all submenus first
    const subPanes = this.container?.querySelectorAll('.submenu-pane');
    subPanes?.forEach(pane => pane.classList.add('hidden'));
    
    // Show target
    const target = this.container?.querySelector(`#${targetId}`);
    if (target) {
      target.classList.remove('hidden');
      this.stack.push(targetId);
      this.slider.classList.add('-translate-x-1/2');
      
      // Update Focus trap to new pane
      setTimeout(() => this.initFocusTrap(target as HTMLElement), 100);
    }
  }

  public goBack() {
    if (!this.slider || this.stack.length <= 1) return;
    
    this.stack.pop(); // Remove current
    this.slider.classList.remove('-translate-x-1/2');
    
    // Update Focus trap to root
    setTimeout(() => {
      const rootPane = this.container?.querySelector('.root-pane') as HTMLElement;
      if (rootPane) this.initFocusTrap(rootPane);
    }, 400);
  }

  // --- Accessibility: Focus Trap ---
  private initFocusTrap(containerElement: HTMLElement | null = this.container) {
    if (!containerElement) return;
    
    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select';
    this.focusableElements = Array.from(containerElement.querySelectorAll(focusableSelectors));
    
    if (this.focusableElements.length > 0) {
      this.firstFocusable = this.focusableElements[0];
      this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
      
      containerElement.addEventListener('keydown', this.handleTabKey);
    }
  }

  private handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === this.firstFocusable) {
        this.lastFocusable?.focus();
        e.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === this.lastFocusable) {
        this.firstFocusable?.focus();
        e.preventDefault();
      }
    }
    
    if (e.key === 'Escape') {
      this.close();
    }
  }
}
