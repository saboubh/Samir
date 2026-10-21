import { NEVER } from 'rxjs';
import { AnimateService, getVisibilityRatio } from './animate.service';

function rect(top: number, left: number, width: number, height: number): ClientRect {
  return {
    top,
    left,
    right: left + width,
    bottom: top + height,
    width,
    height
  };
}

class ExposedAnimateService extends AnimateService {
  get currentViewRect(): ClientRect {
    return this.viewRect;
  }
}

describe('AnimateService visibility', () => {
  it('keeps viewport and element rectangles in viewport coordinates', () => {
    const viewport = {
      change: () => NEVER,
      getViewportSize: () => ({ width: 1280, height: 720 }),
      getViewportRect: () => rect(1500, 0, 1280, 720)
    };
    const service = new ExposedAnimateService(null, viewport as any, null);

    expect(service.currentViewRect).toEqual(rect(0, 0, 1280, 720));
  });

  it('returns 1 for a fully visible element', () => {
    expect(getVisibilityRatio(rect(100, 100, 200, 100), rect(0, 0, 1280, 720))).toBe(1);
  });

  it('returns the visible proportion for a partially clipped element', () => {
    expect(getVisibilityRatio(rect(-50, 100, 200, 100), rect(0, 0, 1280, 720))).toBe(0.5);
  });

  it('can fully reveal an element taller than the viewport', () => {
    expect(getVisibilityRatio(rect(-600, 0, 1280, 2000), rect(0, 0, 1280, 720))).toBe(1);
  });

  it('handles zero-area elements without returning NaN', () => {
    expect(getVisibilityRatio(rect(0, 0, 0, 0), rect(0, 0, 1280, 720))).toBe(0);
  });
});
