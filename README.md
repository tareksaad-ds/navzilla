# Navzilla - A reusable sidebar and navbar template

![Navzilla](https://i.imgur.com/GzH1Unh.jpg)

## Description:

Navzilla is a fully customizable dashboard skeleton with lots of features that includes:

- Variety of item types: Single item, Dropdowns, & Item groups.
- Horizontal and vertical sidebars.
- Collapsible sidebars.
- Navbar shipped with search bar, notification menu and profile menu.
- Written with native JavaScript and CSS and friendly with any CSS, HTML, JS framework.
- RTL support
- Pass a list of objects into `<Navzilla />` to initialize.

## Live demo:

Check the live demo on [this link.](https://happy-mestorf-5d309e.netlify.app/)

## Code example:

```javascript
<Navzilla
  isHorizontal={false}
  direction={"ltr"}
  items={[
    {
      title: "Dashboard",
      type: "link", // link | menu | group
      icon: Dashboard, // icon component
      link: "dashboard",
    },
    {
      title: "Drop",
      type: "menu",
      icon: Drop,
      menu: [
        // links only
        {
          title: "drop 1",
          link: "drop1",
        },
        {
          title: "drop 2",
          link: "drop2",
        },
      ],
    },
    {
      title: "Leadership",
      type: "group",
      menu: [
        // links only
        {
          title: "Tariq Suarez",
          type: "link", // link | menu | group
          link: "tariq",
        },
        {
          title: "Medz Coder",
          type: "link", // link | menu | group
          link: "medz",
        },
        {
          title: "Scores",
          type: "menu",
          icon: Scores,
          menu: [
            {
              title: "224",
              link: "score1",
            },
            {
              title: "115",
              link: "score2",
            },
          ],
        },
      ],
    },
    {
      title: "Profile",
      type: "menu",
      icon: Profile,
      menu: [
        {
          title: "Edit Profile",
          link: "edit",
        },
        {
          title: "Logout",
          link: "logout",
        },
      ],
    },
    {
      title: "Notes",
      type: "link",
      icon: Notes,
      link: "notes",
    },
    {
      title: "Charts",
      type: "group",
      menu: [
        {
          title: "Chart 1",
          type: "link",
          link: "chart1",
        },
        {
          title: "Chart 2",
          type: "link",
          link: "chart2",
        },
      ],
    },

    {
      title: "Messages",
      type: "menu",
      icon: Messages,
      menu: [
        {
          title: "Message 1",
          type: "link",
          link: "message1",
        },
        {
          title: "Message 2",
          type: "link",
          link: "message2",
        },
      ],
    },
  ]}
/>
```

## Support

Support for this template is delivered in ways:

- If you found a bug or issue, please submit it [here](https://github.com/tareksaad-ds/navzilla/issues/new).
- Otherwise, if you need installation help or adding new features to your installation please contact me through [my email](mailto:tareksaad.ds@gmail.com) or through my [Upwork account](https://www.upwork.com/o/profiles/users/~012c985ae0ec2c2d76/).
