import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-circular-progress';

const meta: Meta = {
  title: 'Feedback/dx-circular-progress',
  component: 'dx-circular-progress',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Size of the circular progress in pixels',
      defaultValue: 40,
    },
    strokewidth: {
      control: { type: 'number', min: 1, max: 10, step: 0.1 },
      description: 'Stroke width of the progress circle',
      defaultValue: 3.6,
    },
    trackcolor: {
      control: { type: 'color' },
      description: 'Color of the track (background circle)',
      defaultValue: 'rgba(0, 0, 0, 0.12)',
    },
    progresscolor: {
      control: { type: 'color' },
      description: 'Color of the progress indicator',
      defaultValue: '#1976d2',
    },
    disableshrink: {
      control: 'boolean',
      description: 'Disables the shrink animation for better performance under high CPU load',
      defaultValue: false,
    },
  },
  args: {
    size: 40,
    strokewidth: 3.6,
    trackcolor: 'rgba(0, 0, 0, 0.12)',
    progresscolor: '#1976d2',
    disableshrink: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Circular progress component - Indeterminate variant. Displays an animated circular progress indicator '
          + 'with separate track and progress colors, inspired by Material UI CircularProgress.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  size: number;
  strokewidth: number;
  trackcolor: string;
  progresscolor: string;
  disableshrink: boolean;
}>;

/**
 * Default indeterminate circular progress with standard MUI colors
 */
export const Default: Story = {
  render: (args) => {
    return html`
      <dx-circular-progress
        .size=${args.size}
        .strokewidth=${args.strokewidth}
        .trackcolor=${args.trackcolor}
        .progresscolor=${args.progresscolor}
        ?disableshrink=${args.disableshrink}
      ></dx-circular-progress>
    `;
  },
};

/**
 * Different sizes of circular progress
 */
export const Sizes: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 20px; align-items: center;">
        <dx-circular-progress size="20"></dx-circular-progress>
        <dx-circular-progress size="30"></dx-circular-progress>
        <dx-circular-progress size="40"></dx-circular-progress>
        <dx-circular-progress size="60"></dx-circular-progress>
        <dx-circular-progress size="80"></dx-circular-progress>
      </div>
    `;
  },
};

/**
 * Different colors
 */
export const Colors: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 20px; align-items: center;">
        <dx-circular-progress progresscolor="#1976d2"></dx-circular-progress>
        <dx-circular-progress progresscolor="#9c27b0"></dx-circular-progress>
        <dx-circular-progress progresscolor="#2e7d32"></dx-circular-progress>
        <dx-circular-progress progresscolor="#ed6c02"></dx-circular-progress>
        <dx-circular-progress progresscolor="#d32f2f"></dx-circular-progress>
      </div>
    `;
  },
};

/**
 * With custom track color
 */
export const CustomTrackColor: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 20px; align-items: center;">
        <dx-circular-progress 
          progresscolor="#1976d2" 
          trackcolor="rgba(25, 118, 210, 0.2)"
        ></dx-circular-progress>
        <dx-circular-progress 
          progresscolor="#9c27b0" 
          trackcolor="rgba(156, 39, 176, 0.2)"
        ></dx-circular-progress>
        <dx-circular-progress 
          progresscolor="#2e7d32" 
          trackcolor="rgba(46, 125, 50, 0.2)"
        ></dx-circular-progress>
      </div>
    `;
  },
};

/**
 * Disable shrink animation for better performance under high CPU load
 */
export const DisableShrink: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 40px; align-items: center;">
        <div style="text-align: center;">
          <dx-circular-progress></dx-circular-progress>
          <div style="margin-top: 8px; font-size: 12px;">Default</div>
        </div>
        <div style="text-align: center;">
          <dx-circular-progress disableshrink></dx-circular-progress>
          <div style="margin-top: 8px; font-size: 12px;">Disable Shrink</div>
        </div>
      </div>
    `;
  },
};

/**
 * Different stroke widths
 */
export const StrokeWidths: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 20px; align-items: center;">
        <dx-circular-progress strokewidth="2"></dx-circular-progress>
        <dx-circular-progress strokewidth="3.6"></dx-circular-progress>
        <dx-circular-progress strokewidth="5"></dx-circular-progress>
        <dx-circular-progress strokewidth="7"></dx-circular-progress>
      </div>
    `;
  },
};
