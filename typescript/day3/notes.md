# 📌 Object Property Type Safety in TS
- **Type definition = contract** → Every property marked as required must exist in the object.
- **Error example**:

```ts
type Address = { street: string; city: string; state: string };
let addr: Address = { street: "X", city: "Y" };
// ❌ Error: 'state' missing
```
