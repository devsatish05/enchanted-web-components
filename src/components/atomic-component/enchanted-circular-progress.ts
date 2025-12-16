/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
// External imports
import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

/**
 * EnchantedCircularProgress component - Indeterminate variant
 * Displays an animated circular progress indicator with track and progress colors
 * Based on Material UI's CircularProgress component
 */
@customElement('enchanted-circular-progress')
export class EnchantedCircularProgress extends EnchantedAcBaseElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .enchanted-circular-progress-root {
      display: inline-block;
      line-height: 1;
    }

    .enchanted-circular-progress-svg {
      display: block;
      animation: enchanted-circular-rotate 1.4s linear infinite;
    }

    .enchanted-circular-progress-track {
      opacity: 1;
    }

    .enchanted-circular-progress-circle {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
      animation: enchanted-circular-dash 1.4s ease-in-out infinite;
    }

    .enchanted-circular-progress-circle.disable-shrink {
      stroke-dasharray: 80px, 200px;
      animation: none;
    }

    @keyframes enchanted-circular-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes enchanted-circular-dash {
      0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
      }
      100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
      }
    }
  `;

  /**
   * Size of the circular progress in pixels
   * @default 40
   */
  @property({ type: Number }) size = 40;

  /**
   * Stroke width of the progress circle in pixels
   * @default 3.6
   */
  @property({ type: Number }) strokewidth = 3.6;

  /**
   * Color of the track (background circle)
   * Equivalent to $NG200 in enchanted styles
   * @default '#D6D6D6'
   */
  @property({ type: String }) trackcolor = '#D6D6D6';

  /**
   * Color of the progress indicator
   * Equivalent to $HCLSOFTWAREBLUE06 in enchanted styles
   * @default '#0550DC'
   */
  @property({ type: String }) progresscolor = '#0550DC';

  /**
   * Disables the shrink animation (keeps constant stroke length)
   * @default false
   */
  @property({ type: Boolean, attribute: 'disable-shrink' }) disableShrink = false;

  /**
   * Get the radius of the circle
   */
  private get radius(): number {
    return (this.size - this.strokewidth) / 2;
  }

  /**
   * Get the viewBox dimensions
   */
  private get viewBox(): string {
    return `0 0 ${this.size} ${this.size}`;
  }

  /**
   * Get the center coordinates of the circle
   */
  private get center(): number {
    return this.size / 2;
  }

  render() {
    const circleClasses = `enchanted-circular-progress-circle${this.disableShrink ? ' disable-shrink' : ''}`;
    
    return html`
      <div class="enchanted-circular-progress-root" style="width: ${this.size}px; height: ${this.size}px;">
        <svg
          class="enchanted-circular-progress-svg"
          viewBox="${this.viewBox}"
          role="progressbar"
          aria-label="Loading"
        >
          <!-- Track circle (background) -->
          <circle
            class="enchanted-circular-progress-track"
            cx="${this.center}"
            cy="${this.center}"
            r="${this.radius}"
            fill="none"
            stroke="${this.trackcolor}"
            stroke-width="${this.strokewidth}"
          />
          <!-- Progress circle (animated) -->
          <circle
            class="${circleClasses}"
            cx="${this.center}"
            cy="${this.center}"
            r="${this.radius}"
            fill="none"
            stroke="${this.progresscolor}"
            stroke-width="${this.strokewidth}"
            stroke-linecap="round"
          />
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-circular-progress': EnchantedCircularProgress
  }
}
