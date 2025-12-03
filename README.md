# Responsive Cards From Template

This demonstration project illustrates how to use Bootstrap cards with columns to create responsive cards. As the screen size changes, the number of columns changes.

A common issue when creating responsive web pages is how to display images with different aspect ratios. Here the images are wrapped in a `<div>` with a fixed aspect ratio, and the images use the `object-fit` property to ensure the images cover the entire `<div>`.

Another design hurdle is aligning content in cards. Here, a CSS grid is used to set the heights of each portion of the card.

This project has these major differences from the [previous project](https://github.com/stefanzero/responsive-cards):

- the cards are created dynamically using JavaScript
- the built-in JavaScript fetch API is used to retrieve the data from a JSON file
- the JavaScript creates an HTML Template element to generate the HTML for each card
- a child element of each article is added before the grid, so that a CSS
  container query can be added to set the font size based on the container width
- using a variable font size results in the paragraphs wrapping at the same point as the column widths change with the screen size
- the values for the grid-template-rows are also specified in em units, so the contents of
  each section of the grid maintain the same relative height
- the grid element for the figure is specified in units of cqw (container query width),
  which allows the height for the figure to be set to the desired aspect ratio

## Web Tool Libraries

- Google Fonts Oswald
- Bootstrap v5.3.7

## Content Sources

The topic of the web page is endangered species. Images were deliberately chosen to have different aspect ratios and sizes, which commonly occurs when creating web pages.

- [Animal Welfare Institute](https://awionline.org/content/list-endangered-species)
- [Google](https://www.google.com)
- [Wikipedia](https://en.wikipedia.org/wiki/Endangered_species)

## HTML Structure with Bootstrap

### Container

The `<main>` element is a Bootstrap container.

#### Row

Next is a `<section>` element which is a Bootstrap row.

##### Columns

Each animal is in an `<article>` with these Bootstrap breakpoints:

- col-sm-12: 1 column on small screens
- col-md-6: 2 columns on medium screens
- col-lg-4: 3 columns on large screens
- col-xxl-3: 4 columns on extra large screens

Note that `col-xl-3` was skipped because the layout needs a larger width to display 4 columns.

A `p-1` (padding of 1) is added to each column, to add some space between the columns.

###### Cards

Each `<article>` contains a `<div>` which is a Bootstrap card. A `p-3` (padding of 3) is added which gives space between then content of the card and its border.

##### Card Content

Each card contains a `header`, `figure`, and a `section` each for `population`, `ecology`, and `threats`.

##### CSS Grid

To make the content of each card have the same height for each header, figure and section, a CSS grid is used. The class `card-grid` was added to the `<div>` to add the property `display: grid;`.

The values for the `grid-template-rows` was adjusted so there was not excess spacing. The `<header>` was first given a value a `1fr`, and then each of the following rows were adjusted to a value with enough height to fit the content.

Here, the section with the most text was `ecology`, so that required a greater grid template row value. The values were adjusted until they looked right, which was `2.8fr` for the `<figure>`, `1.7fr` for "population", `3.4fr` for "ecology", and `3fr` for "threats".

##### Figure

The `<figure>` element contains `<div>` to wrap the `<img>` element. This `<div>` has a class `img-container`, which has a fixed aspect ratio and the `overflow` property set to `hidden`.

The `<img>` element uses the `object-fit` property is used to make the image cover the entire `<div class="img-container">`, along with a `width` and `height` set to `100%`.

### Footer

The footer contains a link (`a`) to the Animal Welfare Institute.

## Media Queries

Media queries are used to adjust the layout for different screen sizes. When
the screen size is less than 768px, the layout changes to 1 column. In this case,
there is no need to make the height of each portion of the card the same height,
so the `display: flex` is added to remove the CSS grid.
