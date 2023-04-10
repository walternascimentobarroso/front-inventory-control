# Templat React-Typescript-Tailwindcss

<details open>
<summary><h2> :scroll: Overview </h2></summary>

Admin template for new projects with React, Typescript and Tailwindcss

</details>

<details open>
<summary><h2> :desktop_computer: Start Project </h2></summary>

First clone the project:

```
git clone https://github.com/walternascimentobarroso/react-tailwind.git
```

</details>

<details open>
<summary><h2> :octocat: GitFlow </h2></summary>

```
git flow init
```

After init with git flow, use feature for new features:

```
git flow feature start new-feature
```

Now, start committing on your feature. When done, use:

```
git flow feature finish new-feature
```

</details>

<details open>
<summary><h2> :hammer_and_pick: Tools </h2></summary>

- [VSCode](https://code.visualstudio.com/)
- [EditorConfig](https://editorconfig.org/)
- [GitHub Action](https://github.com/features/actions/)
- [GitFlow](https://github.com/nvie/gitflow/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

</details>

<details open>
<summary><h2> :rocket: Deploy GH-Pages </h2></summary>

```
yarn build
git add dist -f
git commit -sam "🔧 CONFIG: Deploy"
git subtree push --prefix dist origin gh-pages
git reset --hard HEAD~
```

</details>

</details>

<details open>
<summary><h2> :roller_coaster: List of Pages and components </h2></summary>

| **Description**  | **Type**  |
| ---------------- | --------- |
| AsideMenu        | Component |
| Breadcrumb       | Component |
| Button           | Component |
| DarkMode         | Component |
| Dropdown         | Component |
| Footer           | Component |
| Fullscreen       | Component |
| Header           | Component |
| Input            | Component |
| ProfilePicture   | Component |
| Table            | Component |
| Template         | Component |
| Tooltip          | Component |
| TopButton        | Component |
| Component        | Page      |
| Error 404        | Page      |
| Faq              | Page      |
| Home             | Page      |
| Login            | Page      |
| Profile          | Page      |
| Recover Password | Page      |
| Register         | Page      |
| List of Users    | Page      |

</details>

<details open>
<summary><h2> :open_file_folder: Folder Structure </h2></summary>

```
.
├── .editorconfig
├── .gitignore
├── README.md
└── public
    └── index.php
```

</details>

<details open>
<summary><h2> :memo: License </h2></summary>

The [MIT License](LICENSE) (MIT)

</details>

<details open>
<summary><h2> :smiley_cat: Author </h2></summary>

- [@walternascimentobarroso](https://walternascimentobarroso.github.io/)

</details>

---

Made with &nbsp;❤️&nbsp;
