# React Button Component

A reusable, accessible, and customizable button component built with React and TypeScript.

## Features

- ✨ **Multiple Variants**: Primary, Secondary, and Danger styles
- 📏 **Size Options**: Small, Medium, and Large sizes
- ♿ **Accessible**: Proper focus states and ARIA support
- 🎨 **Customizable**: Easy to style and extend
- 📱 **Responsive**: Works great on all screen sizes
- ⚡ **Type-Safe**: Built with TypeScript

## Installation

```bash
npm install
```

## Usage

### Basic Button

```tsx
import Button from './src/Button';

<Button label="Click me" onClick={() => console.log('Clicked!')} />
```

### With Variants

```tsx
<Button label="Primary" variant="primary" />
<Button label="Secondary" variant="secondary" />
<Button label="Danger" variant="danger" />
```

### With Sizes

```tsx
<Button label="Small" size="small" />
<Button label="Medium" size="medium" />
<Button label="Large" size="large" />
```

### Disabled State

```tsx
<Button label="Disabled" disabled />
```

### Form Buttons

```tsx
<Button label="Submit" type="submit" />
<Button label="Reset" type="reset" />
```

## Component Props

| Prop      | Type                          | Default      | Description                  |
| --------- | ----------------------------- | ------------ | ---------------------------- |
| `label`   | `string`                      | Required     | Button text                  |
| `onClick` | `() => void`                  | Optional     | Click handler                |
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button style variant         |
| `size`    | `'small' \| 'medium' \| 'large'` | `'medium'`  | Button size                  |
| `disabled` | `boolean`                    | `false`      | Disable the button           |
| `type`    | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type             |
| `children` | `React.ReactNode`            | Optional     | Child content (overrides label) |

## Development

```bash
npm run dev
```

This will start the Vite development server at `http://localhost:5173`.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Styling

The button component uses CSS for styling. You can customize the appearance by modifying the `src/Button.css` file.

## Accessibility

- ♿ Proper focus indicators
- 🎯 Keyboard navigation support
- 🔊 Screen reader compatible
- 🚫 Disabled state properly handled

---

**Testing environment to test the capabilities of Github Copilot.**
