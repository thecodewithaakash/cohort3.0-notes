

If your goal with **EaseUI** is eventually to contribute components comparable to shadcn/ui, Ant Design, Material UI, etc., Tooltip is actually a very good component to learn from because it forces you to think about:

*   API design
*   component composition
*   state management
*   accessibility
*   positioning
*   DOM/portal behavior
*   controlled vs uncontrolled components
*   keyboard interactions
*   CSS architecture
*   TypeScript types
*   edge cases
*   testing
*   documentation
*   reusable primitives

Let's learn it **from zero**, rather than jumping directly into code.

* * *

1\. First: What is “component design”?
======================================

As a beginner, you might think:

> “Component design means deciding how I write the React component.”

That's only a small part of it.

For a UI library, **component design means deciding how other developers will use your component.**

For example, suppose EaseUI has:

```typescript
<Tooltip content="Delete this item">  <button>🗑️</button></Tooltip>
```

A user of your library shouldn't need to know:

*   how the tooltip calculates its position
*   how it handles mouse events
*   how it handles keyboard focus
*   whether it uses a portal
*   how it prevents overflow
*   how it animates
*   how it manages timers

That's **your component's internal implementation**.

The developer should primarily care about the **public API**.

So think about Tooltip as two worlds:

```
                    Tooltip                       │          ┌────────────┴────────────┐          │                         │       Public API               Internal       (developer)             implementation          │                         │          ▼                         ▼    content="..."              positioning    placement="..."            timers    open={...}                 events    onOpenChange={...}         accessibility    delay={...}                portal    disabled                   animation
```

This distinction is one of the most important ideas in component design.

* * *

2\. Before coding: understand the component
===========================================

Let's forget React for a moment.

What is a tooltip?

A tooltip is a small piece of contextual information that appears when a user interacts with another element.

For example:

```
              ┌─────────────────────┐              │ Delete this message │              └──────────┬──────────┘                         │                         ▼                       [ 🗑 ]
```

The button is the **trigger**.

The floating message is the **content**.

So conceptually:

```
Tooltip ├── Trigger └── Content
```

This gives us our first component-design question:

> **What are the responsibilities of each part?**

* * *

3\. Identify the responsibilities
=================================

A good component engineer doesn't immediately start writing JSX.

First ask:

> What does this component need to do?

For Tooltip:

### Trigger

The trigger:

*   receives user interaction
*   can receive focus
*   causes tooltip to appear
*   causes tooltip to disappear

Interactions could include:

```
Mouse enterMouse leaveFocusBlurTouch?Keyboard?
```

### Content

The content:

*   displays the tooltip
*   appears near the trigger
*   has positioning
*   has styling
*   may animate
*   should be accessible

### Tooltip itself

The parent component manages the relationship between trigger and content.

Conceptually:

```
Tooltip│├── Trigger│     ├── mouse events│     ├── focus events│     └── accessibility│└── Content      ├── position      ├── visibility      ├── animation      └── accessibility
```

Already you're doing **component design**, not merely coding.

* * *

4\. Now think like a library author
===================================

Imagine you're building EaseUI.

A developer comes to your documentation.

What should this API look like?

One possible API:

```typescript
<Tooltip content="Delete">  <button>Delete</button></Tooltip>
```

Very simple.

But then developers might want:

```typescript
<Tooltip  content="Delete this item"  placement="top">  <button>Delete</button></Tooltip>
```

Maybe:

```typescript
<Tooltip  content="Delete this item"  placement="right"  delay={500}>  <button>Delete</button></Tooltip>
```

Maybe controlled usage:

```typescript
<Tooltip  content="Delete"  open={open}  onOpenChange={setOpen}>  <button>Delete</button></Tooltip>
```

Now we have an important concept:

Component API
-------------

The API might become:

```typescript
type TooltipProps = {  children: React.ReactNode;  content: React.ReactNode;  placement?: Placement;  delay?: number;  open?: boolean;  defaultOpen?: boolean;  onOpenChange?: (open: boolean) => void;  disabled?: boolean;};
```

Don't worry about implementing this yet.

We're **designing the contract first**.

* * *

5\. The most important question: What should be configurable?
=============================================================

This is where beginners often make one of two mistakes.

### Mistake 1: Too little configuration

```typescript
<Tooltip text="Hello">
```

And that's it.

Then consumers immediately ask:

> Can I change placement?

> Can I control it?

> Can I change delay?

> Can I disable it?

Your API becomes restrictive.

* * *

### Mistake 2: Too much configuration

You could theoretically expose:

```typescript
<Tooltip  content="Hello"  top={20}  left={30}  animationDuration={150}  arrowSize={5}  arrowOffset={12}  zIndex={9999}  mouseEnterDelay={100}  mouseLeaveDelay={50}  .../>
```

Now you've exposed implementation details.

That's dangerous.

A good library API tries to expose **meaningful concepts**, not every internal mechanism.

For example:

```typescript
placement="top"
```

is a meaningful concept.

While:

```typescript
topOffset={13}leftOffset={27}
```

might expose too much implementation detail.

* * *

6\. Start with requirements
===========================

Before implementing EaseUI Tooltip, write down requirements.

Think in categories.

Basic behavior
--------------

```
Tooltip should:- display content- appear when trigger is hovered- disappear when trigger is no longer hovered- appear when trigger receives keyboard focus- disappear when trigger loses focus
```

Positioning
-----------

```
Tooltip should support:- top- bottom- left- right
```

Later:

```
top-starttop-endbottom-startbottom-end...
```

But don't build everything immediately.

Start small.

* * *

7\. Think about state
=====================

Here's an important system-design question:

> Who owns the tooltip's open/closed state?

At the simplest level:

```
hover  ↓open = true
leave  ↓open = false
```

But there are actually two possible ways to manage state.

### Uncontrolled

The Tooltip manages its own state:

```typescript
<Tooltip content="Hello">  <button>Hello</button></Tooltip>
```

Internally:

```
Tooltip   │   └── open state
```

* * *

### Controlled

The parent manages the state:

```typescript
<Tooltip  content="Hello"  open={open}  onOpenChange={setOpen}>  <button>Hello</button></Tooltip>
```

Now:

```
Parent  │  └── open state        │        ▼     Tooltip
```

This distinction is **very important in reusable component libraries**.

You will encounter it everywhere:

*   Dialog
*   Dropdown
*   Popover
*   Accordion
*   Tabs
*   Select
*   Tooltip

A common library pattern is to support both:

```
uncontrolled    ↓defaultOpen
controlled    ↓open + onOpenChange
```

* * *

8\. Why `defaultOpen` and `open` are different
==============================================

This is worth understanding deeply.

### `defaultOpen`

Means:

> “Start open, but let the component manage itself.”

```typescript
<Tooltip  content="Hello"  defaultOpen>
```

Conceptually:

```
initial value     ↓  component     ↓owns state
```

* * *

### `open`

Means:

> “I control the state.”

```typescript
<Tooltip  content="Hello"  open={isOpen}  onOpenChange={setIsOpen}>
```

Conceptually:

```
parent  │  ├── open  │  └── onOpenChange         │         ▼      Tooltip
```

This is called a **controlled component**.

Learning this through Tooltip will help you understand many advanced React components.

* * *

9\. Now think about events
==========================

Tooltip sounds simple:

```
mouseenter → openmouseleave → close
```

But real UI is more complicated.

Imagine:

```
       Tooltip content       ┌─────────────┐       │ Hello       │       └─────────────┘             │             ▼          [Button]
```

What happens when the user moves the mouse from the button toward the tooltip?

You need to think about:

```
Button  ↓mouse leaves  ↓tooltip closes?
```

Maybe yes.

But if the tooltip itself is interactive, maybe it shouldn't close immediately.

This leads to another design question:

> Is EaseUI Tooltip purely informational, or can it contain interactive content?

That's a **product/API decision**, not just a coding decision.

For a first version, I'd recommend:

> Make Tooltip non-interactive.

Meaning:

```typescript
<Tooltip content="Delete this item">
```

Good.

But don't make this your initial goal:

```typescript
<Tooltip>  <div>    <button>Edit</button>    <button>Delete</button>  </div></Tooltip>
```

That's closer to a **Popover**.

This distinction matters.

* * *

10\. Tooltip vs Popover
=======================

This is an excellent component-design lesson.

### Tooltip

Usually:

```
brief contextual informationnon-interactive
```

Example:

```
      "Save changes"            ↓          [💾]
```

### Popover

Usually:

```
richer contentpotentially interactive
```

Example:

```
        ┌───────────────────────┐        │ Account               │        │                       │        │ Profile               │        │ Settings              │        │ Logout                │        └───────────────────────┘                  ↓                [User]
```

Don't accidentally turn Tooltip into Popover.

Good component design includes **clear boundaries**.

* * *

11\. Accessibility is not optional
==================================

This is where component-library development becomes much more interesting.

A tooltip isn't just:

```css
position: absolute;
```

You need to think:

> How does a screen reader know this tooltip belongs to this button?

For example:

```html
<button aria-describedby="tooltip-123">  Delete</button>
<div id="tooltip-123">  Delete this item</div>
```

The relationship is:

```
Button  │  │ aria-describedby  ▼Tooltip
```

This is an important concept:

Semantic relationship
---------------------

The DOM needs to communicate:

> “This piece of information describes this element.”

That is different from merely visually placing one element above another.

* * *

12\. Keyboard interaction
=========================

Imagine someone doesn't use a mouse.

They navigate with:

```
Tab ↓Tab ↓Tab
```

When the button receives focus:

```
<button>   ↑ keyboard focus
```

The tooltip should generally be able to appear on focus.

Therefore:

```
hover   ↓open
focus   ↓open
```

And:

```
mouse leave   ↓close
blur   ↓close
```

This is why simply implementing:

```typescript
onMouseEnteronMouseLeave
```

is not enough for a library-quality Tooltip.

* * *

13\. Positioning is another major problem
=========================================

Suppose you write:

```css
.tooltip {  position: absolute;  top: -40px;}
```

Looks fine.

Until:

```
┌─────────────────────────────┐│ Tooltip                     ││                             ││                             ││                      [btn]  │└─────────────────────────────┘
```

Or:

```
[btn]  │  ▼┌─────────────────────────────┐│                             ││ Tooltip goes outside screen │└─────────────────────────────┘
```

You need to think about **collision detection**.

For example:

```
Requested:          tooltip             ↓          [button]

But if there's no space:
[button]   ↑   │ tooltip
```

So the tooltip might need to automatically flip:

```
requested placement = top
        tooltip           ↓        [button]

if top doesn't fit:
        [button]           ↓        tooltip
```

Now we're getting into **floating UI positioning**.

You don't necessarily need to implement this positioning engine yourself.

A good component engineer asks:

> Should EaseUI build this from scratch, or should we use an established positioning primitive/library?

That's system design.

* * *

14\. Component architecture
===========================

Eventually your Tooltip could conceptually be divided like this:

```
Tooltip│├── TooltipProvider│├── TooltipTrigger│├── TooltipContent│└── positioning layer
```

Or a simpler API:

```typescript
<Tooltip>  <TooltipTrigger>    <button>Save</button>  </TooltipTrigger>
  <TooltipContent>    Save changes  </TooltipContent></Tooltip>
```

This is a different API style from:

```typescript
<Tooltip content="Save changes">  <button>Save</button></Tooltip>
```

Both are valid.

Now you have a component-design decision.

* * *

15\. Two major API styles
=========================

Style A — Simple API
--------------------

```typescript
<Tooltip  content="Save changes"  placement="top">  <button>Save</button></Tooltip>
```

Advantages:

*   easy to learn
*   excellent developer experience
*   small API
*   great for simple tooltips

* * *

Style B — Compound components
-----------------------------

```typescript
<Tooltip>  <TooltipTrigger>    <button>Save</button>  </TooltipTrigger>
  <TooltipContent>    Save changes  </TooltipContent></Tooltip>
```

Advantages:

*   more flexible
*   better composition
*   easier to customize individual parts
*   useful for complex design systems

But:

*   more verbose
*   more concepts to learn

* * *

16\. What should EaseUI choose?
===============================

For your **first Tooltip**, I'd recommend starting with the simpler API:

```typescript
<Tooltip content="Save changes">  <button>Save</button></Tooltip>
```

Then understand how it could evolve.

Your mental model should be:

```
V1
<Tooltip content="...">   trigger</Tooltip>

          ↓

V2
<Tooltip>   <TooltipTrigger>      trigger   </TooltipTrigger>
   <TooltipContent>      content   </TooltipContent></Tooltip>
```

Don't prematurely build a massive API.

This principle is extremely valuable:

> **Start with the smallest API that solves the problem, but design the internals so the component can evolve.**

* * *

17\. Now let's think about the actual architecture
==================================================

A reasonable first architecture could look like:

```
Tooltip│├── state│    ├── open│    ├── setOpen│    └── controlled/uncontrolled logic│├── interaction│    ├── pointer enter│    ├── pointer leave│    ├── focus│    └── blur│├── positioning│    ├── placement│    ├── collision handling│    └── offset│├── accessibility│    ├── aria-describedby│    └── generated id│├── rendering│    ├── content│    └── portal│└── styling     ├── background     ├── typography     ├── arrow     └── animation
```

This is much closer to **system design thinking**.

* * *

18\. Why a Portal?
==================

This is another important frontend concept.

Imagine your button lives inside:

```css
.card {  overflow: hidden;}
```

Your tooltip:

```
Card┌───────────────────────┐│                       ││             [button]  ││                 ↓     ││           tooltip     │└───────────────────────┘
```

The tooltip may get clipped.

A portal can allow the tooltip to render somewhere else in the DOM:

```
<body>   │   ├── Application   │    └── Card   │         └── Button   │   └── Tooltip
```

Visually:

```
Button ───────────────► Tooltip
```

even though they aren't necessarily siblings in the DOM tree.

This helps with:

*   overflow
*   stacking contexts
*   z-index problems
*   positioning

Again, you don't need to memorize this.

Understand **why** portals exist.

* * *

19\. `z-index` is not the whole story
=====================================

Beginners often think:

> “Tooltip is above everything, so just use `z-index: 9999`.”

But stacking contexts can make this fail.

For example:

```css
.parent {  transform: translateZ(0);  z-index: 1;}
```

A child tooltip with:

```css
z-index: 999999;
```

can still be trapped inside that stacking context.

That's another reason floating components often use portals.

This is the sort of issue you'll encounter repeatedly when building:

*   Tooltip
*   Dropdown
*   Modal
*   Popover
*   Select
*   Date picker

So Tooltip is a surprisingly good learning exercise.

* * *

20\. Delay is a design problem
==============================

Should the tooltip appear immediately?

```
hover ↓0ms ↓tooltip
```

Maybe.

But if a user moves their cursor across 20 icons:

```
[1] [2] [3] [4] [5] [6] ...
```

you don't necessarily want:

```
tooltiptooltiptooltiptooltiptooltiptooltip
```

flashing rapidly.

So libraries often use a delay:

```
pointer enters     ↓ wait 300ms     ↓still hovering?     ↓open
```

API:

```typescript
<Tooltip  content="Save"  delay={300}>
```

But now another question appears:

> Should every Tooltip have its own timer?

Maybe.

But if an application has 100 tooltips, perhaps a provider could manage shared configuration.

Now you are thinking about **library-level architecture**.

* * *

21\. TooltipProvider
====================

You may eventually want:

```typescript
<TooltipProvider delay={300}>  <App /></TooltipProvider>
```

Then:

```typescript
<Tooltip content="Save">   <button>Save</button></Tooltip>
<Tooltip content="Delete">   <button>Delete</button></Tooltip>
```

They inherit:

```
delay = 300ms
```

This gives you another design principle:

> Put configuration at the level where it naturally belongs.

Global/default configuration:

```
Provider
```

Component-specific configuration:

```
Tooltip
```

Instance state:

```
individual Tooltip
```

* * *

22\. Your first EaseUI Tooltip API
==================================

I would initially design something approximately like:

```typescript
type TooltipProps = {  children: React.ReactElement;  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  open?: boolean;  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delay?: number;
  disabled?: boolean;};
```

Notice something important.

We're **not** exposing:

```typescript
topOffsetleftOffsetinternalTimertooltipIdportalContainerinternalPosition
```

Those are implementation details.

* * *

23\. But don't code this yet
============================

Your homework should probably proceed in layers.

I'd recommend this learning path:

```
                    Tooltip                       │                       ▼             1. Requirements                       │                       ▼               2. Public API                       │                       ▼             3. State model                       │                       ▼            4. Interaction model                       │                       ▼             5. Accessibility                       │                       ▼              6. Positioning                       │                       ▼              7. Rendering                       │                       ▼                8. Styling                       │                       ▼                 9. Testing                       │                       ▼              10. Documentation
```

This is much better than:

```
open VS Code↓create Tooltip.tsx↓write JSX↓write CSS↓done
```

* * *

24\. What I want you to learn from this homework
================================================

Don't measure your success by:

> “Does my tooltip appear?”

Instead measure it by:

### Level 1 — UI

```
Can I display a tooltip?
```

### Level 2 — API

```
Can another developer use it easily?
```

### Level 3 — Behavior

```
Does it behave correctly?
```

### Level 4 — Accessibility

```
Can keyboard and assistive-technology users use it?
```

### Level 5 — Robustness

```
Does it work near screen edges?Inside complex layouts?With portals?
```

### Level 6 — Architecture

```
Can the component evolve without breaking its API?
```

### Level 7 — Library quality

```
Is it tested?Documented?Typed?Consistent with the rest of EaseUI?
```

That is the difference between:

> **building a component**

and

> **designing a component for a UI library.**

* * *

25\. Your mental model for EaseUI
=================================

I want you to start seeing the library like this:

```
EaseUI│├── Components│    ├── Tooltip│    ├── Button│    ├── Dialog│    ├── Popover│    ├── Dropdown│    └── ...│├── Primitives│    ├── Portal│    ├── Slot│    ├── Positioning│    ├── Focus management│    └── ...│├── Utilities│    ├── controlled state│    ├── IDs│    ├── event merging│    └── ...│└── Design system     ├── tokens     ├── colors     ├── spacing     ├── typography     └── motion
```

Eventually, Tooltip shouldn't reinvent things that Dialog, Popover, Dropdown, etc. also need.

For example:

```
Tooltip ──────┐              │Popover ──────┼──► positioning primitive              │Dropdown ─────┤              │Select ───────┘
```

That's where **component architecture** starts becoming **frontend system design**.

* * *

26\. The biggest lesson
=======================

When your instructor says:

> “Build a Tooltip component.”

Don't hear:

> “Write Tooltip.tsx.”

Hear:

> **“Design a reusable interface and architecture for a Tooltip that other developers will depend on.”**

Then ask:

```
What problem does it solve?        ↓Who uses it?        ↓What API should they get?        ↓What state does it have?        ↓Who owns that state?        ↓What interactions does it support?        ↓What accessibility requirements exist?        ↓How is it positioned?        ↓What happens at boundaries?        ↓What should be internal?        ↓What should be configurable?        ↓What should be tested?        ↓How can it evolve?
```

**That is component design.**

* * *

Where I suggest we go next
--------------------------

Rather than dumping a huge Tooltip implementation on you, I'd teach you this as a mini course:

**Part 1 — Component thinking**  
Requirements → responsibilities → boundaries

**Part 2 — API design**  
Design the exact EaseUI Tooltip API and compare it with patterns used by mature UI libraries.

**Part 3 — State design**  
Controlled/uncontrolled state, `open`, `defaultOpen`, `onOpenChange`, timers.

**Part 4 — React architecture**  
How `Tooltip`, trigger, content, refs, event handlers and context fit together.

**Part 5 — Accessibility**  
`aria-describedby`, IDs, keyboard/focus behavior and screen-reader considerations.

**Part 6 — Positioning**  
Absolute positioning → viewport boundaries → collision detection → portals → why floating UI is difficult.

**Part 7 — TypeScript design**  
Designing the `TooltipProps` API without making it unnecessarily complicated.

**Part 8 — Testing**  
What a serious UI-library Tooltip should test.

**Part 9 — Documentation**  
How to document EaseUI Tooltip like a real component library.

**Part 10 — Code review**  
You implement it yourself, then we review your architecture like an actual library PR.

