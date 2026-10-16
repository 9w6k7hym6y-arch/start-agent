<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep prototype state in a shared React provider without a backend; this preserves the requested mock-only experience across navigation.
- Keep shared screen components in src/components/start-agent and expose each screen through its own TanStack leaf route; this keeps navigation and page metadata explicit.
- Define the phone layout and all visual styling in src/styles.css using semantic tokens; this keeps the VTB presentation consistent across screens.
