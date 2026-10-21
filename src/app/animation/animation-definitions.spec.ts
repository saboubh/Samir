import { bounce, flip, jello } from './attention-seekers';
import { fadeIn, zoomIn } from './entrances';
import { hinge, zoomOut } from './exits';

function visit(value: any, callback: (entry: any) => void) {
  callback(value);

  if (Array.isArray(value)) {
    value.forEach(entry => visit(entry, callback));
  }
  else if (value && typeof value === 'object') {
    Object.keys(value).forEach(key => visit(value[key], callback));
  }
}

function collectStrings(value: any): string[] {
  const strings: string[] = [];
  visit(value, entry => {
    if (typeof entry === 'string') {
      strings.push(entry);
    }
  });
  return strings;
}

function collectKeys(value: any): string[] {
  const keys: string[] = [];
  visit(value, entry => {
    if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
      keys.push(...Object.keys(entry));
    }
  });
  return keys;
}

function findTransition(metadata: any[], expression: string): any {
  return metadata.find(entry => entry && entry.expr === expression);
}

describe('animation definitions', () => {
  it('uses the correct horizontal direction for fade entrances', () => {
    const fromLeft = collectStrings(findTransition(fadeIn, '* => fadeInLeft'));
    const fromRight = collectStrings(findTransition(fadeIn, '* => fadeInRight'));

    expect(fromLeft).toContain('translateX(-20px)');
    expect(fromRight).toContain('translateX(20px)');
  });

  it('stores per-keyframe timing curves as Angular easing metadata', () => {
    const definitions = [bounce, flip, zoomIn, zoomOut];
    const keys = collectKeys(definitions);
    const strings = collectStrings(definitions);

    expect(keys).not.toContain('animationTimingFunction');
    expect(keys).toContain('easing');
    expect(strings.some(value => value.indexOf('ubic-bezier') === 0)).toBe(false);
  });

  it('contains valid jello and hinge transforms', () => {
    expect(collectStrings(jello)).toContain('skewX(-12.5deg) skewY(-12.5deg)');
    expect(collectStrings(hinge)).toContain('rotate3d(0, 0, 1, 0deg)');
  });

  it('makes directional zoom exits finish invisible and off screen', () => {
    const down = findTransition(zoomOut, '* => zoomOutDown');
    const styles: any[] = [];
    visit(down, entry => {
      if (entry && typeof entry === 'object' && entry.transform) {
        styles.push(entry);
      }
    });

    expect(styles[0].opacity).toBe(1);
    expect(styles[0].transform).toBe('scale(1) translateY(0)');
    expect(styles[styles.length - 1].opacity).toBe(0);
    expect(styles[styles.length - 1].transform).toBe('scale(0.1) translateY(2000px)');
  });
});
