import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-circular-progress';

const meta: Meta = {
  title: 'Feedback/enchanted-circular-progress',
  component: 'enchanted-circular-progress',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Size of the circular progress in pixels',
      defaultValue: 40,
    },
    strokewidth: {
      control: { type: 'number', min: 1, max: 20, step: 0.1 },
      description: 'Stroke width of the progress circle in pixels',
      defaultValue: 3.6,
    },
    trackcolor: {
      control: { type: 'color' },
      description: 'Color of the track (background circle)',
      defaultValue: '#D6D6D6',
    },
    progresscolor: {
      control: { type: 'color' },
      description: 'Color of the progress indicator',
      defaultValue: '#0550DC',
    },
    disableShrink: {
      control: { type: 'boolean' },
      description: 'Disables the shrink animation for high CPU scenarios',
      defaultValue: false,
    },
  },
  args: {
    size: 40,
    strokewidth: 3.6,
    trackcolor: '#D6D6D6',
    progresscolor: '#0550DC',
    disableShrink: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Enchanted Circular Progress component - Indeterminate variant. Displays an animated circular progress indicator '
          + 'with separate track and progress colors, inspired by Material UI CircularProgress. '
          + 'Features smooth rotation and dash animations. Use disable-shrink for high CPU load scenarios.'
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
  disableShrink: boolean;
}>;

/**
 * Interactive enchanted circular progress component with controls for size, colors, and shrink animation.
 * 
 * Use the controls panel to:
 * - Adjust the size (20-200px)
 * - Modify stroke width
 * - Change the progress color
 * - Customize the track (background) color
 * - Toggle the shrink animation for performance optimization
 */
export const Default: Story = {
  render: (args) => {
    return html`
      <enchanted-circular-progress
        .size=${args.size}
        .strokewidth=${args.strokewidth}
        .trackcolor=${args.trackcolor}
        .progresscolor=${args.progresscolor}
        ?disable-shrink=${args.disableShrink}
      ></enchanted-circular-progress>
    `;
  },
};

export const AllStates: Story = {
  render: () => {
    const gridStyle = [
      'display: grid',
      'grid-template-columns: repeat(3, 1fr)',
      'gap: 48px',
      'padding: 40px',
      'min-height: 400px',
      'justify-items: center',
      'align-items: center'
    ].join('; ') + ';';

    const itemContainerStyle = [
      'display: flex',
      'flex-direction: column',
      'align-items: center',
      'gap: 16px'
    ].join('; ') + ';';

    const labelStyle = [
      'font-weight: 600',
      'font-size: 14px',
      'color: #333'
    ].join('; ') + ';';

    return html`
      <div style="${gridStyle}">
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Default</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Large Size</span>
          <enchanted-circular-progress size="100" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Small Size</span>
          <enchanted-circular-progress size="30" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Custom Colors</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#FFE5E5" progresscolor="#e61010"></enchanted-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Thick Stroke</span>
          <enchanted-circular-progress size="40" strokewidth="8" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Disable Shrink</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></enchanted-circular-progress>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all main visual states: default, large, small, custom colors, thick stroke, and disable-shrink mode. '
          + 'The disable-shrink variant maintains a constant stroke length and is useful for high CPU load scenarios.'
      }
    },
    controls: { disable: true },
  },
};
