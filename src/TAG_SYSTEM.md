# Tag System Documentation

## Overview
The tag system provides a centralized way to manage and display categorized tags across projects and research items on the website.

## Configuration File
Location: `/src/tags.json`

This file maintains all available tags with their associated colors to ensure consistency across the site.

## Current Tags

| Tag Name | Color | Usage | CSS Class |
|----------|-------|-------|-----------|
| RL theory | Purple (#a78bfa) | Reinforcement Learning theory research | `tag-rl-theory` |
| Leadership | Orange (#f59e0b) | Leadership roles/experiences | `tag-leadership` |
| Quantitative Research | Green (#10b981) | Quantitative/financial research | `tag-quant` |
| Runtime Infra | Blue (#3b82f6) | Runtime infrastructure projects | `tag-runtime` |
| Application | Pink (#ec4899) | Application development | `tag-app` |

## Adding New Tags

### 1. Update `tags.json`
```json
{
  "tags": {
    "New Tag Name": {
      "color": "#hexcolor",
      "bg": "rgba(r, g, b, 0.15)"
    }
  }
}
```

### 2. Add CSS Class in `style.css`
```css
.tag-classname{
  color:#hexcolor;
  background:rgba(r, g, b, 0.15);
  border-color:rgba(r, g, b, 0.3);
}
```

### 3. Use in HTML
```html
<div class="tags">
  <span class="tag tag-classname">New Tag Name</span>
</div>
```

## Usage Examples

### Research Page
```html
<div class="tags">
  <span class="tag tag-rl-theory">RL theory</span>
</div>
```

### Projects Page
```html
<div class="tags">
  <span class="tag tag-runtime">Runtime Infra</span>
  <span class="tag tag-app">Application</span>
</div>
```

## Best Practices
- Keep tag names concise (1-3 words)
- Use consistent color schemes for related categories
- Always update both `tags.json` and CSS when adding new tags
- Reuse existing tags when possible to maintain consistency
