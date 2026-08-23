# Notebooks



Two files: one to run in a real notebook environment with kernel, the other is generated and uses static images instead of the live visualizations so that humans can see an example of the notebook in places like github that otherwise would strip out the iframe and code that generates the interactive visualizations. 



| file | outputs in git | what it is |
|---|---|---|
| [`gufe-viz-demo.ipynb`](./gufe-viz-demo.ipynb) | **none** | Run it this locally |
| [`gufe-viz-gallery.ipynb`](./gufe-viz-gallery.ipynb) | screenshots, ~660 kB | Renders on GitHub. |

---

## `gufe-viz-demo.ipynb` - real notebook to run

Every payload type, the live-gufe-object path, and every way of delivering a
view: static only, live with update-in-place, `static=False`, `to_html` to a
file, the CLI, the byte costs, and the three degradation cases. This is the file
to open when you have changed something and want to know whether it still works.

```bash
pixi run notebook    # JupyterLab, on this file
pixi run marimo      # the same file, converted, in marimo
```

It is committed **with no outputs**, and should stay that way. Its outputs are
`<iframe srcdoc="...">` carrying a whole page each, so a saved run adds a
quarter of a megabyte per view to a file that is otherwise 20 kB - and none of
it renders on GitHub anyway. Clear outputs before committing.

## `gufe-viz-gallery.ipynb` - the one you look at online

The same views, as pictures, so that **the visualizations are visible on GitHub
to someone who is not going to install anything** - a reviewer on a pull
request, mostly.

### Why it has to exist

GitHub's notebook renderer strips `<iframe>` and `<script>` from cell outputs.
That is everything `gufe_viz.view()` emits: the static layer is an
`<iframe srcdoc>` holding the page, and the live layer is a widget that needs a
kernel and a widget manager, neither of which GitHub has. So an executed copy of
the demo notebook shows a blank under every single cell there, however well it
works in a browser.

`image/png` is the one output type that survives. Hence screenshots.

### It is a picture of the truth, not the truth

The cells hold the **real** `gufe_viz.view(payloads[...])` call. Run the gallery
notebook and every screenshot is replaced by the live, interactive view - which
is a fine way to check that a picture is honest, and a bad way to leave the file.

**If you run it, do not commit the result.** Running replaces the PNGs with the
HTML outputs GitHub cannot show, which is the whole problem this file exists to
solve. Restore it with:

```bash
pixi run gallery
```

### When to regenerate

**Whenever you change what a view draws.** The screenshots are a snapshot; they
do not know the drawing code moved on, and a stale gallery is worse than no
gallery because it looks authoritative. `pixi run gallery` rebuilds the bundle
first, so it always pictures the current source.

Adding a new payload type means adding it to `NOTES` in
[`scripts/make_gallery.py`](../../scripts/make_gallery.py), which is both the
caption and the list of what gets captured.

### How the pictures are made

`scripts/make_gallery.py` writes each example payload through `to_html`,
screenshots the page in headless Chrome, and embeds the PNG as the cell's
output. Two details in there are not optional and were both learned the hard
way:

- **`--enable-unsafe-swiftshader --use-gl=angle --use-angle=swiftshader`.** A
  headless browser has no GPU, and without software WebGL 3Dmol cannot create a
  context: every 3D pane comes out as *"error creating viewer"* rather than as a
  molecule.
- **Watch for the file, then kill the browser.** Given a throwaway profile,
  Chrome writes the PNG and then does not exit. The script waits for the file's
  size to settle and terminates it, rather than waiting out a timeout per page.

It uses whatever Chrome or Chromium is on the machine; set `CHROME` to point at
a different binary. Nothing else in this repository needs a browser installed,
so this is the only task that will fail for the lack of one.
