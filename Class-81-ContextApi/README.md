<h1 align="center">🌐 React Context API</h1>

<hr/>

<h2>📌 What is Context API?</h2>
<p>
<b>Context API</b> is a built-in feature in React that allows data to be
<b>shared across the component tree without passing props manually</b>
at every level.
</p>
<p>
It is mainly used to avoid <b>prop drilling</b> when the same data is required
by many components.
</p>

<hr/>

<h2>❓ Why Context API Exists</h2>
<p>
In large React applications, passing props from parent to deeply nested
components leads to unnecessary complexity.
</p>

<ul>
  <li>Messy and repetitive code</li>
  <li>Unnecessary coupling between components</li>
  <li>Difficult to maintain and scale</li>
</ul>

<p>
<b>Context API solves this by providing a global data channel.</b>
</p>

<hr/>

<h2>🧠 Core Concept</h2>

<table>
  <thead>
    <tr>
      <th align="left">Component</th>
      <th align="left">Responsibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Provider</b></td>
      <td>Supplies data to the component tree</td>
    </tr>
    <tr>
      <td><b>Consumer</b></td>
      <td>Reads data from the context</td>
    </tr>
  </tbody>
</table>

<p><i>Rule of thumb: Provide high, consume low.</i></p>

<hr/>

<h2>🔁 Context API Workflow</h2>

<ol>
  <li>Create a Context</li>
  <li>Wrap components with a Provider</li>
  <li>Consume data using <code>useContext</code></li>
</ol>

<hr/>

<h2>🧩 Basic Example</h2>

<h3>1️⃣ Create Context</h3>
<pre><code>
import { createContext } from "react";

const UserContext = createContext(null);
export default UserContext;
</code></pre>

<h3>2️⃣ Provide Context</h3>
<pre><code>
&lt;UserContext.Provider value={{ user }}&gt;
  &lt;App /&gt;
&lt;/UserContext.Provider&gt;
</code></pre>

<h3>3️⃣ Consume Context</h3>
<pre><code>
import { useContext } from "react";
import UserContext from "./UserContext";

const { user } = useContext(UserContext);
</code></pre>

<p>
✅ No prop drilling<br/>
✅ Cleaner code<br/>
✅ Direct access to shared data
</p>

<hr/>

<h2>✅ When to Use Context API</h2>

<ul>
  <li>Global application data</li>
  <li>Data needed by many unrelated components</li>
  <li>Relatively stable values</li>
</ul>

<h4>Common Use Cases</h4>
<ul>
  <li>Authentication (user, token)</li>
  <li>Theme (light / dark)</li>
  <li>Language or localization</li>
  <li>Global UI state (modals, sidebars)</li>
</ul>

<hr/>

<h2>❌ When NOT to Use Context API</h2>

<ul>
  <li>Small local component state</li>
  <li>Frequently changing values</li>
  <li>Replacing all props usage</li>
</ul>

<p>
⚠️ Any change in context value causes all consumers to re-render.
</p>

<hr/>

<h2>📊 Props vs State vs Context</h2>

<table>
  <thead>
    <tr>
      <th align="left">Feature</th>
      <th align="left">Props</th>
      <th align="left">State</th>
      <th align="left">Context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Scope</td>
      <td>Parent → Child</td>
      <td>Component</td>
      <td>Global</td>
    </tr>
    <tr>
      <td>Ease</td>
      <td>Simple</td>
      <td>Simple</td>
      <td>Moderate</td>
    </tr>
    <tr>
      <td>Re-renders</td>
      <td>Controlled</td>
      <td>Controlled</td>
      <td>Can be expensive</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>🔄 Context API vs Redux</h2>

<table>
  <thead>
    <tr>
      <th align="left">Context API</th>
      <th align="left">Redux</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Built-in</td>
      <td>External library</td>
    </tr>
    <tr>
      <td>Minimal setup</td>
      <td>Boilerplate-heavy</td>
    </tr>
    <tr>
      <td>Good for small / medium apps</td>
      <td>Best for large apps</td>
    </tr>
    <tr>
      <td>No middleware</td>
      <td>Middleware & DevTools</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>🔥 Common Interview Questions</h2>

<p>
<b>Q: Is Context API a state management tool?</b><br/>
➡️ No. It only helps share state.
</p>

<p>
<b>Q: Does Context replace Redux?</b><br/>
➡️ No. Redux handles complex, scalable state logic.
</p>

<p>
<b>Q: What triggers re-renders in Context?</b><br/>
➡️ Any change in the Provider’s <code>value</code>.
</p>

<hr/>

<h2>🛠 Best Practices</h2>

<ul>
  <li>Create multiple focused contexts</li>
  <li>Wrap providers at the root level</li>
  <li>Memoize context values when necessary</li>
  <li>Combine Context with <code>useReducer</code> for complex logic</li>
</ul>

<hr/>

<h2>🎯 Key Takeaway</h2>

<blockquote>
  Use Context API for global, stable data — not for every piece of state.
  Misusing it can lead to performance issues.
</blockquote>
