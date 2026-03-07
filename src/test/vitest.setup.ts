import '@testing-library/jest-dom'

// Mock ResizeObserver
class ResizeObserverMock implements ResizeObserver {
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element): void {
    this.callback([{ target, contentRect: target.getBoundingClientRect() } as ResizeObserverEntry], this);
  }

  unobserve(target: Element): void {
    void target;
  }

  disconnect(): void {}
}

// Assign globally for jsdom
(globalThis as unknown as { ResizeObserver: typeof ResizeObserver }).ResizeObserver =
  ResizeObserverMock as unknown as typeof ResizeObserver;
